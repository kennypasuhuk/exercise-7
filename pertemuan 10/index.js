//

//rest parameter
//tanpa rest params
// const penjumlahanArray = (a, b, c, ...params)=> {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1, 2, 3, 4, 5, 6, 7);


////spread operator
// let array1 = [1, 2, 3, 4, 5];
// console.log(...array1);

////1. duplikasi array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log(array2);

////2. menggabungkan array
// let array1 = [1,2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, 4,...array2, ...array3];
// console.log(combineArray6);



//pada objek
// let john = {
//     fullName : "John Doe",
//     age : 30,
    

// }


//destructuring
// let buah = [mangga, anggur, pisang];
// let [buah1, buah2, buah3] = buah;
// console.log(buah);