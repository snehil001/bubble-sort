class MyRect {

  constructor(w, h, col) {
    this.ypos = height;
    this.width = w;
    this.height = h;
    this.color = col;
  }

  render (xpos) {
    if (this.color == "red") {
      stroke(210, 230, 230);
      fill(255, 103, 31);
    }
    else if (this.color == "white") {
      stroke(6, 3, 141);
      fill(255);
    }
    else if (this.color == "green") {
      stroke(210, 230, 230);
      fill(4, 106, 56);
    }
    rect(xpos*this.width, this.ypos, this.width, -this.height);
  }
}