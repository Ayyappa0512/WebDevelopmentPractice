console.log("Hello node ");

// for each loop using in

let furits = ["Apple", "Orange", "Banana"];

console.log("for in loop for array");

for(const index in furits){
    console.log(index,furits[index]);
}

// for the object

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log("for in loop for object");
for(const key in car){
    console.log(`key is ${key} and value is ${car[key]}`);
};


// for of loop

console.log("for of loop for array");

for(const fruit of furits){
    console.log(fruit);
};

console.log("for of loop for object");

for(const item of Object.keys(car)){
    console.log(item, car[item]);
};


