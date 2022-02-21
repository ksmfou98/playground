import "./Test.css";

export default class Test {
  constructor($target) {
    this.$wrapper = document.createElement("section");
    this.$wrapper.className = "test-section";
    this.$wrapper.innerHTML = `
        <h1>Test</h1>
    `;
    $target.appendChild(this.$wrapper);

    this.render();
  }

  onClick() {
    console.log("Test");
  }

  render() {
    this.$wrapper.innerHTML = ``;

    const $testButton = document.createElement("button");
    $testButton.innerHTML = "Test";
    $testButton.addEventListener("click", this.onClick.bind(this));

    this.$wrapper.appendChild($testButton);
  }
}
