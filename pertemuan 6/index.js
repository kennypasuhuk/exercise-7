// // string literal
// //---------------

// let fullName = 'John Doe';
// let age = 33;
// let address = "Manado";

// console.log(fullName);
// console.log(age);
// console.log(address);

// let kalimat5 = "Halo nama saya, " +
//  fullName +
//   " umur saya " + 
//  age +
//   " tahun, dan saya tinggal " + 
//  address;

// console.log(kalimat5);

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`;
// console.log(kalimat6);



//arrow function
//--------------

// function sayGreetings5(name) {
//     return `Hello ${name}`;
// };
// console.log(sayGreetings5("John"));

// const sayGreetings6 = (name) => {
//     return `Hello ${name}`;
// };
// console.log(sayGreetings6("John"));


//implicit return value

// const sayGreetings6 = (name) => `Hello ${name}`;
// console.log(sayGreetings6("John"));

// //pada IIFE
// let output1 = (() =>`Hello`)();

//pada callback
let numbers =[1, 2, 3, 4,5];
let output2 = numbers.map((item) => item);

//deaf
const sayGreetings5 = (fullName, age) => {
    if (fullName === undefined){
        fullName = "John Doe";
    }
    if (age === undefined){
        age = 33;
    }
    console.log(`Hello ${fullName}`);
};

sayGreetings5();

const sayGreetings6 = (fullName = "John Doe", age =  33);
console.log (`Hello ${fullName}`);
console.log (`umur ${age} tahun`);
