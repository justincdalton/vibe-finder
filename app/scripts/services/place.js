'use strict';

angular.module('vibeFinderApp')
  .factory('Place', function ($resource) {

    var Place = $resource(
      '/api/places/:id',
      { id: '@Id' }
    );

    return Place;

  });