(function (window) {
    'use strict';
    var App = window.App || {}

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db

    }
    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for' + order.emailAddress)
        this.db.add(order.emailAddress, order)
    }
    App.Truck = Truck
    window.App = App
})(window)


