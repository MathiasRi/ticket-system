"use strict";

app.component("loginTab", {
    templateUrl: "components/login-tab.html",
    controller: "LoginTabController",
    bindings: {}
});


app.controller("LoginTabController", function ($log, $http, $state, StorageService, User) {

    $log.debug("LoginTabController()");

    this.loginUser = () => {
        let login_promise = $http
            .get(`http://localhost/GAV/ticket-system/Code/app/index.php`,
                {
                    params : {
                        get : 'userdata',
                        email : this.login_email,
                        pw : this.login_password
                    }
                })
            .then(response => {
                console.log(response);
                if(response.data.length != 0) {

                    this.pk_individual_id = response.data[0]['PK_Individual_Id'];
                    this.email = response.data[0]['Email'];
                    this.password = response.data[0]['Password'];
                    this.firstname = response.data[0]['FirstName'];
                    this.lastname = response.data[0]['LastName'];
                    this.fk_token = response.data[0]['FK_Token'];

                    this.user = new User(this.pk_individual_id, this.email, this.password, this.firstname, this.lastname, this.fk_token);
                    StorageService.speichern(this.user);

                    $state.go('ticket-ansicht');
                } else {
                    alert('Failed to log in.');
                }
            })
            .catch(response => {
                $log.error('Error!');
            });

        Promise.all[login_promise];
    }
});