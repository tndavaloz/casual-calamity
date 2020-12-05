const json = require('./data.json');

const isUnique = (string) => {
  // instantiate a map - we'll use this to keep track of unique chars
  const charMap = new Map();

  // Iterate through each character in our string
  for (const char of string) {
    // if we've found an existing entry in our map, early return false, as we don't have all unique chars
    if (charMap.has(char)) {
      // log is just for visualization
      logHelper(string, false, {
        duplicateChar: { "duplicate": char },
        string: { "duplicate": string },
      });

      return false;
    }

    // add our char to our map
    charMap.set(char, true);
  }

  // If we've gotten this far, we haven't found a duplicate entry, so we have all unique values
  logHelper(string, true, { isUnique: { "unique": string } });
  return true;
}

// this is just to help visualize and separate this logic from the business logic
const logHelper = (string, isUnique, tableData) => {
  console.log('\n');
  console.log('\x1b[31m%s\x1b[0m', `'${string}'`);
  console.log(
    isUnique
      ? 'contains only unique chars'
      : 'does not contain only unique chars'
  );
  console.table(tableData);
}

isUnique(json.unique_string); // true
isUnique(json.duplicates_string); // false
