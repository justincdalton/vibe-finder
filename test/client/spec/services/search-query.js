'use strict';

describe('Service: SearchQuery', function () {

  var mockSearchQuery,
      $location,
      $routeParams = {};

  // load the service's module
  beforeEach(module('vibeFinderApp'));

  beforeEach(inject(function(searchQuery, _$location_, _$routeParams_) {
    mockSearchQuery = searchQuery;
    $location = _$location_;
    $routeParams = _$routeParams_;
  }));

  it('should set the vibe when selected', function() {
    mockSearchQuery.selectVibe('SelectedVibe');

    expect(mockSearchQuery.vibe).toBe('SelectedVibe');
  });

  it('should return true when the active vibe is passed', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    var result = mockSearchQuery.isActiveVibe('SelectedVibe');

    expect(result).toBe(true);
  });

  it('should return false when the active vibe is passed', function() {
    mockSearchQuery.selectVibe('NotSelectedVibe');
    var result = mockSearchQuery.isActiveVibe('SelectedVibe');

    expect(result).toBe(false);
  });

  it('should return the selected vibe over routeParams value when vibe is not null', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    $routeParams.vibe = 'RouteVibe';
    var result = mockSearchQuery.getVibe();

    expect(result).toBe('SelectedVibe');
  });

  it('should return the routeParams value when vibe is null', function() {
    $routeParams.vibe = 'RouteVibe';
    var result = mockSearchQuery.getVibe();

    expect(result).toBe('RouteVibe');
  });

  it('should set the neighborhood when selected', function() {
    mockSearchQuery.selectNeighborhood('SelectedNeighborhood');

    expect(mockSearchQuery.neighborhood).toBe('SelectedNeighborhood');
  });

  it('should return true when the active neighborhood is passed', function() {
    mockSearchQuery.selectNeighborhood('SelectedNeighborhood');
    var result = mockSearchQuery.isActiveNeighborhood('SelectedNeighborhood');

    expect(result).toBe(true);
  });

  it('should return the selected neighborhood over routeParams value when neighborhood is not null', function() {
    mockSearchQuery.selectNeighborhood('SelectedNeighborhood');
    $routeParams.neighborhood = 'RouteNeighborhood';
    var result = mockSearchQuery.getNeighborhood();

    expect(result).toBe('SelectedNeighborhood');
  });

  it('should return the routeParams value when neighborhood is null', function() {
    $routeParams.neighborhood = 'RouteNeighborhood';
    var result = mockSearchQuery.getNeighborhood();

    expect(result).toBe('RouteNeighborhood');
  });

  it('should return false when the active neighborhood is passed', function() {
    mockSearchQuery.selectNeighborhood('NotSelectedNeighborhood');
    var result = mockSearchQuery.isActiveNeighborhood('SelectedNeighborhood');

    expect(result).toBe(false);
  });

  it('should return false when the neighborhood is null', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    var result = mockSearchQuery.searchable();

    expect(result).toBe(false);
  });

  it('should return false when the vibe is null', function() {
    mockSearchQuery.selectNeighborhood('NotSelectedNeighborhood');
    var result = mockSearchQuery.searchable();

    expect(result).toBe(false);
  });

  it('should return false when the vibe and neighborhood are set', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    mockSearchQuery.selectNeighborhood('NotSelectedNeighborhood');
    var result = mockSearchQuery.searchable();

    expect(result).toBe(true);
  });

  it('should not change location path when searching if vibe is null', function() {
    mockSearchQuery.selectNeighborhood('NotSelectedNeighborhood');
    mockSearchQuery.search();

    expect($location.path()).toBe('/');
  });

  it('should not change location path when searching if neighborhood is null', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    mockSearchQuery.search();

    expect($location.path()).toBe('/');
  });

  it('should change to location path when searching if vibe and neighborhood are not null', function() {
    mockSearchQuery.selectVibe('SelectedVibe');
    mockSearchQuery.selectNeighborhood('NotSelectedNeighborhood');
    mockSearchQuery.search();

    expect($location.path()).toBe('/places/' + mockSearchQuery.vibe + '/' + mockSearchQuery.neighborhood);
  });

});