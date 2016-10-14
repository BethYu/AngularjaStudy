'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',
      function($scope) {
          $scope.books = [{
            title: "《Ext江湖》",
            author: "大漠穷秋"
          }, {
            title: "《ActionScript游戏设计基础（第二版）》",
            author: "大漠穷秋"
          }, {
            title: "《用AngularJS开发下一代WEB应用》",
            author: "大漠穷秋"
          }];
          $scope.pageClass="list";
}]);