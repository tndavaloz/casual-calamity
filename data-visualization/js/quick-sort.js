let values = [];
let w = 2;

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = await partition(arr, start, end);

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end),
  ]);
}

async function partition(arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  await swap(arr, pivotIndex, end);

  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * This is a dumb little helper that slows down the visualization
 * in the graphing tool we are using. Normally, we wouldn't want to
 * slow down the algorithm.
 * 
 * @param {number} ms 
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Graphing / visualization:
 * Width / height are values exposed from the createCanvas fn.
 * That is to say, the canvas is 700px wide by 400px tall
 */
function setup() {
  createElement("h2", "Quick Sort Visualization");
  createCanvas(700, 400);

  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }

  quickSort(values, 0, values.length - 1);
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    fill(255);
    rect(i * w, height - values[i], w, values[i]);
  }
}
