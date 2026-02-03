//1. var: old way of declaring the variable
// ES6
//Scope: var
//functionally/locally + global Scope
var x = 10;
function test() {
    var y = 20;
}
console.log(x);

var pop = "hi js";
function rel() {
    var top = "hello js";
    console.log(top);
}
rel();
//console.log(top);
console.log(pop);

var browser = "chrome";
var browser = "firefox";
browser = "edge";
console.log(browser);

/////
var g;
console.log(g); //undefined
g = "hello world";
console.log(g);

//issue with var;
var flag = "hey Nahida";
var t1 = 4;
if(t1 > 3){
    var flag = "hey tom";
}
console.log(flag);

//let
//scope: block scoped
//{}
let m = "hey Nahida";
let time = 4;
if(time > 3){
    let msg = " hey hw r u?";
    console.log(msg);
}
//console.log(msg);
console.log(m);

//
//var len = 6;
//let len = 4;
let len = 5;
len = 7;
console.log(len);

//const:
const mg = " hey Nahida";
//mg = "hey tom";
console.log(mg);

const days = 7;
//days = 10;
console.log(100 * days);

var p;
console.log(p);

let p;
console.log(p);

//const p;
console.log(p);


let age = 30;
let name = 'Nahida';
let isTester = false;
let salary;
let city = 'Null';

console.log(typeof age);
console.log(typeof name);
console.log(typeof isTester);
console.log(salary);
console.log(city);





