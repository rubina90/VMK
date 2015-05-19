(function(){
    var app = angular.module("vmk",['ui.bootstrap', 'ngRoute','ng-breadcrumbs','uiGmapgoogle-maps']);
    app.config(function($routeProvider){
        $routeProvider
            .when("/",
            {
                templateUrl: "Views/main.html",
                label: "Strona główna"
            })
            .when("/error",
            {
                templateUrl: "Views/error.html",
                label: "Ups, znalazłeś błąd"
            })
            .when("/o_mnie",
            {
                templateUrl: "Views/o_mnie/o_mnie.html",
                label: "O mnie"
            })
            .when("/o_mnie/publikacje",
            {
                templateUrl: "Views/o_mnie/publikacje.html",
                label: "Moje publikacje"
            })
            .when("/o_mnie/bel_canto",
            {
                templateUrl: "Views/o_mnie/bel_canto.html",
                label: "Szkoła śpiewu Bel Canto"
            })
            .when("/zajecia",
            {
                templateUrl: "Views/zajecia/zajecia.html",
                label: "Zajęcia"
            })
            .when("/zajecia/cennik",
            {
                templateUrl: "Views/zajecia/cennik.html",
                label: "Cennik"
            })
            .when("/zajecia/grafik",
            {
                templateUrl: "Views/zajecia/grafik.html",
                label: "Grafik zajęć"
            })
            .when("/zajecia/program",
            {
                templateUrl: "Views/zajecia/program.html",
                label: "Program zajęć"
            })
            .when("/zajecia/uczniowie",
            {
                templateUrl: "Views/zajecia/uczniowie.html",
                label: "Moi uczniowie"
            })
            .when("/zajecia/zapisy",
            {
                templateUrl: "Views/zajecia/zapisy.html",
                label: "Zapisy"
            })
            .when("/aktualnosci",
            {
                templateUrl: "Views/aktualnosci.html",
                label: "Aktualności"
            })
            .when("/kontakt",
            {
                templateUrl: "Views/kontakt.html",
                label: "Kontakt"
            })

            .otherwise({redirectTo: "/error"});
    });
}());