//Activity 1 : Basic Regular Expression
//Task 1
const text = "JavaScript is great. I love JavaScript for web development. JavaScript is versatile.";
const regex = /JavaScript/g;
const matches = text.match(regex);
console.log(matches);

//Task 2
const text1 = "The year is 2024 and the time is 15:30.";
const regex1 = /\d+/g;
const matches1 = text1.match(regex1);
console.log(matches1);


//Activity 2 : Character Classes and Quantifiers
//Task 3
const text2 = "Hello World! JavaScript is a powerful language. Enjoy Learning.";
const regex2 = /\b[A-Z][a-zA-Z]*\b/g;
const matches2 = text2.match(regex2);
console.log(matches2);

//Task 4
const text3 = "The address is 1234 Elm St. and the zip code is 56789. Call 800-555-1234 for info.";
const regex3 = /\d+/g;
const matches3 = text3.match(regex3);
console.log(matches3);


//Activity 3 : Grouping and Capturing
//Task 5
const text4 = "Call us at (123) 456-7890 or (987) 654-3210 for more information.";
const regex4 = /\((\d{3})\) (\d{3})-(\d{4})/g;
const matches4 = [...text4.matchAll(regex4)];
matches4.forEach(match => {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
    console.log(`Full match: ${fullMatch}`);
    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
});

//Task 6
const text5 = "Please contact us at support@example.com or admin@domain.org for more information.";
const regex5 = /(\w+@\w+\.\w+)/g;
const matches5 = [...text5.matchAll(regex5)];

// Log the captures
matches5.forEach(match => {
    const [fullMatch] = match;
    // Extract username and domain
    const [username, domain] = fullMatch.split('@');
    console.log(`Full match: ${fullMatch}`);
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
});


//Activity 4 : Assertions and Boundaries
//Task 7
const texts6 = [
    "Hello world! This is a test.",
    "Another example starts here.",
    "Test at the beginning.",
    "No match here."
];
const regex6 = /^\w+/;
texts6.forEach(text => {
    const match = text.match(regex6);
    console.log(`String: "${text}"`);
    if (match) {
        console.log(`Match: ${match[0]}`);
    } else {
        console.log("No match");
    }
    console.log('---');
});

//Task 8
const texts7 = [
    "This is the end word",
    "Just a sample",
    "Another example here",
    "No match here",
    "Ends with Word"
];

const regex7 = /\b(\w+)\b$/;

texts7.forEach(text => {
    const match = text.match(regex7);
    console.log(`String: "${text}"`);
    if (match) {
        console.log(`Match: ${match[1]}`);
    } else {
        console.log("No match");
    }
    console.log('---');
});


//Activity 5 : Practical Applications
//Task 9
const passwords = [
    "Password123!",
    "password123", 
    "PASSWORD123!",  
    "Passw@rd",      
    "P@ssw0rd",      
    "12345678",     
    "P@ssw0rd!"     
];

const regex8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/;
passwords.forEach(password => {
    const isValid = regex8.test(password);
    console.log(`Password: "${password}"`);
    console.log(`Valid: ${isValid}`);
    console.log('---');
});

//Task 10
const urls = [
    "http://example.com",
    "https://www.example.com",
    "ftp://files.example.com/path/to/file",
    "http://example.com:8080",
    "http://example.com/path?query=1#fragment",
    "http://example",
    "https://.com",
    "http://example.com:99999", // Invalid port
    "http://256.256.256.256", // Invalid IP
    "https://example.com/path/to/resource"
];

// Regular expression to validate a URL
const regex9 = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\.-]*)*(\?[;&=\w\.-]*)?(#[\w\-]*)?$/i;

urls.forEach(url => {
    const isValid = regex9.test(url);
    console.log(`URL: "${url}"`);
    console.log(`Valid: ${isValid}`);
    console.log('---');
});