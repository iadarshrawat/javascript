// lets talk about loops
// basic for look
// syntax-> 

const { json } = require("stream/consumers");

// for(statement1, statement2, statement3){
//     statement in look 
// }

// quest 1 => print the table of 5
let a = 5;
for(let i=1; i<=10; i++){
    console.log(a,"*",i,"=",a*i);
}

// give the sum of the fist n integers
let n = 6;
var sum = 0;
for(let i=0; i<=n; i++){
    sum += i;
}
console.log("you sum is => ", sum);

// forIn loop in js
let ojb = {
    1:"adarsh",
    2:"rohan",
    3:"sohan"
}
for(a in ojb){ // here "a" is a key
    console.log(a);
}

// forOf loop in js
for(b of "hello"){ // here ojb is always iterable 
    console.log(b);
}