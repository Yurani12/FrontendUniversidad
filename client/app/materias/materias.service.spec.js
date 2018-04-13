'use strict';

describe('Service: materias', function () {

  // load the service's module
  beforeEach(module('universidadFrontendApp'));

  // instantiate service
  var materias;
  beforeEach(inject(function (_materias_) {
    materias = _materias_;
  }));

  it('should do something', function () {
    expect(!!materias).to.be.true;
  });

});
