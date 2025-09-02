//+++Declare let, const, and var variables.

// Store your name, age, and whether you like coding in variables.

// Try changing the value of a const and see what happen


// let name = "vishal"
// const age = 20
// var rollnumber = 88

 
//  const age = 28

//   console.log( name , age , rollnumber);

// ++++++++++++++++++++++++++++++++++++++

// Add, subtract, multiply, divide two numbers.

// Use % to find the remainder of a division.

// Try ++ and -- to change values.

// Use logical operators (&&, ||, !) in examples.

// let a = "true"
// let b = "false"
  
// console.log( a + b );
// console.log( a - b  );
// console.log( a * b );
// console.log( (a) / (b) );
// console.log( (a) % (b) );


// console.log(a+1);
// console.log(a-1);

// +++++ Write an if...else to check if a number is positive or negative.

// Write a program that checks if someone is old enough to drive (>=18).

// Use switch to print the day name for numbers 1–7.


let i = 5;

if (i<0) {
    console.log(`negative ${i}`);
    
} else {console.log(`positive ${i}`);}

let  name = "vishal"
let age = 2

if (age>=18) {
    console.log(`you can drive`);

} else {
    console.log('minor detected');
    
}

let dayNumber =5
let dayName = null ;


switch (dayNumber) {
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Satday"
        break;
    case 7:
        dayName = "Sunday"
        break;

    
}
