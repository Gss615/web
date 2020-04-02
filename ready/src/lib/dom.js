function m1() {

}
function m2() {

}

let myModule = {
    data:'',
    foo(){

    }
}

(function (window,$) {
    let data = ''
    function foo (){

    }
    window.myModule = {foo}
})(window,jQuery)