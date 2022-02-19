music1 = "";
music2 = "";

function preload(){
    music1 = loadsound("music.mp3");
    music2 = loadsound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.hide();
}

function draw(){
    image(camera, 0, 0, 600, 600);
}