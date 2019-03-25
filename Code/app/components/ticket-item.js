"use strict";

app.component("ticketItem", {
    templateUrl: "components/ticket-item.html",
    controller: "TicketItemController",
    bindings: {ticketItem : "<"}
});


app.controller("TicketItemController", function ($log, Ticket, $mdDialog) {

    $log.debug("TicketItemController()");

    this.showTicketInfo = () => {

        let params = `<div>
                        <ul>
                            <li><b>T!cket-ID:</b> ${this.ticketItem.id}</li>
                            <li><b>Titel:</b> ${this.ticketItem.title}</li>
                            <li><b>Kategorie:</b> ${this.ticketItem.category}</li>
                            <li><b>Erstelldatum:</b> ${this.ticketItem.creation_date}</li>
                            <li><b>Status:</b> ${this.ticketItem.state}</li>
                            <li><b>Beschreibung:</b> <p>${this.ticketItem.description}</p></li>
                        </ul>
                      </div>`;

        let info = $mdDialog.confirm()
            .title('T!cket-Information')
            .htmlContent(params)
            .ok('Schließen');

        $mdDialog.show(info)


    };


});