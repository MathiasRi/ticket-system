"use strict";

app.component("ticketEditor", {
    templateUrl: "components/ticket-editor.html",
    controller: "TicketEditorController",
    bindings: {}
});


app.controller("TicketEditorController", function ($log, $mdDialog) {

    $log.debug("TicketEditorController()");

    this.showConfirm = () => {

        let params = `Wollen Sie Ihr Ticket mit dem Titel "${this.te_titel}" (Kategorie: "${this.te_kategorie}") wirklich erstellen?`;

        let confirm = $mdDialog.confirm()
            .title('Ticket wirklich erstellen?')
            .textContent(params)
            .ok('Ja.')
            .cancel('Nein.');

        $mdDialog.show(confirm).then(() => {
            this.status = 'Hinzugefügt';
            $log.debug("Ticket hinzugefügt.");

            //In Factory hinzufügen


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


    /*$mdDialog.show(confirm).then(function() {
        $scope.status = 'You decided to get rid of your debt.';
    }, function() {
        $scope.status = 'You decided to keep your debt.';
    });*/



});