const json = require('./data.json');

const checkPermutation = (stringA, stringB) => {
  // normalize our inputs and split them into a sorted array
  // normalizing our data:
  // - confirm the chars in our string are al the same case
  // - split the individuals chars into an array
  // - sort the array
  const sortedA = stringA.toLowerCase().split('').sort().join('');
  const sortedB = stringB.toLowerCase().split('').sort().join('');

  // simple log statement
  logHelper(stringA, stringB, sortedA === sortedB);

  return sortedA === sortedB;
}

// this is just to help visualize and separate this logic from the business logic
const logHelper = (stringA, stringB, isPermutation) => {
  const msg = isPermutation ? 'are' : 'are not';
  console.log('\n');
  console.log('\x1b[31m%s\x1b[0m', `${stringA} and ${stringB} ${msg} permutations of one another`);
}

// Run our algorithms
const [a, b] = json.is_permutation;
const [c, d] = json.not_permutation;

console.log(checkPermutation(a, b));
console.log(checkPermutation(c, d));