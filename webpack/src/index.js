 import _ from 'lodash';
 import printMe from './print.js';

 function component() {
     var element = document.createElement('div');

     // Lodash, currently included via a script, is required for this line to work
     // Lodash, now imported by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //  console.error('I get called from print.js!');
     return element;
 }

 document.body.appendChild(component());