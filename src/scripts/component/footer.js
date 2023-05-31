class footerRestToRun extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer>
        <p  tabindex="0">Copyright &copy;  RestToRun</p>
        </footer>  `;
  }
}
customElements.define('footer-resttorun', footerRestToRun);
