function preload()
{
    
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{

}