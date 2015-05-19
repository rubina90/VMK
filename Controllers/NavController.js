(function(){
    var module = angular.module("vmk");

    var navController = function($scope, $location){
        $scope.isCollapsed = true;
        $scope.$on('$routeChangeSuccess', function () {
            $scope.isCollapsed = true;
        });
    };
    module.controller("NavController", navController);
}());