import "./styles.css";

export default class Counter {
  constructor($target) {
    this.$wrapper = document.createElement("div");
    this.$wrapper.id = "counter";
    $target.appendChild(this.$wrapper);
    this.state = 0;
    this.render();
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  onIncrease() {
    this.setState(this.getState() + 1);
    this.render();
  }

  onDecrease() {
    this.setState(this.getState() - 1);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = ``;

    const $counterButtonBlock = document.createElement("div");
    $counterButtonBlock.className = "counter-button-block";

    const $increaseButton = document.createElement("button");
    $increaseButton.className = "counter-button";
    $increaseButton.innerHTML = "+";

    const $decreaseButton = document.createElement("button");
    $decreaseButton.className = "counter-button";
    $decreaseButton.innerHTML = "-";

    $increaseButton.addEventListener("click", () => {
      this.onIncrease();
    });

    $decreaseButton.addEventListener("click", () => {
      this.onDecrease();
    });

    const $InnerCounter = document.createElement("div");
    $InnerCounter.innerHTML = `
            <h1>${this.getState()}</h1>
    `;

    $counterButtonBlock.appendChild($increaseButton);
    $counterButtonBlock.appendChild($InnerCounter);
    $counterButtonBlock.appendChild($decreaseButton);

    this.$wrapper.appendChild($counterButtonBlock);
  }
}
