// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non singleton object

 tinderUser.id = "128dad";
 tinderUser.name = "Monish";
 tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "mg@gmail.com",
    fullName : {
        userFullName: {
            firstName: "Monish",
            lastName: "Giri"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4); // combine all the objects in one object

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);
// console.log(obj3[1]);
const user = [
    {
        id: 1,
        email: "monishgiri@gmail.com"
    },
    {

    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives all the keys of the object as a array
console.log(Object.values(tinderUser)); // gives all the values of the object as a array
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

// object destructuring

const course = {
    courseName: "Java course",
    price: "555",
    courseInstructor: "Monish Giri"
}

// course.courseInstructor;
// const {courseInstructor} = course;
const {courseInstructor : instructor} = course; // now we can use instructor to acess courseInstructor

// console.log(instructor);

// in react
// const navbar = ({company}) =>{

// }
// navbar(company = "Monish")

// in Json format
// {
//     "name": "monish",
//     "courseName": "java in hindi",
//     "price": 'free'
// }

[
    {},
    {}
]