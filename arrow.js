//Normal function 
// function doubleIt(num){
//     return num*2;
// }
//const result = doubleIt(2);

//Variable function
// const double = function(num){
//     return num*2;
// }
// const result = double(2);
// console.log(result)
// const double = function doubleIt(num){
//     return num*2;
// }
// const result = double(2);
// console.log(result)

//ES15 arrow function single value
/*const double = num=> num*2;
const result = double(4);
console.log(result)*/

// ES15 arrow function multiple value
// const sum = (num1, num2) => num1 + num2;

// const result = sum(10, 11);
// console.log(result)

// ES15 arrow function multiple value and more complex function

const math = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    return mult;
}
const result = math(5,2);
console.log(result)