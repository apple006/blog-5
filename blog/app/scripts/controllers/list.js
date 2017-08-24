'use strict';

/**
 * @ngdoc function
 * @name myBlogApp.controller:ListctrlCtrl
 * @description
 * # ListctrlCtrl
 * Controller of the myBlogApp
 */
angular.module('myBlogApp')
	.controller('ListctrlCtrl', function(articles) {
		var _this=this;
		this.now = 0;
		this.arr = articles.arr;
		this.fn = function(n) {
			_this.now = n;
		};
		
		
		
	});
