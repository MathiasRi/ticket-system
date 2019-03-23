"use strict";

app.component("ticketEditor", {
    templateUrl: "components/ticket-editor.html",
    controller: "TicketEditorController",
    bindings: { ticketItem : "&" }
});


app.controller("TicketEditorController", function ($log, $mdDialog) {

    $log.debug("TicketEditorController()");

    this.showConfirm = () => {

        let params = `Wollen Sie Ihr Ticket mit dem Titel "${this.te_titel}" (Kategorie: "${this.te_kategorie}") wirklich erstellen?`;

        let confirm = $mdDialog.confirm()
            .title('Ticket wirklich erstellen?')
            .textContent(params)
            .ok('Ja')
            .cancel('Nein');

        $mdDialog.show(confirm).then(() => {
            this.status = 'Hinzugefügt';
            $log.debug("Ticket hinzugefügt.");

            //In Factory hinzufügen



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