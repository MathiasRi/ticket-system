"use strict";

app.factory("Ticket", function () {

    function Ticket(title, description, category, id, creation_date, state, room, ersteller) {
        this.title = title || "";
        this.description = description || "";
        this.category = category || "";
        this.id = id;
        this.creation_date = creation_date.toLocaleString();
        this.state = state;
        this.room = room;
        this.ersteller = ersteller;
    }

    return Ticket;
});