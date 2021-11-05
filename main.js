Video=""
status1=""
function preload(){
    Video=createVideo("video.mp4")
    Video.hide()
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
}
function draw(){
    image(Video,0,0,300,300)
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}
function modelLoaded(){
    console.log("model is loaded")
    status1=true;
    Video.loop()
    Video.speed(1)
    Video.volume(0)
}