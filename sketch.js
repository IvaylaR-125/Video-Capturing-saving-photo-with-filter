var video;
var button;
var saveButton;
var filt;
var c;
var i = 1;

function setup() {
  c = createCanvas(320, 240);
  background(220);
  textAlign(CENTER);
  textSize(15);
  text('Your snap will be shown here!', 160, 120);
  
  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();
  
  filt = createSelect();
  filt.option('none');
  filt.option(THRESHOLD);
  filt.option(GRAY);
  filt.option(OPAQUE);
  filt.option(INVERT);
  filt.option(POSTERIZE);
  filt.option(DILATE);
  filt.option(BLUR);
  filt.option(ERODE);
  filt.option('red');
  filt.option('green');
  filt.option('blue');
  filt.option('pink');
  filt.option('yellow');
  
  button = createButton('snap');
  button.mousePressed(takesnap);
  
  saveButton = createButton('save');
  saveButton.mousePressed(saveIt);
}

function draw() {
  
}

function takesnap() {
  let item = filt.value();
  if(item == "none"){
    image(video, 0, 0);
  } else if(item == BLUR) {
    image(video, 0, 0);
    filter(item, 4);
  } else if(item == POSTERIZE) {
    image(video, 0, 0);
    filter(item, 5); 
  } else if(item == "red") {
    tint(255, 100, 100);
    image(video, 0, 0, 320, 240);
  } else if(item == "green") {
    tint(100, 255, 100);
    image(video, 0, 0, 320, 240);
  } else if(item == "blue") {
    tint(100, 100, 255);
    image(video, 0, 0, 320, 240);
  } else if(item == "pink") {
    tint(220, 20, 140);
    image(video, 0, 0, 320, 240);
  } else if(item == "yellow") {
    tint(220, 220, 10);
    image(video, 0, 0, 320, 240);
  } else {
    image(video, 0, 0);
    filter(item);
  }
  noTint();
}

function saveIt() {
  save(c, 'photoWithFilter(' + i + ')', 'png');
  i = i + 1;
}