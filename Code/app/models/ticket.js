"use strict";

app.factory("Ticket", function () {

    function Ticket(title, description, category){
        this.title = title || "";
        this.description = description || "";
        this.category = category || "";
        this.state = 'Pending...';
    }


    return Ticket;
});