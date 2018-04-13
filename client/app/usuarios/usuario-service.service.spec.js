'use strict';

describe('Service: usuarioService', function () {

  // load the service's module
  beforeEach(module('universidadFrontedApp'));

  // instantiate service
  var usuarioService;
  beforeEach(inject(function (_usuarioService_) {
    usuarioService = _usuarioService_;
  }));

  it('should do something', function () {
    expect(!!usuarioService).to.be.true;
  });

});
