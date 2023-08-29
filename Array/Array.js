//array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["saktimaan", "nagraj"];
const Myarr2 =  new Array(1, 2, 3, 4);

//Array Method

// myArr.push(7);// value add

// myArr.pop(); // decrease last value

// myArr.unshift(9);
//  myArr.shift();

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(4)); 

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice vs splice

console.log("A", myArr);
const myn1 = myArr.slice(1,4);
console.log(myn1)

console.log("B", myArr);

const myn2 = myArr.splice(1, 4);
console.log("C", myArr);
console.log(myn2);
