(function(){
    var module = angular.module("vmk");

    var mapController = function ($scope, $log, $timeout) {
        $scope.map = {center: {latitude: 52.238133, longitude: 21.0180776}, zoom: 16 };
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 52.238133,
                longitude: 21.0180776
            },
            options: { draggable: true },
        };
    };
    module.controller("MapController", mapController);
}());