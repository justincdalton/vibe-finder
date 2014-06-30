'use strict';

describe('Controller: PlacesCtrl', function () {

  // load the controller's module
  beforeEach(module('vibeFinderApp'));

  var PlacesCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/places')
      .respond(['Place1', 'Place2']);

    scope = $rootScope.$new();
    PlacesCtrl = $controller('PlacesCtrl', {
      $scope: scope,
    });
  }));

  it('should attach a list of places to the scope', function () {
    expect(scope.places.length).toBe(0);
    $httpBackend.flush();
    expect(scope.places.length).toBe(2);
  });
});