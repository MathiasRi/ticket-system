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


app.controller("TicketAnsichtController", function ($log, Ticket, User, StorageService) {

    $log.debug("TicketAnsichtController()");

    this.tickets = [];
    this.tickets.push(new Ticket("Titel1", "Beschreibung1", "Kategorie1", "001", new Date(), "offen", "354", "Andrew"), new Ticket("Titel2", "Beschreibung2", "Kategorie2", "002", new Date(), "offen", "371", "Benedikt"), new Ticket("Titel3", "Beschreibung1", "Kategorie1", "003", new Date(), "außenstehend", "222", "Kamil"), new Ticket("Titel4", "Beschreibung2", "Kategorie2", "004", new Date(), "abgeschlossen", "121", "Mathias"));

    this.burger_menu_open = false;

    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'down';


    this.user = StorageService.laden();

    if (this.user.pk_individual_id == 'X') {
        $state.go('authentifikation');
    }


});

