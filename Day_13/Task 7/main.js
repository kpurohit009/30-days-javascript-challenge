import axios from 'axios';

async function main(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Response data: ', response.data);
    }
    catch(error){
        console.error(`Error making the request: ${error.message}`);
    }
}
main();