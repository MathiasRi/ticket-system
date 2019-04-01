"use strict";

app.component("ticketEditor", {
    templateUrl: "components/ticket-editor.html",
    controller: "TicketEditorController",
    bindings: {ticketItem: "&"}
});


app.controller("TicketEditorController", function ($log, $mdDialog) {

    $log.debug("TicketEditorController()");

    this.showConfirm = () => {

        let params = `<div>
                        <div>
                            <h1>${this.te_titel}</h1>
                        </div>
                        <hr>
                        <div>
                            <p><b>Kategorie:</b> ${this.te_kategorie}</p>
                        </div>
                        <div>
                            <p>
                                <b>Beschreibung:</b>
                                <br>
                                ${this.te_beschreibung}
                            </p>
                        </div>
                      </div>`;

        let confirm = $mdDialog.confirm()
            .title('Ticket wirklich erstellen?')
            .htmlContent(params)
            .ok('Ja')
            .cancel('Nein');

        $mdDialog.show(confirm).then(() => {
            this.status = 'Hinzugefügt';
            $log.debug("Ticket hinzugefügt.");

            this.te_form.$setUntouched();
            this.te_titel = "";
            this.te_kategorie = "";
            this.te_beschreibung = "";

            this.ticket = new Ticket(this.te_titel, this.te_beschreibung, this.te_kategorie);
            this.neuesTicket();
        }, () => {
            this.status = 'Abgebrochen';
            $log.debug("Ticket abgebrochen.");

            this.te_form.$setUntouched();
            this.te_titel = "";
            this.te_kategorie = "";
            this.te_beschreibung = "";
        });
    };


    this.neuesTicket = () => {
        this.ticketItem({ticket: this.ticket});
        $log.debug(this.ticketItem);
    };


});