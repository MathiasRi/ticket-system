"use strict";

app.component("profileEditor", {
    templateUrl: "components/profile-editor.html",
    controller: "ProfileEditorController",
});


app.controller("TicketEditorController", function ($log, $http) {

    $log.debug("ProfileEditorController()");

    app.config(function ($stateProvider) {
        $stateProvider.state({
            name: "profileEditor",
            url: "/profileEdit",
            component: "profileEditor"
        });
    });

    this.empfangeDaten = () => {
        $http.get('localhost/?get=userdata&email=&')
    }

});