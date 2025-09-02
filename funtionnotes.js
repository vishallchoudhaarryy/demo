                                  
                           // Function Kya Hai? 🤔
// Function ek aisa code block hai jo koi specific kaam karta hai. 
// Jaise aapke ghar mein chai banane ka process - 
// har baar same steps follow karte hain. Function bhi waisa hi hai - 
// ek baar define karo, baar-baar use karo.

// Function Banane Ke Tarike
//                                       1. Basic Function (Sabse Simple)
// Function define karna
function namasteBolo() {
  //console.log("Namaste Dosto!");
}
// Function call karna
namasteBolo(); // Output: Namaste Dosto!


//                               2. Function with Parameters (Input Ke Saath)

// Function with parameters
function shadiKaInvitation(name, jagah, samay) {
  //console.log(`${name} ki shadi mein aapko ${jagah} par ${samay} baje bulawa hai`);
}
// Function call with arguments
shadiKaInvitation("Rahul", "Taj Hotel", "7:00 PM");
// Output: Rahul ki shadi mein aapko Taj Hotel par 7:00 PM baje bulawa hai


//                                     3. Function Jo Value Return Kare

// Paise jodo
function totalPaisaJodo(paise1, paise2) {
  return paise1 + paise2;
}

// Use karo
let total = totalPaisaJodo(500, 300);
console.log(`Total paise: ₹${total}`); // Output: Total paise: ₹800


//____________________________________________________________________________________________


// Example 1: Dukaan Bill Calculator

function billBanao(daam, quantity, GST = 5) {
  let total = daam * quantity;
  let tax = (total * GST) / 100;
  return total + tax;
}

let meraBill = billBanao(100, 3, 18); // ₹100 ka saman, 3 pieces, 18% GST
//console.log(`Aapka total bill hai: ₹${meraBill}`);


// Example 2: Student Report Card

function reportCardBanaye(studentName, marks) {
  let percentage = (marks / 100) * 100;
  
  if(percentage >= 90) {
    return `${studentName} - First Class! (${percentage}%)`;
  } else if(percentage >= 60) {
    return `${studentName} - Second Class (${percentage}%)`;
  } else {
    return `${studentName} - Try harder beta (${percentage}%)`;
  }
}

//console.log(reportCardBanaye("Raj", 85)); // Raj - First Class! (85%)
//console.log(reportCardBanaye("Priya", 45)); // Priya - Try harder beta (45%)


//Example 3: Grocery Shopping List


function shoppingListBanaye(...saman) { // ... means kitne bhi items
  console.log("Aaj ye lena hai market se:");
  saman.forEach((item, index) => {
    //console.log(`${index + 1}. ${item}`);
  });
}

shoppingListBanaye("Aata", "Chawal", "Daal", "Sabziyaan", "Doodh");
//____________________________________________________________________________________________


                   //Function Types - Aur Bhi Tarike

// 1. Arrow Function (Naya Tarika)

// Purana tarika
function puranaAdd(a, b) {
  return a + b;
}

// Naya arrow function
const nayaAdd = (a, b) => a + b;

//console.log(nayaAdd(5, 3)); // Output: 8


// 2. Anonymous Function (Bina Naam Ka)

// Jaise koi bina naam ka artist
const binaNaamKaKaam = function(num) {
  return num * num;
};

//console.log(binaNaamKaKaam(4)); // Output: 16


         ///Function Ke Fayde 💪


// Code Repeat Nahi Karna Padta - Ek baar likho, hazaar baar use karo

// Code Saaf Dikhta Hai - Chhota aur organized

// Problem Solve Karna Aasan - Har problem ko alag function mein daalo

// Testing Aasan - Har function ko alag test karo

// Common Mistakes ❌

// ❌ Function call bhool gaye
function kuchBolo() {
  //console.log("Hello");
}
kuchBolo; // Kuch nahi hoga - () bhool gaye

// ✅ Sahi tarika
kuchBolo(); // Output: Hello

// ❌ Return nahi kiya
function galtiWalaAdd(a, b) {
  a + b; // Return keyword bhool gaye
}
console.log(galtiWalaAdd(2, 3)); // Output: undefined

// ✅ Sahi tarika
function sahiAdd(a, b) {
  return a + b;
}
//console.log(sahiAdd(2, 3)); // Output: 5       


