'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vibeFinderApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/vibes')
      .respond(['Vibe1', 'Vibe2']);
    $httpBackend.expectGET('/api/neighborhoods')
      .respond(['Neighborhood1', 'Neighborhood2']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
  }));

  it('should attach a list of vibes to the scope', function () {
    expect(scope.vibes.length).toBe(0);
    $httpBackend.flush();
    expect(scope.vibes.length).toBe(2);
  });

  it('should attach a list of neighborhoods to the scope', function () {
    expect(scope.neighborhoods.length).toBe(0);
    $httpBackend.flush();
    expect(scope.neighborhoods.length).toBe(2);
  });

  it('should attach the searchQuery instance to the scope', function () {
    expect(scope.searchQuery).toBeTruthy();
  });
});
