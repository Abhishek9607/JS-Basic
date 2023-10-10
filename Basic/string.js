console.log("abc" == "abc");
let x = "abc"; // string literal
let y = "abc";
console.log(x == y);

let z= String("abc");
let a = new String("abc"); //string object
console.log(z);

console.log(typeof z);
console.log(typeof a);
console.log(typeof y);
console.log(a === z);
console.log(a === x);
console.log(z === x);
console.log("abc" == new String("abc"));
