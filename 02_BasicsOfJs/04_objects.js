// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Samarth",
            lastName : "Shanbhag"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);  // Samarth
// console.log(regularUser.fullname.userFullname.lastName); // Shanbhag

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}
const obj4 = { 5 : "a", 6 : "b"}

// const obj3 = {obj1, obj2, obj4} 
// console.log(obj3);
// {
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'a', '4': 'b' },
//   obj4: { '5': 'a', '6': 'b' }
// } Not the desired output


// const obj3 = Object.assign({}, obj1, obj2, obj4) // Target-source syntax ({TARGET}, sources......)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4} //Preferred syntax
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Values coming to and from the databases look like these: -
const user1 = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
]
// console.log(user1[1].email); // b@gmail.com

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Returns the ARRAY of keys
console.log(Object.values(tinderUser)); // Returns the ARRAY of values
console.log(Object.entries(tinderUser)); //Every key value pair is returned as an array within a bigger array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// ------------------------ Object Destructuring -------------------------------------

const course = {
  courseName: "Js in Hindi",
  coursePrice: "999",
  courseInstructor: "Hitesh",
}
  // course.courseInstructor //Normal way of accessing the property

  // const {courseInstructor} = course
  // console.log(courseInstructor);
  // const {courseInstructor : Instructor} = course // if we feel courseInstructor is a very long name
  // console.log(Instructor);

  // Basic json syntax
  // {
  //     "name": "hitesh",
  //     "coursename": "js in hindi",
  //     "price": "free"
  // }

// API basics
  // [
//   ({}, {}, {})
// ];





 
