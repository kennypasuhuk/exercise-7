Object
let john = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  isMarried: true,
  grade: [80, 90, 100],
  address: {
    city: "Manado",
    province: "Sulawesi Utara",
    postalCode: "95371",
  },
  sayGreetings: function () {
    console.log("Helo my name is " + this.firstName);
  },
};