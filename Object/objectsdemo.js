let x = {name: "Sanket", age: 24};

let y = {
    name : "Sarthak",
    age: 24,
    marks: 24
}

console.log(x["name"]);
console.log(y.name);

y.name = "Tanmay";
console.log(y);

x.mark = 100;
x["company"] = "Google";
console.log(x);

delete x.name;
console.log(x);