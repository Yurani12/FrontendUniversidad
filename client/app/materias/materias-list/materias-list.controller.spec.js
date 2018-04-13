'use strict';

describe('Component: MateriasListComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var MateriasListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MateriasListComponent = $componentController('MateriasListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
