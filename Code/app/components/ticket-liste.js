"use strict";

app.component("ticketListe", {
    templateUrl: "components/ticket-liste.html",
    controller: "TicketListeController",
    bindings: {}
});


app.controller("TicketListeController", function ($log) {

    $log.debug("TicketListeController()");

});