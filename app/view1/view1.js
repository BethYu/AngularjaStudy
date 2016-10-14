'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',
        function($scope) {
            $scope.userInfo={
              email:"test@fp.com",
              password:"222222",
            };
            $scope.getFormDate=function () {
                console.log ($scope.userInfo);
            };
            $scope.setFormDate=function () {
                $scope.userInfo={
                    email:"admin@fp.com",
                    password:"abc123",
                }
            };
            $scope.resetFormDate=function () {
                $scope.userInfo={
                    email:"test@fp.com",
                    password:"222222",
                }
            };

            //ng-class
            $scope.color = "danger";
            $scope.setGreen = function(){
                $scope.color = "success";
            };

            $scope.isError = false;
            $scope.isWarning = false;
            $scope.showError = function () {
                $scope.messageText = 'This is an error!';
                $scope.isError = true;
                $scope.isWarning = false;
            };
            $scope.showWarning = function () {
                $scope.messageText = 'Just a warning.Please carry on.';
                $scope.isWarning = true;
                $scope.isError = false;
            };

            //ng-show ng-hide
            $scope.menuState = {show:false};
            $scope.toggleMenu = function(){
                $scope.menuState.show = !$scope.menuState.show;
            };


            $scope.greeting = {
                text: 'Hello'
            };
            $scope.pageClass="hello";
        }
]);