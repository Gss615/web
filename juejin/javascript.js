// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve(), ms, "done2", "done1")
//     })
// }
// timeout(100).then((value, v2) => {
//     console.log(value)
//     console.log(v2)
// })
// setTimeout(() => {

// }, timeout);
// setTimeout(function (a, b) {
//     console.log(a + b);
// }, 1000, 1, 1);

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve("e",'d');
  });
  
  promise.then(function(e1,e2) {
    console.log(e2);
  });
  
  console.log('Hi!');
