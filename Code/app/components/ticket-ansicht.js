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


app.controller("TicketAnsichtController", function ($log, Ticket) {

    $log.debug("TicketAnsichtController()");


    this.tickets = [new Ticket("Titel1", "Beschreibung1", "Kategorie1"), new Ticket("Titel2", "Beschreibung2", "Kategorie2")];

    this.burger_menu_open = false;

    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'down';

});

