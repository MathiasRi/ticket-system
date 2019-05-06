"use strict";

app.component("loginTab", {
    templateUrl: "components/login-tab.html",
    controller: "LoginTabController",
    bindings: {}
});


app.controller("LoginTabController", function ($log, $http, $state) {

    $log.debug("LoginTabController()");

    this.loginUser = () => {
        let login_promise = $http
            .get(`http://localhost/ticket-system-master/Code/app/index.php`,
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