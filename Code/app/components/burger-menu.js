app.component("burgerMenu", {
    templateUrl: "components/burger-menu.html",
    controller: "BurgerMenuController",
    bindings: {}
});


app.controller("BurgerMenuController", function ($log) {

    $log.debug("BurgerMenuController()");

    this.burger_menu_open = false;

    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'down';


});