function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',mL);
}
function mL() {
  console.log("Model Loaded!")
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video, gR);
}
function gR(error, results) {
  if (error) {
    console.error(error);
  }else{
    document.getElementById("Object").innerHTML = results[0].label;
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(2);
  }
}


