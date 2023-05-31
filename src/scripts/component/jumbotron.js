class tronRestToRun extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="jumbotron">
        <h1  tabindex="0">Welcome! This is RestToRun </h1>
        <p  tabindex="0">Disini kamu bisa mendapatkan informasi tentang restoran terbaik yang ada di kota besar indonesia.</p>
      </div>`;
  }
}
customElements.define('jumbotron-resttorun', tronRestToRun);
