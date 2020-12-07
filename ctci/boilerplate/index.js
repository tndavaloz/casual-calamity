const json = require('./data.json');

const fnDeclaration = () => {
  console.log('initialized');

  // ...
  return;
}

isUnique(fnDeclaration); // true
isUnique(fnDeclaration); // false
