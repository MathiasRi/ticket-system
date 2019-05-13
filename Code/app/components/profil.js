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

    $http.get(`http://localhost/ticket-system/Code/app/index.php`,
            {
                params : {
                    get : 'userinfo',
                    email : this.login_email
                }
            })
        .then(response => {
            console.log(response);
            if (response.data.length != 0) {

                this.pk_individual_id = response.data[0]['PK_Individual_Id'];
                this.email = response.data[0]['Email'];
                this.password = response.data[0]['Password'];
                this.firstname = response.data[0]['FirstName'];
                this.lastname = response.data[0]['LastName'];
                this.fk_token = response.data[0]['FK_Token'];
            }
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