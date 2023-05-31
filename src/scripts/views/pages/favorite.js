import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const favorite = {
  async render() {
    return `
    <div class="content">
    <h1 class="fav-heading">Restaurant Terfavorite</h1>
    <div id="restto-fav" class="card-list">

    </div>
  </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restoContainer = document.querySelector('#restto-fav');

    if (restaurants.length === 0) {
      restoContainer.innerHTML = `
       <h3 class="not-favorite"> Anda Belum Menambahkan Restaurant Favorite, Harap Menambahkan Terlebih Dahulu </h3>
      `;
    }
    const totalResto = restaurants.length;
    restaurants.forEach((restaurant, index) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant, index, totalResto);
    });
  },
};

export default favorite;
