'use strict';

/**
 * @ngdoc overview
 * @name myBlogApp
 * @description
 * # myBlogApp
 *
 * Main module of the application.
 */
angular
  .module('myBlogApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  	$urlRouterProvider.otherwise('/');
  	
  	$stateProvider
  	.state('home',{
  		url:'/',
  		templateUrl:'views/one_page.html'
  	})
  	.state('list',{
  		url:'/article_list',
  		templateUrl:'/views/list.html',
  		controller:'ListctrlCtrl as list'
  	})
  	.state('item',{
  		url:'/item/:a/:b',
  		templateUrl:'/views/item.html'
  	})
  	.state('detail',{
  		url:'/article_detail/:index',
  		templateUrl:'/views/article_detail.html'
  	})
  }]);
