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

  render() {
    this.$wrapper.innerHTML = `
        <h1>Test</h1>
        <p>Test</p>
    `;
  }
}
