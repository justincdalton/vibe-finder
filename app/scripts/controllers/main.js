'use strict';

angular.module('vibeFinderApp')
  .controller('MainCtrl', function ($scope, searchQuery, Vibe, Neighborhood) {

    $scope.vibes = Vibe.query();

    $scope.neighborhoods = Neighborhood.query();

    $scope.searchQuery = searchQuery;

  });
