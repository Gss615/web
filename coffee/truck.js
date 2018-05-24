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

var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({
    emailAddress: 'dr@no.com',
    coffee: 'decaf'
});

myTruck.createOrder({
    emailAddress: 'me@goldfinger.com',
    coffee: 'double mocha'
});
myTruck.createOrder({
    emailAddress: 'm@bond.com',
    coffee: 'earl grey'
});
myTruck.db;
console.log(myTruck)
