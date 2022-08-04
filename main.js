noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;


function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Pose net is good to go');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY =" + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        difference = floor(leftWrist - rightWrist);

        console.log("leftwrist =" + leftWrist + 'rightwrits ='+ rightWrist + "difference =" + difference );
    }}
        function draw(){
            background('#969A97');
            document.getElementById("square_side").innerHTML = "width and height of the font size of the text will be = " + difference + "px";
            fill('#F90093');
            stroke('#F90093');
            textSize(difference);
            text("AKSHAT IS THE BEST", noseX, noseY);
         }