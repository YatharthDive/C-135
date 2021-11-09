Video=""
status1=""
objects=[]
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
    if (status1 !="")
    {objectDetector.detect(Video,gotResult)
        R=random(255)
        G=random(255)
        B=random(255)
    for (var index = 0; index < objects.length; index++) {
        fill(R,G,B)
        percent= floor(objects[index].confidence*100)
        text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y)
        noFill()
        stroke(R,G,B)
        rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)
    }
    
    }
}
function gotResult(error,results){
    if (error){console.error(error)}
    else{
        console.log(results)
        objects=results;
    }
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