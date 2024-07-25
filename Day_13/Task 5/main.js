import * as util from './util.js';

function main(){
    console.log(`The value of PI is ${util.PI}`);
    console.log(`The value of E is ${util.E}`);

    const r = 3;

    console.log(`Area of circle is ${util.circle(r)}`);
    console.log(`Message: ${util.message}`);
}
main();