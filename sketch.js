let values = [];
let i = 0;
let w = 21;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(int(width/w));
  
  insertRect();  
  
  stroke(255, 255, 255);
  fill(200, 200, 200);
  frameRate(20);
}

function draw() {
  background(210, 230, 230);
  if (frameCount > 60) {
    
    if (i < values.length - 1) {
      
      for (let j = 0; j < values.length - i - 1; j++) {
        if (values[j].height > values[j + 1].height) {
          swap(values, j, j + 1);
        }
      }

    } else {
      console.log('finished');
      noLoop();
    }

    i++;
  }

  for (let show = 0; show < values.length; show++) {
    values[show].render(show);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function insertRect() {
  const hb3 = height/3;

  for (let ndx = 0; ndx < values.length; ndx++) {
  
    let col = "";
    const myRh = random(10,height);

    if (myRh < hb3) {
      col = "red";      
    }
    else if (myRh < 2*hb3) {
      col = "white";
    }
    else {
      col = "green";
    }
  
    values[ndx] = new MyRect(w, myRh, col);

  }
}