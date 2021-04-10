'use strict';

let utils = require('../utils/writer.js');
let Favorites = require('../service/FavoritesService');

module.exports.addFavoriteProfiles = function addFavoriteProfiles (req, res, next, body, nickname) {
  Favorites.addFavoriteProfiles(body, nickname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFavoriteProfiles = function getFavoriteProfiles (req, res, next, nickname) {
  Favorites.getFavoriteProfiles(nickname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
