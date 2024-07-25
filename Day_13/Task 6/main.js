//import lodash
import _ from 'lodash';

function main(){
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkedArray = _.chunk(array, 2);

    console.log(`original array:`, array);
    console.log(`chunked array: `, chunkedArray);
}
main();