"use strict";

app.component("ticketItem", {
    templateUrl: "components/ticket-item.html",
    controller: "TicketItemController",
    bindings: {ticketItem: "<"}
});


app.controller("TicketItemController", function ($log, Ticket, $mdDialog) {

    $log.debug("TicketItemController()");

    this.showTicketInfo = () => {

        let params = `<div>
                        <div class="ticket-id">
                            <h3>[ID-200]</h3>
                        </div>
                        <div>
                            <h1>Beamer funktioniert nicht</h1>
                        </div>
                        <hr>
                        <div class="erstelldatum">
                            <p><b>Erstelldatum:</b> 16.02.2019</p>
                        </div>
                        <br>
                        <div>
                            <h3>Beschreibung:</h3>
                            <p>
                                Der Beamer im Raum 354 funktioniert nicht. Es wird um eine schnelle Reparatur gebeten, um den Beamer wieder in Betrieb nehmen zu können.
                            </p>
                        </div>
                        <br>
                        <div>
                            <div>
                                <p><b>Status:</b> offen</p>
                                <p><b>Reporter:</b> Max Mustermann</p>
                                <p><b>Kategorie:</b> Technik</p>
                            </div>              
                        </div>
                      </div>`;

        let info = $mdDialog.alert()
            .htmlContent(params)
            .ok('Schließen');

        $mdDialog.show(info)

    };

});