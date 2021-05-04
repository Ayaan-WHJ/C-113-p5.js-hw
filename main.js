function preload()
{

}

function setup()
{
    canvas  = createCanvas(640,480);
    canvas.position(150,150);
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video,50,60,530,360);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    fill(0,0,255);
    stroke(0,0,255);
    rect(90,40,460,20);

    rect(90,40,460,20);
    fill(255,0,0);
    stroke(255,0,0);
    circle(580,50,80);
    
    fill(0,0,255);
    stroke(0,0,255);
    rect(570,90,20,350);

    fill(255,0,0);
    stroke(255,0,0);
    circle(580,430,80);

    fill(0,0,255);
    stroke(0,0,255);
    rect(80,420,460,20);  

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,420,80);

    fill(0,0,255);
    stroke(0,0,255);
    rect(40,90,20,290);
}





function take_snapshot()
{
 save('my_photo.png');
}