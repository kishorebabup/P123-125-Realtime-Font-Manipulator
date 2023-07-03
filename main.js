noseX = 0;
noseY = 0;
difference = 0;
right_wristX = 0;
left_wrtistX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('Orange');
    fill("red");
    stroke("black");
    textSize(difference);
    text('Opportunities do not happen, you create them.', noseX, noseY);

    document.getElementById("size_square").innerHTML = "The font size is " + difference + " px";
    
}

function modelLoaded(){
    console.log("Posenet is initialized");

}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        right_wristX = results[0].pose.rightWrist.x;
        left_wristX = results[0].pose.leftWrist.x; 
        difference = floor(left_wristX - right_wristX);
        
    }
}