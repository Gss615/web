(function (window) {
    'use scrict';
    var App = window.App || {};
    var $ = window.jQuery
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
    FormHandler.prototype.addSubmitHandler = function () {
        console.log('Setting submit handler for form')
        this.$formElement.on('submit', function (event) {
            event.preventDefault()
            var data = $(this).serializeArray(
                console.log(data)
            )
        })
    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window)
var formHandler = new App.FormHandler()