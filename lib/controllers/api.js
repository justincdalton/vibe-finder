'use strict';

var http = require('http'),
    request = require('request'),
    Oauth = require('oauth'),
    querystring = require('querystring'),
    mongoose = require('mongoose'),
    Vibe = mongoose.model('Vibe'),
    Neighborhood = mongoose.model('Neighborhood');

var yelpClient = {
  oauthToken : 'IYtrRL3znXyAOOwqRuNbLgsg_i31-mvq',
  oauthTokenSecret : '2wuPBvQwyR6Z3MB4eEUY5pBIuQc',
  oauth : new Oauth.OAuth(
    null,
    null,
    'WQVb_VkOL2BR_lYY9SzVdg',
    'hv4XqqfTl5gJtobTjRUIZgFIryQ',
    '1.0',
    null,
    'HMAC-SHA1'
  )
};


exports.vibes = function(req, res) {
  return Vibe.find(function (err, vibes) {
    if (!err) {
      return res.json(vibes);
    } else {
      return res.send(err);
    }
  });
};

exports.neighborhoods = function(req, res) {
  return Neighborhood.find(function (err, neighborhoods) {
    if (!err) {
      return res.json(neighborhoods);
    } else {
      return res.send(err);
    }
  });
};

exports.places = function(req, res) {
  var options = {
    uri: 'http://api.yelp.com/neighborhood_search?location=New%20York%20City&ywsid=-aJX4KwlWqznIR75wQQ1WA'
  };

  var params = {
    term : req.query.vibe,
    limit : 3,
    sort : 2,
    category_filter : 'restaurants,nightlife',
    location : req.query.neighborhood
  };

  yelpClient.oauth.get(
    'http://api.yelp.com/v2/search?' + querystring.stringify(params),
    yelpClient.oauthToken,
    yelpClient.oauthTokenSecret,
    function (err, body, response) {
      if (!err) {
        var parsed = JSON.parse(body);

        if (!parsed.error) {
          return res.json(parsed.businesses);
        } else {
          var error = new Error(parsed.error.text);
          error.http_code = 500;
          return res.send(error);
        }
      } else {
        return res.send(err);
      }
    }
  );
};

/**
 * Get awesome things
 */
// exports.places = function(req, res) {
//   return Thing.find(function (err, things) {
//     if (!err) {
//       return res.json(things);
//     } else {
//       return res.send(err);
//     }
//   });
// };