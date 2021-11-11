// let num = Math.floor(Math.random() * 100);
// if (num / 2) {
//   console.log(num);
//   console.log("even");
// }

// let inputThings = prompt("input things");
// console.log(inputThings);

// const age = prompt("Your age");
// let numberAge = parseInt(age);

// if (numberAge < 18) {
//   console.log("you are a child and pay $10");
// } else if (numberAge < 65) {
//   console.log("you are a adult and pay $20");
// } else if (numberAge >= 65) {
//   console.log("you are a senior and pay $15");
// }

// const passWord = prompt("enter password");

// if (passWord.length > 7) {
//   if (passWord.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.log("password contain space");
//   }
// } else {
//   console.log("Must have more than 7");
// }

// const passWord = prompt("enter password");

// if (passWord.length > 7 && passWord.indexOf(" ") === -1) {
//   console.log("Valid password");
// } else {
//   console.log("Invalid password");
// }

// const num = 102;
// if (num <= 100) {
//   if (num >= 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 2 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }

const age = parseInt(prompt("enter age"));
if (age <= 5 || age >= 65) {
  console.log("its free");
} else if (age <= 18) {
  console.log("you a an child and pay 10");
} else if (age > 18) {
  console.log("you a an adult and pay 20");
}
