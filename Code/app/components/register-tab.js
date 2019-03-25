"use strict";

app.component("registerTab", {
    templateUrl: "components/register-tab.html",
    controller: "RegisterTabController",
    bindings: {}
});


app.controller("RegisterTabController", function ($log, $mdDialog) {

    $log.debug("RegisterTabController()");

    this.showConfirm = () => {
        let confirm = $mdDialog.confirm()
            .title('Allgemeine Geschäftsbedingungen')
            .textContent(agbs_text)
            .ok('Gelesen.');

        $mdDialog.show(confirm);
    };


    var agbs_text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."



});