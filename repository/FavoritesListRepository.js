let Favorite = require('./domain/Favorite.js');
let CacheDataSource = require('../data/CacheDataSource');
var utils = require('../utils/writer.js');

exports.get = function (nickname) {
  return new Promise(function (resolve, reject) {
    try {
      let list = CacheDataSource.getFavoriteList(nickname)
      if (list == undefined) {
        resolve([])
      } else {
        resolve(list)
      }
    } catch (error) {
      reject(utils.errorJson(500,error));
    }
  });
}

exports.add = function (nickname, favoritesList) {
  return new Promise(function (resolve, reject) {
    try {
      if (Array.isArray(favoritesList)) {
        CacheDataSource.addFavoriteList(nickname, favoritesList)
      } else {
        CacheDataSource.addFavoriteList(favoritesList, [])
      }
      resolve()
    } catch (error) {
      reject(utils.errorJson(500,error));
    }
  });
}