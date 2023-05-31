class RestToRunNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav>
        <div class="logo">
        <a href="index.html"><h4>RestToRun</h4></a>
        </div>
        <button class="line">
            <span ></span>
            <span ></span>
            <span ></span>
        </button>

        <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://mluthfiakmal.wixsite.com/mysite/">About Us</a></li>
        </ul>
       
    </nav>`;
  }
}
customElements.define('nav-resttorun', RestToRunNav);
