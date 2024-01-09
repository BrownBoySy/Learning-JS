// stack (primitive), Heap (Non-primitive)

let myYoutubename = "Brownboysy"

let anotherName = myYoutubename
anotherName = "Satyam Sharma"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Satyam@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);