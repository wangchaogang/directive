'use strict';

/**
 * @ngdoc overview
 * @name dasApp
 * @description
 * # dasApp
 *
 * Main module of the application.
 */
 //http://47.90.20.200:1602/news-img1/         图片
 //http://47.90.20.200:1602/news-img2/
 
 // 新闻http://47.90.20.200:1602/news1/
 //http://47.90.20.200:1602/news2
angular
  .module('dasApp', []).controller('wangs',['$scope','$http',function($scope,$http){
//	  $scope.bower = '国际'
  	  $http({
			url:'http://47.90.20.200:1602/news1/',
			method:"get"
		}).then(function(c){
//			console.log(c)
//			$scope.date.splice(e2,1)
            $scope.dates = c.data
		},function(){
			
		})
		$http({
			url:'http://47.90.20.200:1602/news-img1/ ',
			method:"get"
		}).then(function(c){
			console.log(c)
//			$scope.date.splice(e2,1)
            $scope.imges1 = c.data
		},function(){
			
		})
		$http({
			url:'http://47.90.20.200:1602/news2/',
			method:"get"
		}).then(function(c){
//			console.log(c)
//			$scope.date.splice(e2,1)
            $scope.dates2 = c.data
		},function(){
			
		})
		$http({
			url:'http://47.90.20.200:1602/news-img2/ ',
			method:"get"
		}).then(function(c){
			console.log(c)
//			$scope.date.splice(e2,1)
            $scope.imges2 = c.data
		},function(){
			
		})
  }]).directive('woshi',function(){
  	return {
  		restrict:'ACEM',
  	    template:'<div style="padding:30px; border-bottom:1px solid #ccc"><h3>{{date2}}</h3><div ng-repeat="a in date">{{$index+1}}  {{a.title | f}}</div><div ng-repeat="c in date3"><img ng-src="{{c.img}}"></div></div>',
  	    replace:true,
  	    scope:{date:'=wang',date2:'@wang2',date3:'=wang3'},
  	    link:function(scope,element,attrs){

  	    }
  	}
  	
  }).filter("f",[function(){
  	return function(e){
  		if(e.length>15){
  			return e.slice(0,15)+'...'
  		}else{
  		return e
  		}
  	}
  }])


 
