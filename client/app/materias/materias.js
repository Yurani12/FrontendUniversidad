'use strict';

angular.module('universidadFrontedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('materias-list', {
        url: '/materias-list',
        template: '<materias-list></materias-list>'
      });
  });
