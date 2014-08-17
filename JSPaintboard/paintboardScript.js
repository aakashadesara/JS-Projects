//Sets initial color, thickness, and loads canvas. The entire program is run in canvas. 
//Using space to put down pen and click on the colors to change colors.
//Made by Aakash Adesara
	var color = "black";
	var thickness = 10;	
	window.onload = function() {

		var canvas = document.getElementById("canvas"),
			ctx  = canvas.getContext("2d"),
			W = window.innerWidth,
			H = window.innerHeight;

		canvas.width = W;
		canvas.height = H;

	/* Defining stroke variables */

	
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,W,H);


	var space = true;

	var key = function(e) {
    	return e ? e.which : event.keyCode;
	};

	document.onkeydown = function() {
		if (event.keyCode == 32 && space == true) {
	      space = false;
	      document.getElementById("spaceBox").style.opacity = 1;
	    } else {
	    	space = true;
	    	document.getElementById("spaceBox").style.opacity = .2;
	    }



	    if(event.keyCode == 187){
	    	thickness++;
	    }

	    if(event.keyCode == 189){
	    	thickness--;
	    }

	};

	/* Handle palet changes */



	//just change "mousedown" to "mousemove"
		
	canvas.addEventListener("mousemove", getPosition, false);

	function getPosition(event)
	{
	var x = event.x;
	var y = event.y;

	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;

	if(space == false){

		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(x,y,thickness,0,2*Math.PI);
		ctx.fill();
		}
	}
		
}

	function plus(){
		thickness++;
	}

	function minus(){
		thickness--;
	}

	function makeRed(){
		color="red";
	}

	function makeBlue(){
		color="blue";
	}

	function makeGreen(){
		color="green";
	}

	function makeYellow(){
		color="yellow";
	}

	function makePurple(){
		color="purple";
	}

	function makeOrange(){
		color="orange";
	}

	function makeBlack(){
		color="black";
	}

	function makeWhite(){
		color="white";
	}
