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
    objectname=document.getElementById("object_name").value;
}
function draw(){
    image(Video,0,0,300,300)
    if (status1 !="")
    {objectDetector.detect(Video,gotResult)
        R=random(255)
        G=random(255)
        B=random(255)
    for (var index = 0; index < objects.length; index++) {
        document.getElementById("status").innerHTML=" status:Object Detected"
        fill(R,G,B)
        percent= floor(objects[index].confidence*100)
        text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y)
        noFill()
        stroke(R,G,B)
        rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height)
        if (objects[index].label==objectname) {
           Video.stop()
           objectDetector.detect(Video,gotResult)
           document.getElementById("status").innerHTML=objectname+" found"
           synth=window.speechSynthesis;
           utter=new SpeechSynthesisUtterance(objectname+" found")
           synth.speak(utter)
        }
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
    objectname=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("model is loaded")
    status1=true;
    Video.loop()
    Video.speed(1)
    Video.volume(1)
}