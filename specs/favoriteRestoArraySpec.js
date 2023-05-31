import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestoArray = {

  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((Restaurant) => Restaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(Restaurant) {
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(Restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(Restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((Restaurant) => Restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
