"use strict";

app.component("ticketAnsichtUser", {
    templateUrl: "components/ticket-ansicht-user.html",
    controller: "TicketAnsichtUserController",
    bindings: {}
});


app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "ticket-ansicht-user",
        url: "/ticket-ansicht-user",
        component: "ticketAnsichtUser"
    });

});


app.controller("TicketAnsichtUserController", function ($log) {

    $log.debug("TicketAnsichtUserController()");

    this.burger_menu_open = false;

    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'down';

});

