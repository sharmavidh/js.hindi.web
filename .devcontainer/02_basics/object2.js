//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "vidhi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "vs@gmail.com",
    fullname :{
        userfullname: {
            firstname:"vidhi",
            lastname : "sharma"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

//const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id:2,
        email: "vs@gmail.com"
    },
    
    {
    },
    
    
    {
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vidhi"
}

const{courseInstructor} = course

//console.log(courseInstructor);


// const navbar = ({company}) => {

// }
// navbar(company = "vidhi")