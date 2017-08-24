'use strict';

/**
 * @ngdoc function
 * @name myBlogApp.controller:ArticalDetailCtrl
 * @description
 * # ArticalDetailCtrl
 * Controller of the myBlogApp
 */
angular.module('myBlogApp')
	.controller('ArticalDetailCtrl', function($stateParams,articles) {
	
		var id=$stateParams.index;
		
		this.arr=articles.arr;
		
		this.details=articles.getDetail(id);


	})