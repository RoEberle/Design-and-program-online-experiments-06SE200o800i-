
/* let age = 18;

age = 10;

let ageGroup;
if (age < 18) {
ageGroup = 'Child';
} else {
ageGroup = 'Adult';
}
*/



/* let age = 18;

let ageGroup = age < 18? `Child` : `Adult`;

console.log(ageGroup)

*/

/*let reactionTime = 100;
switch (true) {
case reactionTime < 200 && reactionTime > 0:
console.log("Fast Response! Excellent!");
break;
case reactionTime <= 500 && reactionTime >= 200
:
console.log("Moderate Response! Keep it up!");
break;
case reactionTime > 500:
console.log("Slow Response. Try to improve!");
break;
default:
console.log("Invalid reaction time.");
}
*/

/*for (let i = 1; i <= 5; i++) {
// console.log(`Number: ${i}`);
console.log("Number:" ,i);
}
*/

/*const responseTimes = [350, 420, 510];
for (const time of responseTimes) {
console.log(`Response Time: ${time} ms`);
}
*/

/*
const trial = { id: 1, responseTime: 350, correct: true };
//console.log(trial.id);
//console.log(trial["id"]);// this is another way to get value of id
for (const key in trial) {
console.log(`${key}: ${trial[key]}`);
}
*/

let i = 0; // Initialize the counter
while (i < 5) {
console.log(`Number: ${i}`);
i++; // Increment the counter
}