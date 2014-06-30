'use strict';

angular.module('vibeFinderApp')
  .factory('Vibe', function ($resource, searchQuery) {

    var Vibe = $resource(
      '/api/vibes/:id',
      { id: '@Id' }
    );

    return Vibe;

  });