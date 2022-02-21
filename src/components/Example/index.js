import "./styles.css";

export default class Example {
  constructor($target) {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "example";
    $target.appendChild(this.$wrapper);
    this.render();
  }

  onLogin() {
    alert("로그인을 하셨습니다!");
  }

  onCancel() {
    alert("취소 버튼을 누르셨습니다!");
  }

  render() {
    this.$wrapper.innerHTML = ``;

    const $exampleButtonBlock = document.createElement("div");
    $exampleButtonBlock.className = "example-button-block";
    const $LoginButton = document.createElement("button");
    $LoginButton.className = "login-button";
    $LoginButton.innerHTML = "Login";
    $LoginButton.addEventListener("click", () => {
      this.onLogin();
    });

    const $CancelButton = document.createElement("button");
    $CancelButton.innerHTML = "Cancel";
    $CancelButton.addEventListener("click", () => {
      this.onCancel();
    });

    $exampleButtonBlock.appendChild($LoginButton);
    $exampleButtonBlock.appendChild($CancelButton);

    this.$wrapper.appendChild($exampleButtonBlock);
  }
}
