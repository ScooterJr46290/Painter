let tc1 = 255;
let tc2 = 255;
let sc1 = 0;

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(255);
  input = createFileInput(handleFile);
  input.position(150,20);
  slider = createSlider(1, 255, 30);
  slider.position(10,20);
  slider.style('100px', '80px');
  colorPicker = createColorPicker('#000000');
  colorPicker.position(140,45);
  colorPicker.size(42,20);
  fs = createButton('Toggle Full Screen');
  fs.position(10,45);
  fs.mousePressed(full);
  tb = createButton('Type');
  tb.position(195,45);
  tb.mousePressed(tt);
}

function draw() {
  size = slider.value();
  drawingColor = colorPicker.color();
  
  if(key === '1') {
    sc1 = colorPicker.color();
  }
  
  //toolbox
  fill(255)
  strokeWeight(0.05)
  rect(0,0,windowWidth,73);
  
  //text
  fill(50)
  noStroke()
  textSize(15)
  text('Brush Size',10,18)
  text('Saved Colors',420,18);

  //savedColors
  fill(255)
  strokeWeight(1)
  stroke(140)
  rect(420,20,165,45);
  
  stroke(10)
  fill(sc1)
  rect(425,25,15,15)
  rect(445,25,15,15)
  rect(465,25,15,15)
  rect(485,25,15,15)
  rect(505,25,15,15)
  rect(525,25,15,15)
  rect(545,25,15,15)
  rect(565,25,15,15)
  rect(425,45,15,15)
  rect(445,45,15,15)
  rect(465,45,15,15)
  rect(485,45,15,15)
  rect(505,45,15,15)
  rect(525,45,15,15)
  rect(545,45,15,15)
  rect(565,45,15,15);
  
  //typetool
  fill(tc1,tc2,255)
  rect(193,43,49,25);
  if (tc1 === 0) {
    if (mouseIsPressed)
      t = createInput('')
      t.position(mouseX,mouseY)
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
  } else {
    img = null;
  }
  if (img) {
    image(img, 0, 0, 1920, 1080);
  }
}

function full() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function mouseDragged() {
  fill(drawingColor);
  noStroke();
  circle(mouseX,mouseY,size);
}

function tt() {
  if (tc1 === 255) {
    tc1 = 0
    tc2 = 0
  } else{tc1 = 255; tc2 = 255;}
}