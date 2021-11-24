console.log("pradeep");

const sum=(a,b)=>a+b;
console.log(sum(5,10));

const marks=[60,90,75,86];
console.log(Math.max(...marks));

//DOM- there is no DOM
// console.log(window);
//no - document, window

// console.log(global);

// process
const [ , ,first, second]=process.argv;

const inputValues=process.argv;
console.log(inputValues, inputValues[0]);
console.log(process.argv);
console.log(sum(+inputValues[2], +inputValues[3]));

