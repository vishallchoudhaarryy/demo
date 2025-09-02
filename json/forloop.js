//for
// for (let i = 0; i <=10 ; i++) {
//     const element =i ;
//     console.log(element);
//     if (element==5) {
//         console.log("Element is 5, breaking the loop");

//     }
//     // console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop value : ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     //    console.log(`inner loop value :${j} and innne loop value:${i}`);
//     console.log(`${i}*${j} = ${i * j}`);
//   }
// }

// let myArray = ["apple","banana","grape"]
// // console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
    
// }

// for (let index = 1; index <=10; index++) {
//     if (index==7) {
//         console.log("breaking loop at 7");
        
//         continue
//     }

//     console.log(`value of index is ${index}`);
    
    
// }



// let index = 0
// while (index <= 20) {
//     console.log(`value of the index is ${index} `);
//     index = index +5
// }



// let myArray= ["banana", "mango" ,"grapes" ,"fruit","apple",]

// let index =0
// while (index<myArray) {
//     console.log(`names in my array ${myArray [index]}`);
//     index = index +1
// }

// let myArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

// for (let index = 0; index <= myArray.length; index++) {
    // const element = myArray[index];
    // console.log(myArray[index]);
//     }
    
// // let i = 9

// for (let i = 0; i <=10; i++) {
//     // console.log(`outer loop value is ${i}`);
    
    
// }

// let myArray = 1
// while (myArray<=10) {
//     console.log(`outerloop value is myArray ${myArray}`);
//     myArray= myArray+1
// }


// let score = 10

// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score<=9);


//++++++++++array specific loops


// const arr = [1,2,3,4,5,7,8,9]

// for (const num of arr) {
//     //console.log(`number in for loop ${num}`);
    
// }

// let string = "hello world!"
// for (let str of string) {
    
//     if (str==" ") {
//         console.log(`breaking because of space`);
//         continue
//     }
//     console.log(`word by word ${str}`);
    
// }

// let map = new Map ()
// map.set("IN","INDIA")
// map.set("USA","UNOTED STATES")
// map.set("IN","INDIA")
// map.set("JN","JAPAN")

// // console.log(map);
// for (let [key,value] of map) {
//     console.log(key, "=" ,value);
    
// }



//

// let fruits = ["apple", "banana", "grapes"];

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(`i like ${element}`);
    
// }

// for (let i = 5; i >=1; i--) {
//     console.log(i);
    
// }


// let coding = [ "javascript", "python", "java", "c++", "ruby"];
 
//  let values =   coding.forEach( (item) => {
//     console.log(item);
    
// }) 

// console.log(values);

// let myNums= [ 1,2,3,4,5,6,7,8,9,10]


// let newNUms = myNums.filter( (item) => {
//     return item > 4
// } )

// console.log(newNUms);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// //   books.filter ( (bk) => bk.genre=== "History")

// let userbooks = books.filter ( (bk) => bk.publish>=)

// console.log(userbooks);



let newNUms = [1,2,3,4,5,6,7,8,9,10]

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}

// Example usage:
console.log(calculator(5, 3, '+')); // 8
console.log(calculator(10, 2, '/')); // 5