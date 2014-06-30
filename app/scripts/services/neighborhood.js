'use strict';

angular.module('vibeFinderApp')
  .factory('Neighborhood', function ($resource, searchQuery) {

    var Neighborhood = $resource(
      '/api/neighborhoods/:id',
      { id: '@Id' }
    );

    Neighborhood.prototype.select = function() {
      this.active;
      searchQuery.neighborhood = this.text;
    };

    return Neighborhood;

  });