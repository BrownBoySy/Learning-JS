// singleton

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Satyam",
    "Full name": "Satyam Sharma",
    [mySym]: "mykey1",
    age: 25,
    location: "Delhi",
    email: "Satyam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// console.log(typeof mySym);

jsUser.email = "Satyam@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "Satyam@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


