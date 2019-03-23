"use strict";

app.component("ticketItem", {
    templateUrl: "components/ticket-item.html",
    controller: "TicketItemController",
    bindings: {}
});


app.controller("TicketItemController", function ($log, Ticket) {

    $log.debug("TicketItemController()");

    this.ticketItem = new Ticket("Titel", "Beschreibung", "Kategorie");


});