"use strict";

app.factory("User", function () {

    function User(pk_individual_id, email, password, firstname, lastname, fk_token){
        this.pk_individual_id = pk_individual_id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.fk_token = fk_token;
    }


    return User;
});