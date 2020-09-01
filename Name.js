//Not in use currently
var bg ;
var canvas;
var displayname;
var command;
var next;
var sound;

//var gameState = "form";
function preload(){
    bg = loadImage("image.jpg");
    
}
function setup (){
canvas = createCanvas(displayWidth,displayHeight);
displayname = createInput('');
command = createElement('h4');
next = createButton(  'Next' );

}
function draw(){
background(bg);

fill("brown")
displayname.position(displayWidth/2-195,displayHeight/2);
displayname.show();
command.html('Please enter your display name')
command.position(displayWidth/2-215,displayHeight/2-50);
//next.positon(400,400);
next.position(700,500);
rect(545,displayHeight/2-50,220,160);
next.mousePressed(()=>{
   
    if(displayname.value()!== null && displayname.value() !== ""){
        displayname.value() = displayname3;
        window.location.href= "index2.html";
   }else{
     alert("Kindly enter the display name to continue");
   }
})

}