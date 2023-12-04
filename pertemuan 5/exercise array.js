let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i <people.length; i++) {
    console.log(people[i]);
}

people.forEach(person => {
    console.log(person);
});

people.shift();
people.pop();
people.unshift("Matt");
people.push("Your Name");

for (let i = 0; i <people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}