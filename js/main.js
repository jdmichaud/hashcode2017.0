const hashcode = require('./hashcode');
const optimize = require('./optimize');

const setup = hashcode.loadFile(process.argv[2]);
// console.log(setup);
const smallSlices = optimize.optimize(setup.pizza, setup.parameters, optimize.smallSliceGenerator);
const smallSlicesScore = hashcode.score(smallSlices);
console.log('small slices score:', smallSlicesScore);
const bigSlices = optimize.optimize(setup.pizza, setup.parameters, optimize.bigSliceGenerator);
const bigSlicesScore = hashcode.score(bigSlices);
console.log('big slices score:', bigSlicesScore);
let bestSlices = bigSlices;
if (smallSlicesScore > bigSlicesScore) {
  bestSlices = smallSlices;
}
// console.log(slices);
console.log('--------- BEGIN -----------');
console.log(hashcode.saveResult(bestSlices));
console.log('---------- END ------------');
