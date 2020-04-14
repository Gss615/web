//手写cell()
Function.prototype.myCall = function (thisArg,...args) {
    thisArg.fn = this
    return thisArg.fn(...args)
}