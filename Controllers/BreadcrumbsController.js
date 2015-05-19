(function(){
    var module = angular.module("vmk");

    var breadcrumbsController = function($scope, breadcrumbs){
        $scope.breadcrumbs = breadcrumbs;
    };
    module.controller("BreadcrumbsController", breadcrumbsController);
}());