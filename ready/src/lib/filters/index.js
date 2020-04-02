const Filters = {}
Filters.install = function (Vue,options) {
    Vue.filter('format',function (value) {
        console.log('这是一个过滤器');
        return value
    })
}