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


app.controller("ProfilController", function ($log, $http) {

    $log.debug("ProfilController()");

    this.profilDaten = () => {
        $http.get('http://localhost/ticket-system/Code/app/index.php'),
            {
                params : {
                    get : 'userinfo',
                    email : this.login_email,
                    pw : this.login_password
                    
                }
    }

    this.unsavedChanges = () => {
        if (this.profil_vorname !== thisprofilDaten['vorname'] || this.profil_nachname !== thisprofilDaten['nachname'] || this.profil_email !== thisprofilDaten['email'] || (this.profil_passwort !== thisprofilDaten['passwort'] && this.profil_passwort !== this.profil_passwort_wiederholen)) {
            return true;
        } else {
            return false;
        }
    }
});