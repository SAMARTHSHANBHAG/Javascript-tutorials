// Immediately Invoked Function Expressions (IIFE)
( function iifeLearn() {
  // named IIFE
  console.log(`Database connected`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('samarth')