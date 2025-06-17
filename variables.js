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


