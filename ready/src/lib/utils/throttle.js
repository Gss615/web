/**
 * 节流
 *规定在一个单位时间内，只能出发一次函数。如果这个单位时间内出发多次，只有一次生效。
 */
function throttle(fn, delay) {
    let last, deferTimer
    return function (args) {
        let that = this
        let _args = args
        let now = +new Date()
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(() => {
                last = now
                fn.apply(that, _args)
            })
        } else {
            last = now
            fn.apply(that, _args)
        }
    }
}

function throttle(fn, delay) {
    let last, timer;
    return function (args) {
        let that = this
        let _args = args
        let now = +new Date()
        if (last && last < now + delay) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(that, _args)
            })

        } else {
            last = now
            fn.apply(that, _args)
        }
    }

}

function debounce(fn, delay) {
    let timer;
    return function (args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function throttles(fn, delay) {
    let last, timer
    return function (args) {
        let now = +new Date()
        if (last && last < now + delay) {
            clearTimeout(timer)
            timer = setTimeout(()=>{
                fn.apply(this, args)
            },delay)
        }else{
            last = now
            fn.apply(this,args)
        }
    }
}
