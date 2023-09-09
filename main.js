music1="";
music2="";

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

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

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}