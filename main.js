function preload()
{
    moustahce = loadImage('https://i.postimg.cc/CKDh7r3J/moustache.png')
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
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = ") + results[0].pose.nose.x;
        console.log("nose y = ") + results[0].pose.nose.y;
    }
}

function take_snapshot()
{
    save('moustache_filter_project.png')
}

noseX=0;
noseY=0;