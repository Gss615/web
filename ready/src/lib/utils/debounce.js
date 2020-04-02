/**
 * 防抖函数：在时间被出发n秒后在执行回调，如果在这n秒内又被出发，则重新计时。
 */

function debounce(fn, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(fn.id)
        fn.id = setTimeout(() => {
            fn.call(that, _args)
        }, delay)
    }
}

~(function () {
    function debounce(fn, delay) {
        return function (args) {
            let that = this
            let _args = args
            clearTimeout(fn.id)
            fn.id = setTimeout(() => {
                fn.call(that, _args)
            }, delay)
        }
    }
})();

let helpers = {
    debounce: function (fn, wait, scope) {
        let timeout;
        return function () {
            let context = scope || this, args = arguments;
            let later = function () {
                timeout = null;
                fn.apply(context, args)
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait)
        }
    },
    throttle: function (fn, threshold = 250, scope) {
        let last, deferTimer;
        return function () {
            let context = scope || this;
            let now = +new Date, args = arguments;
            if (last && now < last + threshold) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(() => {
                    last = now;
                    fn.apply(context, args)
                }, threshold)
            } else {
                last = now;
                fn.apply(context, args)
            }
        }
    }
}