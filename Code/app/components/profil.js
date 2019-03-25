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
    this.hide_names_save_button_bool = true;

    this.editNames = () => {
        this.edit_name_bool = false;
        this.hide_vorname_bool = true;
        this.hide_nachname_bool = true;
        this.hide_names_edit_button_bool = true;
        this.hide_names_save_button_bool = false;
    };

    this.saveNames = () => {

    };

    this.edit_email_bool = true;
    this.hide_email_save_button_bool = true;

    this.editEmail = () => {
        this.edit_email_bool = false;
        this.hide_email_bool = true;
        this.hide_email_edit_button_bool = true;
        this.hide_email_save_button_bool = false;
    };

    this.saveEmail = () => {

    };

    this.edit_passwort_bool = true;
    this.hide_save_passwort_div = true;

    this.editPasswort = () => {
        this.edit_passwort_bool = false;
        this.hide_edit_passwort_div = true;
        this.hide_save_passwort_div = false;
    };

    this.savePasswort = () => {

    };

});