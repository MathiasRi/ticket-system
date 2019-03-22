"use strict";

app.component("authentifikation", {
    templateUrl: "components/authentifikation.html",
    controller: "AuthentifikationController",
    bindings: {}
});


app.controller("AuthentifikationController", function ($log) {

    $log.debug("AuthentifikationController()");
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "authentifikation",
        url: "/authentifikation",
        component: "authentifikation"
    });

    $urlRouterProvider.otherwise("/authentifikation");
});
