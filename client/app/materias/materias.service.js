
'use strict';

function materiasService($resource,API){
	return $resource(API + '/api/materiasElectivas/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	});
}

materiasService.$inject = ['$resource','API'];
angular.module('universidadFrontedApp')
  .factory('materiasService',materiasService);
