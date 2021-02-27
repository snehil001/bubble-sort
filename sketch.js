let values = [];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let ndx = 0; ndx < values.length; ndx++) {
    values[ndx] = random(height);
  }
}

function draw() {
  background(0);
  if (i < values.length - 1) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(values, j, j + 1);
      }
    }

  } else {
    console.log('finished');
    noLoop();
  }

  i++;

  for (let show = 0; show < values.length; show++) {
    stroke(255, 255, 255);
    line(show, height, show, height - values[show]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}