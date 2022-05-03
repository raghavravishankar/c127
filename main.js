function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}