// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regilarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "Sharma"
        }
    }
}

// console.log(regilarUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users= [
    {
        id:1,
        email:"S@gmail.com"
    },
    {
        id:2,
        email:"S1@gmail.com"
    },
    
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));