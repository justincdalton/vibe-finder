'use strict';

angular.module('vibeFinderApp')
  .factory('searchQuery', function($location, $routeParams) {

    return {
      vibe : null,
      neighborhood : null,
      selectVibe : function(text) {
        this.vibe = text;
      },
      selectNeighborhood : function(text) {
        this.neighborhood = text;
      },
      getVibe : function() {
        return !this.vibe ? $routeParams.vibe : this.vibe;
      },
      getNeighborhood : function () {
        return !this.neighborhood ? $routeParams.neighborhood : this.neighborhood;
      },
      isActiveVibe : function(text) {
        return this.vibe === text;
      },
      isActiveNeighborhood : function(text) {
        return this.neighborhood === text;
      },
      searchable : function() {
        if (this.vibe && this.neighborhood)
          return true;

        return false;
      },
      search : function() {
        if (this.vibe && this.neighborhood) {
          $location.path('/places/' + this.vibe + '/' + this.neighborhood);
        }
      }
    };


  });