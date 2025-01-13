const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Db calls, cryptography, network call
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise has been consumed");
});

// Creating a promise without holding it in a variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sam", email: "sam@gpt6.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Samarth", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Js", password: "13" });
    } else {
      reject("Error : Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
        

//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)

