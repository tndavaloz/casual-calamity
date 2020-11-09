let values = [];
let i = 0;
let j = 0;

/**
 * Width / height are values exposed from the createCanvas fn.
 * That is to say, the canvas is 700px wide by 400px tall
 */
function setup() {
  createElement("h2", "Bubble Sort Visualization");
  createCanvas(700, 400);
  values = new Array(width);

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(0);

  // this is the heart of the bubble sorting algorithm
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }

  i++;

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
