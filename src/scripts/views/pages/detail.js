import UrlParser from '../../routes/url-parser';
import RestToRunAppSource from '../../data/resttorunkatalog-source';
import { createRestoDetailTemplate, createLikeButtonTemplate, createRestoReviewTemplate } from '../template/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <h2 class="header-detail">DETAIL</h2>
    <div id="detail-resto" class="row">
    
    </div>
    <div id="LikeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestToRunAppSource.detailrestaurant(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    const likeButtonContainer = document.querySelector('#LikeButtonContainer');
    console.log(detail);

    restoContainer.innerHTML = createRestoDetailTemplate(detail);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    restoContainer.innerHTML += `
    <h2 class="judul-review">Reviews</h2>
    <div id="resto-review"></div>
  `;
    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonPresenter.init({
      LikeButtonContainer: document.querySelector('#LikeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
