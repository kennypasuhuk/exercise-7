////1. Destructuring (Array & Object)

////Destructuring Array:

// const colors = ['red', 'green', 'blue'];
// const [firstColors, secondColors, thirdColors] = colors;

// console.log(firstColors); 
// console.log(secondColors);   
// console.log(thirdColors); 

////Destructuring Object:

// const person = { name : 'John', age: 30, work: 'insinyur' };
// const { name , age, work } = person;

// console.log(name);       
// console.log(age);      
// console.log(work);



//----------------------//



////2. Destructuring dengan mengambil sebagian item (Array & Object)

////Destructuring Array:

// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, , thirdNumber] = numbers;

// console.log(firstNumber);
// console.log(thirdNumber); 


////Destructuring Object:

// const person = { name: 'Kim', age: 20, work: 'student' };
// const { name, work } = person;

// console.log(name);      
// console.log(work);  



//-----------------------//



////3. Destructuring dengan menggunakan default value (Array & Object)

////Destructuring Array:

// const fruits = ['manggo', 'lemon'];
// const [firstFruits, secondFruits, thirdFruits = 'apple'] = fruits;

// console.log(firstFruits); 
// console.log(secondFruits);   
// console.log(thirdFruits); 

// //Destructuring Object:

// const person = { name: 'Nikol', age: 20 };
// const { name, work = 'student' } = person;

// console.log(name);       
// console.log(work);  



//-----------------------//



////4. Destructuring dengan menggunakan rest operator (Array & Object)

////Destructuring Array:

// const numbers = [1, 2, 3, 4, 5];
// const [firstNumbers, secondNumbers, ...otherNumbers] = numbers;

// console.log(firstNumbers);    
// console.log(secondNumbers);      
// console.log(otherNumbers);   


////Destructuring Object:

// const person = { name: 'Dito', age: 20, work: 'student' };
// const { name, ...otherDetails } = person;

// console.log(name);            
// console.log(otherDetails); 

