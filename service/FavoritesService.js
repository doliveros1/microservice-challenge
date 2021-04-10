'use strict';
let FavoritesListRepository = require('../repository/FavoritesListRepository');

/**
 * get favorite profiles to nickname
 * Adds a list of favorite profiles list
 *
 * body List Inventory item to add (optional)
 * nickname String Nickname
 * no response value expected for this operation
 **/
exports.addFavoriteProfiles = function (body, nickname) {
  return FavoritesListRepository.add(nickname, body)
}


/**
 * get favorite profiles by nickname
 * By passing a nickname return favorite profiles list 
 *
 * nickname String Nickname
 * returns List
 **/
exports.getFavoriteProfiles = function(nickname) {
  return FavoritesListRepository.get(nickname)
}

