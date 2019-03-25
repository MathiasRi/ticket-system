"use strict";

app.component("profil", {
    templateUrl: "components/profil.html",
    controller: "ProfilController",
    bindings: {}
});


app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "profil",
        url: "/profil",
        component: "profil"
    });

});


app.controller("ProfilController", function ($log) {

    $log.debug("ProfilController()");

    this.edit_name_bool = true;

    this.editNames = () => {
        this.edit_name_bool = false;
    };

    this.edit_email_bool = true;

    this.editEmail = () => {
        this.edit_email_bool = false;
    };

    this.edit_passwort_bool = true;

    this.editPasswort = () => {
        this.edit_passwort_bool = false;
    }

});