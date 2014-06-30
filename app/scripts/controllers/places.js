'use strict';

angular.module('vibeFinderApp')
  .controller('PlacesCtrl', function ($scope, Place, searchQuery) {

    $scope.places = Place.query({
      vibe : searchQuery.getVibe(),
      neighborhood : searchQuery.getNeighborhood()
    });

  });