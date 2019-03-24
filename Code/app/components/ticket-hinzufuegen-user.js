app.component("ticketHinzufuegenUser", {
    templateUrl: "components/ticket-hinzufuegen-user.html",
    controller: "TicketHinzufuegenUserController",
    bindings: {}
});


app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "ticket-hinzufuegen-user",
        url: "/ticket-hinzufuegen-user",
        component: "ticketHinzufuegenUser"
    });

});


app.controller("TicketHinzufuegenUserController", function ($log) {

    $log.debug("TicketHinzufuegenUserController()");

});