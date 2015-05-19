(function(){
    var module = angular.module("vmk");

    var items = [{ title: "Publikacje", address: "#/o_mnie/publikacje"},{ title: "Bel Canto", address: " #/o_mnie/bel_canto"}];

    var aboutController = function($scope){
        $scope.title = "O mnie";
        $scope.items = items;
    };
    module.controller("AboutDropDownController", aboutController);
}());