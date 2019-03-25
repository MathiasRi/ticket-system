"use strict";

app.component("ticketEditor", {
    templateUrl: "components/ticket-editor.html",
    controller: "TicketEditorController",
    bindings: { ticketItem : "&" }
});


app.controller("TicketEditorController", function ($log, $mdDialog) {

    $log.debug("TicketEditorController()");

    this.showConfirm = () => {

        let params =  `<div>
                        <p>Wollen Sie folgendes Ticket erstellen?</p>
                        <ul>
                            <li>Titel: ${this.te_titel}</li>
                            <li>Kategorie: ${this.te_kategorie}</li>
                            <li>Beschreibung:
                                <p>${this.te_beschreibung}</p>
                            </li>
                        </ul>
                      </div>`;

        let confirm = $mdDialog.confirm()
            .title('Ticket wirklich erstellen?')
            .htmlContent(params)
            .ok('Ja')
            .cancel('Nein');

        $mdDialog.show(confirm).then(() => {
            this.status = 'Hinzugefügt';
            $log.debug("Ticket hinzugefügt.");

            this.ticket = new Ticket (this.te_titel, this.te_beschreibung, this.te_kategorie);
            this.neuesTicket();

            this.te_form.$setUntouched();
            this.te_titel = "";
            this.te_kategorie = "";
            this.te_beschreibung = "";

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
        this.ticketItem({ticket : this.ticket});
    };


});