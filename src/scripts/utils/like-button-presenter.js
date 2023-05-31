import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/template-creator';

const LikeButtonPresenter = {
  async init({ LikeButtonContainer, favoriteRestaurants, restaurant }) {
    this._LikeButtonContainer = LikeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const Restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!Restaurant;
  },

  _renderLike() {
    this._LikeButtonContainer.innerHTML = createLikeButtonTemplate();

    const LikeButton = document.querySelector('#LikeButton');
    LikeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._LikeButtonContainer.innerHTML = createLikedButtonTemplate();

    const LikeButton = document.querySelector('#LikeButton');
    LikeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
