"use strict";

app.factory("Ticket", function () {

    function Ticket(description, category){
        this.description = description || "";
        this.category = category || "";
    }


    return Ticket;
});