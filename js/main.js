const hashcode = require('./hashcode');
const optimize = require('./optimize');

const setup = hashcode.loadFile(process.argv[2]);
// console.log(setup);
const slices = optimize.optimize(setup.pizza, setup.parameters);
// console.log(slices);
console.log(hashcode.score(slices));
// console.log(hashcode.saveResult(slices));
