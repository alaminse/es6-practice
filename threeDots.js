const age1 = [1,2,3];
const age2 = [4,5,6];
const age3 = [7,8,9];
const allAges = age1.concat(age2).concat(age3);
console.log(allAges)

const allAges1 = [...age1, ...age2, 5, ...age3];
console.log(allAges1)

const business = 500;
const minister = 400;
const sochib = 150;
const takaPoisa = [500, 400, 300,200];
const max = Math.max(...takaPoisa);
console.log(max)