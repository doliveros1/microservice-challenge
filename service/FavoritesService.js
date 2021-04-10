'use strict';


/**
 * get favorite profiles to nickname
 * Adds a list of favorite profiles list
 *
 * body List Inventory item to add (optional)
 * nickname String Nickname
 * no response value expected for this operation
 **/
exports.addFavoriteProfiles = function(body,nickname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get favorite profiles by nickname
 * By passing a nickname return favorite profiles list 
 *
 * nickname String Nickname
 * returns List
 **/
exports.getFavoriteProfiles = function(nickname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nat" : "nat",
  "gender" : "gender",
  "phone" : "phone",
  "dob" : {
    "date" : "date",
    "age" : 0
  },
  "name" : {
    "last" : "last",
    "title" : "title",
    "first" : "first"
  },
  "location" : {
    "country" : "country",
    "city" : "city",
    "timezone" : {
      "offset" : "offset",
      "description" : "description"
    },
    "street" : {
      "number" : 6,
      "name" : "name"
    },
    "postcode" : "postcode",
    "coordinates" : {
      "latitude" : "latitude",
      "longitude" : "longitude"
    },
    "state" : "state"
  },
  "id" : {
    "name" : "name"
  },
  "login" : {
    "sha1" : "sha1",
    "password" : "password",
    "salt" : "salt",
    "sha256" : "sha256",
    "uuid" : "uuid",
    "md5" : "md5",
    "username" : "username"
  },
  "cell" : "cell",
  "picture" : {
    "thumbnail" : "thumbnail",
    "large" : "large",
    "medium" : "medium"
  },
  "email" : "email"
}, {
  "nat" : "nat",
  "gender" : "gender",
  "phone" : "phone",
  "dob" : {
    "date" : "date",
    "age" : 0
  },
  "name" : {
    "last" : "last",
    "title" : "title",
    "first" : "first"
  },
  "location" : {
    "country" : "country",
    "city" : "city",
    "timezone" : {
      "offset" : "offset",
      "description" : "description"
    },
    "street" : {
      "number" : 6,
      "name" : "name"
    },
    "postcode" : "postcode",
    "coordinates" : {
      "latitude" : "latitude",
      "longitude" : "longitude"
    },
    "state" : "state"
  },
  "id" : {
    "name" : "name"
  },
  "login" : {
    "sha1" : "sha1",
    "password" : "password",
    "salt" : "salt",
    "sha256" : "sha256",
    "uuid" : "uuid",
    "md5" : "md5",
    "username" : "username"
  },
  "cell" : "cell",
  "picture" : {
    "thumbnail" : "thumbnail",
    "large" : "large",
    "medium" : "medium"
  },
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

