'use strict';

describe('Service: Place', function () {

  var mockPlace;

  // load the service's module
  beforeEach(module('vibeFinderApp'));

  beforeEach(inject(function(Place) {
    mockPlace = new Place();
  }));

  it('should get a comma delimited list of categories', function() {
    mockPlace.categories = [
      ['Category1', 'category1'],
      ['Category2', 'category2']
    ];

    var result = mockPlace.getCategories();

    expect(result).toBe('Category1, Category2');
  });

  it('should get null if there are no categories', function() {
    var result = mockPlace.getCategories();

    expect(result).toEqual([]);
  });

});