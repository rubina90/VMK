(function(){
    var module = angular.module("vmk");

    var items = [
        {title: "Program", address:"#/zajecia/program"},
        {title: "Grafik", address:"#/zajecia/grafik"},
        {title: "Moi uczniowie", address:"#/zajecia/uczniowie"},
        {title: "Cennik", address:"#/zajecia/cennik"},
        {title: "Zapisy", address:"#/zajecia/zapisy"}];

    var classesController = function($scope){
        $scope.title = "Zajęcia";
        $scope.items = items;
    };

    module.controller("ClassesDropDownController", classesController);
}());