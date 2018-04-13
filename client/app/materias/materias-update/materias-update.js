'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('materias-update', {
        url: '/materias-update/:idMaterias',
        template: '<materias-update></materias-update>'
      });
  });
