'use strict';

angular.module('vibeFinderApp')
  .factory('Place', function ($resource) {

    var Place = $resource(
      '/api/places/:id',
      { id: '@Id' }
    );

    Place.prototype.getCategories = function() {
      var self = this;
      var categoryList = [];

      if (!self.categories)
        return categoryList;

      for (var i = 0; i < self.categories.length; i++) {
        categoryList.push(self.categories[i][0]);
      }

      return categoryList.join(', ');
    };

    return Place;

  });