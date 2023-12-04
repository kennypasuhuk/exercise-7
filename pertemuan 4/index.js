

//const age = 17; //global

//const greetings = function (name) {
//parameter
//console.log(age);
//  const job = "teacher"; //lokal
//if(job == "teacher" ){
//  const address = "manado"; //blok
//  }
//   console.log(address);
//return "Hello";
//};
//console.log(job);
//console.log(greetings("John")); //argument



//IIFE 
//Anonymous function


const output = (function () {
    //    console.log("hello IIFE");
    return "hello IIFE"
})();

console.log(output);


//callback function
function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callbakc(greetings);
}

createGreetings("john", function (greetings) {
    console.log(greetings);
});