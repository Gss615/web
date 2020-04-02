let Directive = {};
Directive.install = function (Vue, options) {
    Vue.directive('focus', {
        inserted: function (el) {
            console.log('这是一个指令')
        }
    })
}

export default Directive
