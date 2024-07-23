//Activity 1 : Understanding Promises
//Task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This message is showed after 2 second ");
    }, 2000);
});

//Handle promise
promise .then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error("Error accurred: ", error);
});

//Task 2
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This error message show after 2 seconds"));
    }, 2000);
});

promise1 .catch((error) => {
    console.error(error.message);
});


//Activity 2 : Chaining Promises
//Task 3
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched first data");
            resolve("Fetched data is from Server 1");
        }, 2000)
    })
}

const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched second data");
            resolve("Fetched data is from Server 2");
        }, 3000)
    })
}

const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched third data");
            resolve("Fetched data is from Server 3");
        }, 4000)
    })
}

fetchData() 
    .then((data) => {
        console.log(data);
        return fetchData1();
    })
    .then((data1) => {
        console.log(data1);
        return fetchData2();
    })
    .then((data2) => {
        console.log(data2);
    })
    .catch((error) => {
        console.error(`Error occurred: ${error.message}`)
    })


//Activity 3 : Async / Await
//Task 4
async function logResolveValue(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 second");
        }, 2000);
    })
    try{
        const result = await promise;
        console.log(result);
    }
    catch(error){
        console.error(`Error occurred: ${error.message}`);
    }
}
logResolveValue()

//Task 5
async function logRejectValue(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is rejected promise after 2 second"));
        }, 2000);
    })
    try{
        const result = await promise;
        console.log(result);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
    }
}
logRejectValue()


//Activity 4 : Fetching data from API
//Task 6
const apiUrl = 'https://api.freeapi.app/api/v1/public/randomjokes';
const fetchAPI = () => {
    fetch(apiUrl)
        .then((response) => {
            if(!response.ok){
                throw new Error('Unable to fetch response due to network error')
            }
            return response.json()
        })
        .then((data) => {
            console.log(`Response data: ${data}`);
        })
        .catch((error) => {
            console.error(`Error while fetching data: ${error.message}`)
        })
}
fetchAPI()

//Task 7
async function fetchAPIData(){
    try{
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes')
        if(!response.ok){
            throw new Error(`Unable to fetch response due to network error, ${response.statusText}`)
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(`Error while fetching data: ${error.message}`)
    }
}
fetchAPIData()


//Activity 5 : Concurrent Promises
//Task 8
const firstpromise = new Promise(resolve => setTimeout(() => resolve('Promise 1 is resolved')))
const secondpromise = new Promise(reject => setTimeout(() => reject('Promise 2 is rejected')))
const thirdpromise = new Promise(resolve => setTimeout(() => resolve('Promise 3 is resolved')))

Promise.all([firstpromise, secondpromise, thirdpromise])
    .then(values => {
        console.log(values);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`)
    })

//Task 9
Promise.race([firstpromise, secondpromise, thirdpromise])
.then(values => console.log(values))
.catch(error => console.error(`Error: ${error.message}`))