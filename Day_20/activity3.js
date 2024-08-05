// Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let task6Object = {
    language: "JavaScript",
    version: "1.0",
    projectName: "JavaScript 30Days Challenge Chai aur code"
  };
  
  // Convert the object to a JSON string and save it to sessionStorage
  sessionStorage.setItem("object", JSON.stringify(task6Object));
  
  // Retrieve the JSON string from sessionStorage and parse it back into an object
  let retrievedObject = JSON.parse(sessionStorage.getItem("object"));
  
  // Log the retrieved object to the console
  console.log(retrievedObject);
  