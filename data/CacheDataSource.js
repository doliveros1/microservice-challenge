const NodeCache = require("node-cache");
const challengeCache = new NodeCache();

exports.getFavoriteList = function (nickname) {
  return challengeCache.get(nickname);
}

exports.addFavoriteList = function (nickname, favoritesList) {
  return challengeCache.set(nickname, favoritesList);
}
