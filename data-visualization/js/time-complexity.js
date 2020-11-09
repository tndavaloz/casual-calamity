// helper that generates a random array of integers at a given length
const randomArray = (length) =>
  [...new Array(length)].map(() => Math.round(Math.random() * 5000));

// helper that swaps indices of a given array
const swapValues = (arr, indexOne, indexTwo) => {
  const temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}


console.log("\x1b[34m");
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
console.log("┃                                O(1) Time                                     ┃");
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
console.log("\x1b[0m");

/**
 * Constant Complexity: O(1)
 * 
 * Doesn't matter if arr is length of 10,000 or 5, it will perform
 * the exact same way every time, independent of data set
 */
const addToArray = (arrSize, number) => {
  let arr = randomArray(arrSize, number);
  const start = Date.now();
  arr.push(number);
  
  const end = Date.now();
  console.log(`${number} added to the end of the array`);
  console.log("Addition execution time took: " + (end - start) + "ms");
}

addToArray(100, 16);
addToArray(10000, 456);



console.log("\x1b[34m");
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
console.log("┃                                O(N) Time                                     ┃");
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
console.log("\x1b[0m");

/**
 * Linear Complexity: O(N)
 * 
 * Time to complete grows in direct proportion to the amount of data.
 * An example would be linear search below:
 */
const linearSearch = (arrSize, value) => {
  let arr = randomArray(arrSize);
  let valueFound = false;
  const start = Date.now();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      valueFound = true;
    }
  }

  valueFound ? console.log(`Found value ${value}`) : console.log(`Value ${value} not found`);

  const end = Date.now();
  console.log("Linear Search execution time took: " + (end - start) + "ms");
}

linearSearch(100000, 14);
linearSearch(1000000, 432);



console.log("\x1b[34m");
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
console.log("┃                               O(N^2) Time                                    ┃");
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
console.log("\x1b[0m");

/**
 * Quadradic Complexity: O(N^2)
 * 
 * Time to complete will be proportional to the square of the amount of data
 * 
 * An example would be the bubble sort, or (typically) any other algorithm
 * that has nested iterations. Each pass through the outer loop requires us
 * to go through the entire list again, so N multiplies against itself for
 * every nested iteration.
 * 
 * As O(N^2) is very inefficient, it should be avoided where possible.
 */
const bubbleSort = (arrSize) => {
  let arr = randomArray(arrSize);
  const start = Date.now();

  for (let i = arr.length - 1; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapValues(arr, j, j + 1);
      }
    }
  }

  const end = Date.now();
  console.log("Bubble Sort execution time took: " + (end - start) + "ms");
};

bubbleSort(10000);
bubbleSort(20000);



console.log("\x1b[34m");
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
console.log("┃                               O(log N) Time                                  ┃");
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
console.log("\x1b[0m");

/**
 * Logarithmic Complexity: O(log N)
 * 
 * Occurs when data being used is decreased by ~50% each time through an
 * iteration. These algorithms are efficient due to the fact that increasing
 * the amount of data has little to no effect in it's overall performance,
 * since the data is halved each time.
 * 
 * An example would be a binary search. Problem with a binary search is that
 * it requires a sorted array to work effectively.
 */
const binarySearch = (arrSize, target) => {
  // setup and sort our random array
  let array = randomArray(arrSize);
  array.sort((a, b) => a - b);

  let timesThrough = 0;
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    // Compare the middle index with our target value for a match
    if (target === array[middleIndex]) {
      const end = Date.now();
      console.log("\x1b[32m");
      console.log(`Value ${target} was found at index ${middleIndex} and iterated through Binary Search ${timesThrough} times.`);
      console.log("\x1b[0m");

      return; // break the loop because we've found our match
    }

    // Search the right side of the array
    if (target > array[middleIndex]) {
      // we effectively discard any index that is greater than the middle index and continue the search
      console.log("Searching the right side of Array");
      startIndex = middleIndex + 1;
    }

    // search the left side of the array
    if (target < array[middleIndex]) {
      // we effectively discard any index that is less than the middle index and continue the search
      console.log("Searching the left side of array");
      endIndex = middleIndex - 1;
    } else {
      // iterate through again
      console.log("Not Found this loop iteration. Looping another iteration.");
      timesThrough++;
    }
  }
  
  console.log("Target value not found in array");
}

binarySearch(100000, Math.round(Math.random() * 5000));
binarySearch(500000, Math.round(Math.random() * 5000));



console.log("\x1b[34m");
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
console.log("┃                              O(N log N) Time                                 ┃");
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");
console.log("\x1b[0m");

/**
 * Linearithmic Complexity: O(N log N)
 * 
 * Most sorts are at least O(N) because every element must be evaluated at least once. A
 * quick sort will move values very efficiently, without shifting. Essentially, values
 * are compared only once, meaning that each comparison will reduce the possible final
 * sorted list in half.
 * 
 * Comparisons = log n! (Factorial of n)
 * Comparisons = log n + log(n - 1) + ... + log(1) // log n being the greatest value when performing factorial
 * 
 * An example would be a quick sort.
 */
const quickSort = (items, left, right) => {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition

    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      // more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }

  return items;
}

const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)]; // middle element
  let leftPointer = left;
  let rightPointer = right;

  while (leftPointer <= rightPointer) {
    while (items[leftPointer] < pivot) {
      leftPointer++;
    }
    while (items[rightPointer] > pivot) {
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      swapValues(items, leftPointer, rightPointer); // swap two elements
      leftPointer++;
      rightPointer--;
    }
  }

  return leftPointer;
}

// setup arrays to be sorted and call quick sort
let arr = randomArray(10);
let bigArr = randomArray(1000);
console.log(quickSort(arr, 0, arr.length - 1));
console.log(quickSort(bigArr, 0, bigArr.length - 1));

// this is me messing around with JS being wild

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // returns the first element in the array as the pivot
//   const [pivot, ...rest] = arr;

//   const left = [], right = [];
//   rest.forEach(el => el < pivot ? left.push(el) : right.push(el));

//   return [
//     ...quickSort(left),
//     pivot,
//     ...quickSort(right)
//   ];
// }
