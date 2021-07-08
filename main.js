//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
car_width=75;
car_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
car_x=5;
car_y=215;
//Set initial position for a car image.
function add() {
	background_img=new Image();
	background_img.onload=uploadBackground;
	background_img.src=background_image;

	car_img=new Image();
	car_img.onload=uploadgreencar;
	car_img.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_img,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_img,5,215,car_width,car_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
	car_y=car_y - 10;
	console.log("when up arrow is pressed, x="+car_x+"when up arrow is pressed, y="+car_y);
     uploadBackground();
	 uploadgreencar();
	}
}

function down()
{
if(car_y<=500){
	car_y=car_y + 10;
	console.log("when down arrow is pressed, x="+car_x+"when down arrow is pressed, y="+car_y);
	uploadBackground();
	uploadgreencar();
}
}

function left()
{
	//Define function to move the car left side
	if(car_y<=0){
		car_y=car_y - 10;
		console.log("when left arrow is pressed, x="+car_x+"when left arrow is pressed, y="+car_y)
		uploadBackground();
		uploadgreencar();
}

