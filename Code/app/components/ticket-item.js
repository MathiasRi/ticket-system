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
                            <li>T!cket-ID: ${this.ticketItem.id}</li>
                            <li>Titel: ${this.ticketItem.title}</li>
                            <li>Kategorie: ${this.ticketItem.category}</li>
                            <li>Erstelldatum: ${this.ticketItem.creation_date}</li>
                            <li>Status: ${this.ticketItem.state}</li>
                            <li>Beschreibung:
                                <p>${this.ticketItem.description}</p>
                            </li>
                        </ul>
                      </div>`;

        let info = $mdDialog.confirm()
            .title('T!cket-Information')
            .htmlContent(params)
            .ok('Schließen');

        $mdDialog.show(info)


    };


});