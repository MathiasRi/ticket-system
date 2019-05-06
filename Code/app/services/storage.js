"use strict";

app.service("StorageService", function($log, User) {

    $log.debug('StorageService');

    const USER_KEY = 'user';

    this.speichern = (user) => {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    };

    this.laden = () => {
        let u = JSON.parse(localStorage.getItem(USER_KEY));

        return (u != null) ? u : new User('X', 'logout', 'logout', 'Log', 'Out', 'LOGOUT');
    };
});