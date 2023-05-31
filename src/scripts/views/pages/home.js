import RestToRunAppSource from '../../data/resttorunkatalog-source';
import { createRestoItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <jumbotron-resttorun></jumbotron-resttorun>
    <article class="opening_content">
    <h2 tabindex="0">
      Inilah Beberapa Restoran Terfavorit di Kota-Kota besar Indonesia.
    </h2>
    <p tabindex="0">
      &nbsp; Mungkin banyak wisatawan lokal atau turis asing yang datang ke
      Indonesia yang berfikir bahawa mencoba kuliner khas di daerah tersebut
      saat liburan adalah hal yang penting. Dan ada beberapa restaurant yang
      mempunyai rating yang cukup baik untuk di kunjungi dalam hal itu
      RestToRun mengungkap beberapa nama-nama Restaurant favorit di
      kota-kota besar Indonesia.
    </p>
  </article>

  <section class="content">
    <h1 class="judul">Explore Restaurant</h1>
    <div class="card-list" id="list"></div>
  </section>

  <div class="reviews">
    <div>
      <h1>Review</h1>

      <div class="row">
        <div class="col">
          <div class="review" tabindex="0">
            <div class="name">
              <p>Michael Dean</p>
              <p></p>
            </div>

            <div class="bintang">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              pariatur ullam est illo officia accusantium nemo nisi maxime
              exercitationem asperiores nam perspiciatis ea iste id,
              reiciendis itaque consectetur molestias ab.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="review" tabindex="0">
            <div class="name">
              <p>Icuk Pangarep</p>
            </div>

            <div class="bintang">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              velit necessitatibus officia facilis dolor quas eos ratione
              alias similique id, nihil nisi, animi nam vero exercitationem
              iusto laudantium! Itaque, dicta?
            </p>
          </div>
        </div>

        <div class="col">
          <div class="review" tabindex="0">
            <div class="name">
              <p>Lorette</p>
            </div>

            <div class="bintang">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              pariatur ullam est illo officia accusantium nemo nisi maxime
              exercitationem asperiores nam perspiciatis ea iste id,
              reiciendis itaque consectetur molestias ab.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestToRunAppSource.home();
    const restaurantsitem = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantsitem.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
