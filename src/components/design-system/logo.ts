export class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  getStyles() {
    return `
      font-family: var(--font);
      color: var(--orange);
      font-size: 6rem;
      font-weight: 400;
      display: inline-flex;
      align-items: center;
      border-bottom: 2px solid var(--red);
      line-height: 1;
    `;
  }

  render() {
    this.innerHTML = `
      <span style="${this.getStyles()}">
        LR
      </span>
    `;
  }
}
