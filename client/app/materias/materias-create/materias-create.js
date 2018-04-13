'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('materias-create', {
        url: '/materias-create',
        template: '<materias-create></materias-create>'
      });
  });
