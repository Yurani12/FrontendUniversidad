'use strict';

describe('Component: MateriasCreateComponent', function () {

  // load the controller's module
  beforeEach(module('universidadFrontedApp'));

  var MateriasCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MateriasCreateComponent = $componentController('MateriasCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
