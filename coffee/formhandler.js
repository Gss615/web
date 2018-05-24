(function (window) {
    'use scrict';
    var App = window.App || {};
    var $ = window.jQuery
    // var FORM_SELECTOR = '[data-coffee-order="form]'

    console.log($)

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided')
        }
        this.$formElement = $(selector)
        if (this.$formElement.length === 0) {
            throw new Error('could not find element with selector:' + selector)
        }
    }
    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form')
        this.$formElement.on('submit', function (event) {
            event.preventDefault()
            var data = {}
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value
                console.log(item.name + '  is' + item.value)
            })
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
            

        })
    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window)
// var fh = new App.FormHandler('[data-coffee-order="form"]')
// fh.addSubmitHandler()