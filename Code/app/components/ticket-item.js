"use strict";

app.component("ticketItem", {
    templateUrl: "components/ticket-item.html",
    controller: "TicketItemController",
    bindings: {ticketItem: "<"}
});


app.controller("TicketItemController", function ($log, Ticket, $mdDialog) {

    $log.debug("TicketItemController()");

    this.showTicketInfo = () => {

        this.title = this.ticketItem.title || "";
        this.description = this.ticketItem.description || "";
        this.category = this.ticketItem.category || "";
        this.id = this.ticketItem.id;
        this.creation_date = this.ticketItem.creation_date;
        this.state = this.ticketItem.state;
        this.room = this.ticketItem.room;
        this.ersteller = this.ticketItem.ersteller;

        let params = `<div>
                        <div class="ticket-id">
                            <h3>[ID-${this.id}]</h3>
                        </div>
                        <div>
                            <h1>${this.title}</h1>
                        </div>
                        <hr>
                        <div>
                            <p class="erstelldatum"><b>Erstelldatum: </b>${this.creation_date}</p>
                        </div>
                        <br>
                        <div>
                            <h3>Beschreibung:</h3>
                            <p>
                                ${this.description}
                            </p>
                        </div>
                        <br>
                        <div>
                            <div id="info">
                                <p><b>Status: </b><span class="${this.state}">${this.state}</span></p>
                                <p><b>Ersteller: </b>${this.ersteller}</p>
                                <p><b>Kategorie: </b>${this.category}</p>
                                <p><b>Raum: </b>${this.room}</p>
                            </div>
                        </div>
                      </div>`;

        let info = $mdDialog.alert()
            .htmlContent(params)
            .ok('Schließen');

        $mdDialog.show(info)

    };

});