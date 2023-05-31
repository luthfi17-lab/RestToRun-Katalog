const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.seeElement('#restto-fav');
  I.see('Anda Belum Menambahkan Restaurant Favorite, Harap Menambahkan Terlebih Dahulu', '#restto-fav');

  I.amOnPage('/');
  I.waitForElement('.content-detail a', 10);
  I.seeElement('.content-detail a');

  const firstRestaurant = locate('.content-detail a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#LikeButton');
  I.click('#LikeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.content-detail');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.content-detail a');
  I.wait(3);

  I.seeElement('#LikeButton');
  I.click('#LikeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.see('Anda Belum Menambahkan Restaurant Favorite, Harap Menambahkan Terlebih Dahulu', '#restto-fav');
});
