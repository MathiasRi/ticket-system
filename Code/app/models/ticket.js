"use strict";

app.factory("Ticket", function () {

    function Ticket(title, description, category){
        this.title = title || "";
        this.description = description || "";
        this.category = category || "";
        this.id = 1;
        this.creation_date = new Date();
        this.state = 'Pending...';
    }


    return Ticket;
});