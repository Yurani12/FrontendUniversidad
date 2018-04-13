'use strict';

describe('Component: MateriasUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var MateriasUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MateriasUpdateComponent = $componentController('MateriasUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
