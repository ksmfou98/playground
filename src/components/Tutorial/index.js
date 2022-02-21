import "./styles.css";

export default class Tutorial {
  constructor($target) {
    this.$wrapper = document.createElement("div");
    this.$wrapper.id = "tutorial";
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = `
        <div className="tutorial-inner">
            <h1>Tutorial 입니다</h1>
            <div className="button-block">
                <button className="button">첫 번째 버튼</button>
                <button className="2button">두 번째 버튼</button>
            </div>
        </div>
    `;
  }
}
