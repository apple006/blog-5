'use strict';

describe('Controller: ArticalDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('myBlogApp'));

  var ArticalDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticalDetailCtrl = $controller('ArticalDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticalDetailCtrl.awesomeThings.length).toBe(3);
  });
});
