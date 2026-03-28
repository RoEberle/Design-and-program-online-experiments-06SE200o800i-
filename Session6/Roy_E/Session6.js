let globalVar = "I'm global!";
function scope() {
let localVar = "I'm local!";
console.log(localVar); // Accessible here
console.log(globalVar); // Accessible here
}
console.log(globalVar); // Accessible here
console.log(localVar); // Error:

scope()