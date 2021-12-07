function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY="+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;

        console.log("leftWristX=" + leftWristX + "rightWristX= "+rightWristX +"difference="+difference);
    }
}
function modelLoaded(){
    console.log('Posenet Is Initialized!');
}
function draw(){
    background('#72a66d');

    document.getElementById('sqaure_side').innerHTML="Width And Height of a Square will be="+difference+"px"
    fill('#6956bf');
    stroke('#424fa1');
    square(noseX, noseY, difference);
}

noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
