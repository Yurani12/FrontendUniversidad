'use strict';

function usuarioService($resource,API){
	return $resource(API + '/api/usuarios/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		},
		createAdmi:{
			url:API+'/api/usuarios/empleados',
			method:'POST'
			
		}
	});
}

usuarioService.$inject = ['$resource','API'];
angular.module('universidadFrontedApp')
  .factory('usuarioService',usuarioService);
