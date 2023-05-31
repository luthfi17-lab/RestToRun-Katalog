const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restto-fav');
  I.see('Anda Belum Menambahkan Restaurant Favorite, Harap Menambahkan Terlebih Dahulu', '#restto-fav');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.wait(3);
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
});
