'use strict';

/**
 * @ngdoc service
 * @name myBlogApp.articles
 * @description
 * # articles
 * Service in the myBlogApp.
 */
angular.module('myBlogApp')
	.service('articles', function() {

		this.arr = [{
				id: 1,
				name: '电视',
				intro: '先监听从 React Native 发过来的内容，当接收到内容将数据以广播的形式发出。然后，再通过 PostMessage 告诉 React Naitve，我们需要在调用哪个 action，并传递相应的参数。'
			},
			{
				id: 2,
				name: '手机',
				intro: '先监听从 React Native 发过来的内容，当接收到内容将数据以广播的形式发出。然后，再通过 PostMessage 告诉 React Naitve，我们需要在调用哪个 action，并传递相应的参数。'
			},
			{
				id: 3,
				name: '电脑',
				intro: '先监听从 React Native 发过来的内容，当接收到内容将数据以广播的形式发出。然后，再通过 PostMessage 告诉 React Naitve，我们需要在调用哪个 action，并传递相应的参数。'
			},
			{
				id: 4,
				name: '电视',
				intro: '先监听从 React Native 发过来的内容，当接收到内容将数据以广播的形式发出。然后，再通过 PostMessage 告诉 React Naitve，我们需要在调用哪个 action，并传递相应的参数。'
			},
			{
				id: 5,
				name: '手机',
				intro: '先监听从 React Native 发过来的内容，当接收到内容将数据以广播的形式发出。然后，再通过 PostMessage 告诉 React Naitve，我们需要在调用哪个 action，并传递相应的参数。'
			}

		];

		this.getDetail = function(index) {
			var a=this.arr[index];
			return a;
		}

	});