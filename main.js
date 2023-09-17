music1="";
music2="";


function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}


rightWristX= 0;
rightWristY= 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +  leftWristX + "leftWristY = " + leftWristY);
    }

}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    music1.play();
    music1.setVolume(1);
    music1.rate(1);
    music2.play();
    music2.setVolume(1);
    music2.rate(1);
}