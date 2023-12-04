//::::::OBJECT EXERCISE:::::://
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1 - Adding 'GO' di languages
programming.languages.push("Go");
console.log(programming.languages);

//2 - Change default
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3 - delete
delete programming.jokes;
console.log(programming); 

//4 - adding   key
programming.isFun = 'true';
console.log(programming);

//5 - show index
programming.languages.map(function (value, index) {
    console.log(index + " - " + value);
});