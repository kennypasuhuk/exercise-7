//::::::ARRAY EXERCISES:::::://
let people = ["Greg", "Mary", "Devon", "James"];

//1. For loop
for (let index = 0; index < people.length; index ++) {
    console.log(people[index]);
}

//2. For each
people.forEach(function (data) {
    console.log(data)
});

//3. Menghapus depan
let hapusGreg = people.shift();
console.log(people);

//4. Menghapus belakang
let hapusJames = people.pop();
console.log(people);

//5. Menambah elemen diawal
let tambahAwal = people.unshift("Matt");
console.log(people);

//6. Menambahkan elemen diakhir
let tambahAkhir = people.push("bob marley");
console.log(people);

//7. Stop ketika marry
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] === "Mary") {
        break; // Exit the loop when "Mary" is encountered
    }
}
console.log(people);

//8. Slice
let lengthPeople = people.length;

let slice = people.slice(2, lengthPeople);
console.log(slice);

//9. menambahkan eli arti
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10. concate
let withBob = ["Bob"];
let result = people.concat(withBob);
console.log(result);


//----------------------------//


//::::::OBJECT EXERCISES:::::://
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Adding 'GO' di languages
programming.languages.push("Go");
console.log(programming.languages);

//2. Change default
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3. delete
delete programming.jokes;
console.log(programming); 

//4. adding   key
programming.isFun = 'true';
console.log(programming);

//5. show index
programming.languages.map(function (value, index) {
    console.log(index + " - " + value);
});