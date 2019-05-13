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



app.controller("ProfilController", function ($log, $http, StorageService, User) {

    $log.debug("ProfilController()");

    $onInit = () => {
        this.profilDaten = StorageService.laden();
    }

    $http.get(`http://localhost/ticket-system/Code/app/index.php`,
            {
                params : {
                    update : 'userdata',
                    vorname: this.profil_vorname,
                    nachname: this.profil_nachname,
                    email: this.profil_email,
                    pw: this.profil_password,
                    token: this.profilDaten.fk_token
                }
            })
        .then(response => {
            $state.reload();
            console.log(response);
        });

    this.unsavedChanges = () => {
        if (this.profil_vorname !== thisprofilDaten['vorname'] || this.profil_nachname !== thisprofilDaten['nachname'] || this.profil_email !== thisprofilDaten['email'] || (this.profil_passwort !== thisprofilDaten['passwort'] && this.profil_passwort !== this.profil_passwort_wiederholen)) {
            return true;
        } else {
            return false;
        }
    };

    this.user = StorageService.laden();

});