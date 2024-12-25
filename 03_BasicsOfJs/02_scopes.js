// let a = 1
// const b = 2
// var c = 3
// var c = 300
// let a = 1222

// if(true) {
//   let a = 1
//   const b = 2
  // var c = 3
  // console.log("INNER: ", a);  // 1
  
// }
// console.log(a); 
// console.log(b); //Error, b not defined
// console.log(c); // 3 This is a problem. Should not have happened. This is why we avoid using var


function one() {
  const username = "Samarth"

  function two() {
    const website = "Youtube"
    // console.log(username);
    
  }
  // console.log(website);
    two()
  
}
// one()


if(true) {
  const username = "Sammy"
  if (username === "Sammy") {
    const web = " google"
    console.log(username + web); // Sammy google
    

  }
  // console.log(web); // error not in scope
  
}
// console.log(username); // error not in scope

// +++++++++++++++++++++++++++++++++++  Interesting  ++++++++++++++++++++++++++++++++++++++++


// addone(2) Code will run with NO ERROR, but will not return anything, as we have not done console.log
function addone(num) {
  return num + 1
}
// addone(2) // Does not return anything, as we have not done console.log


// addtwo(5) Gives ERROR, ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num) {
  return num + 2
}
// addtwo(5) // Does not return anything, as we have not done console.log







