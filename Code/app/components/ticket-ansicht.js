"use strict";

app.component("ticketAnsicht", {
    templateUrl: "components/ticket-ansicht.html",
    controller: "TicketAnsichtController",
    bindings: {}
});


app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "ticket-ansicht",
        url: "/ticket-ansicht",
        component: "ticketAnsicht"
    });

});


app.controller("TicketAnsichtController", function ($log) {

    $log.debug("TicketAnsichtController()");

});
