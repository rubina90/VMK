(function(){
    var module = angular.module('vmk');
    var bannerController = function ($scope) {
        $scope.myInterval = 5000;
        $scope.slides = [
            { image: "Images/Main/banner1.png"},
            { image: "Images/Main/banner2.png"},
            { image: "Images/Main/banner3.png"}
        ];
    };

    module.controller('BannerController',bannerController);

}());