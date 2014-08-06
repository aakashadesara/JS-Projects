
window.onload=function(){

	var canvas = document.getElementById("c"),
		ctx = canvas.getContext("2d"),
		W = window.innerWidth,
		H = window.innerHeight;

	var spacing = 10;
	var amountBlocks = W / spacing;
	var blockWidth = 3;
	var blockHeight = 3;


	canvas.width = W;
	canvas.height = H;

	ctx.fillStyle = "black";
	ctx.fillRect(0,0,W,H);


	ctx.fillStyle = "blue";
	ctx.fillRect(0, H/2, W, 1);


	ctx.fillStyle = "yellow";


	var counter = 0;
	var sentinal = 40;
	var changeChooser = true;


	/* VARIABLES FOR THE CURVE */
	var amplitude = 0;
	var horizontal = 0;
	var vertical = 0;
	var point_manil = 0;

	var changeOrNot = true;

	var curveSetter;


	var button = document.getElementById("enterButton");

	button.onclick = function(){
		
		amplitude = document.getElementById("amplitude").value;

		createCurve(amplitude);
			
	}


	var cool = vertical;

	createCurve(0);


	function createCurve(ampl){

		ctx.fillStyle = "black";
		ctx.fillRect(0,0,W,H);


		ctx.fillStyle = "blue";
		ctx.fillRect(0, H/2, W, 1);

		ctx.fillStyle = "yellow";
		


		for(var i = 0; i < amountBlocks; i++){
			ctx.fillRect(i * spacing, H/2 + ampl * Math.sin(i), blockWidth, blockHeight);
		}



		counter++;

		if(counter % sentinal == 0 && changeChooser == false){
			changeChooser = true;
		} else if (counter % sentinal == 0 && changeChooser == true){
			changeChooser = false;
		}

		if(changeChooser){
			amplitude+=1;
		} else {
			amplitude-=1;
		}

	}



};