//____________________________________________________________________________________________
                                  // Parameters Kya Hote Hain?
// Parameters function ke andar use hone wale variables hote hain jo function banate waqt define kiye jaate hain. Ye aise khali boxes hain jisme aap values daal sakte hain.

// Simple Example - Ghar Ka Example
// Sochiye aap ek chai banane ka function bana rahe hain:


function chaiBanaye(pani, chaiPatti, doodh, cheeni) {
  // Yeh sab parameters hain
  return `Chai taiyaar hai: ${pani}ml pani, ${chaiPatti}spoon chai-patti, ${doodh}ml doodh, ${cheeni}spoon cheeni`;
}

//console.log(chaiBanaye(200, 2, 50, 3));
// Output: Chai taiyaar hai: 200ml pani, 2spoon chai-patti, 50ml doodh, 3spoon cheeni
//____________________________________________________________________________________________


                                  // Parameters vs Arguments - 
//         Parameters	                                          Arguments
// Function banate waqt define hote hain           |   	Function call karte waqt pass kiye jaate hain
// Aise jaise recipe mein ingredients ki list      |	Aise jaise actually ingredients daalna

function multiply(a, b) { // a aur b parameters hain
  return a * b;
}

multiply(5, 3); // 5 aur 3 arguments hain

//____________________________________________________________________________________________

                                 // Types of Parameters

// 1. Regular Parameters

function studentKaResult(name, marks, subject) {
  return `${name} ne ${subject} mein ${marks} marks paye`;
}

//console.log(studentKaResult("Rahul", 85, "Maths"));
// Output: Rahul ne Maths mein 85 marks paye

// 2. Default Parameters (Agar value na de to)
function welcomeUser(name = "Guest", city = "Mumbai") {
  return `Welcome ${name} from ${city}!`;
}

//console.log(welcomeUser()); // Welcome Guest from Mumbai!
//console.log(welcomeUser("Priya", "Delhi")); // Welcome Priya from Delhi!

//3. Rest Parameters (Baki saare values ke liye)

function totalBill(...items) { // ... ka matlab "saari values"
  let total = 0;
  for (let item of items) {
    total += item;
  }
  return total;
}

//console.log(totalBill(100, 50, 25, 75)); // Output: 250

//____________________________________________________________________________________________


//                         Example 1: Shopping Cart

function calculateTotal(price, quantity, discount = 0) {
  let total = price * quantity;
  total = total - (total * discount / 100);
  return total;
}

//console.log(calculateTotal(500, 2)); // 1000
//console.log(calculateTotal(500, 2, 10)); // 900 (10% discount)

//                          Example 2: User Profile

function createProfile(name, age, hobbies = ["reading", "music"]) {
  return {
    naam: name,
    umar: age,
    shaukh: hobbies
  };
}

const profile = createProfile("Amit", 25, ["cricket", "travel"]);
//console.log(profile);
// Output: {naam: "Amit", umar: 25, shaukh: ["cricket", "travel"]}

//____________________________________________________________________________________________

                            // Important Baatein - 

// Order matter karta hai - arguments ka order parameters ke order se match karna chahiye

// Agar kam arguments diye to baaki parameters undefined honge

// Agar zyada arguments diye to extra arguments ignore honge (par rest parameters use kar sakte hain)


function example(a, b, c) {
  //console.log(a, b, c);
}

example(1, 2); // Output: 1 2 undefined
example(1, 2, 3, 4, 5); // Output: 1 2 3 (4 and 5 ignored)

//____________________________________________________________________________________________


// 1. Simple addition function
function add(a, b) {
  return a + b  ; 
}
//console.log(add(10,5) );


// // 2. Student info function
 function studentInfo(name , age , standard = 10) { 
   return `Student: ${name}, Age: ${age}, Class: ${standard}`;
}
//console.log(studentInfo("vishal", 22  ));

// // 3. Pizza order function
function pizzaOrder(size, toppings = ["cheese"], extraCheese = false) { // Ek parameter add karo
  return `Size: ${size}, Toppings: ${toppings.join(", ")}, Extra Cheese: ${extraCheese}`;
}
//console.log(pizzaOrder("extra large" ,"no , toppings",));
