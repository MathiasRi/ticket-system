"use strict";

app.component("registerTab", {
    templateUrl: "components/register-tab.html",
    controller: "RegisterTabController",
    bindings: {}
});


app.controller("RegisterTabController", function ($log, $mdDialog, $http, $state) {

    $log.debug("RegisterTabController()");

    this.showConfirm = () => {
        let confirm = $mdDialog.confirm()
            .title('Allgemeine Geschäftsbedingungen')
            .textContent(agbs_text)
            .ok('Gelesen.');

        $mdDialog.show(confirm);
    };


    var agbs_text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."


    this.registerUser = () => {
        let register_promise = $http
            .get(`http://localhost/GAV/ticket-system/Code/app/index.php`,
                {
                    params : {
                        insert : 'userdata',
                        vorname : this.reg_vorname,
                        nachname : this.reg_nachname,
                        email : this.reg_email,
                        token : this.reg_token,
                        pw : this.reg_password_1
                    }
                })
            .then(response => {
                $state.reload();
            })
            .catch(response => {
                $log.error('Error!');
            });

        Promise.all[register_promise];
    };
});