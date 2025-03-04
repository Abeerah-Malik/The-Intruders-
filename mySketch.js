var commercial;  //variables for fonts
var stencil;

var textbox;     //to contain the text 

var grdsize;     //size of gride
var csize;       //size of circles
var space;       //space between circles

var clusterblock;  //variable for positions of orange filled circles   


var xoffset;    //initial x and y positions of grid
var yoffset;

var refresh;    //button to refresh the design

var bg = '#151a54';  //vraiable for backgrond color
var clpurple = '#743796';  //color purple
var clorange = '#ff3535';  //color orange
 



function preload() {
	//load the fonts into files and define variables
	commercial = loadFont('commercial.ttf');
	stencil = loadFont ('stencil.TTF');
}




function setup() {
	createCanvas(385, 600);
	background(255);
	noStroke();

	textbox = 30;  //value for text box
	
	grdsize = 15;     //grid to contain circles
	xoffset = 0;      //initial xpos and ypos of grid
	yoffset = 220;    //offset of other circle lines
  csize = 30;       //circle size
	space = 35;       //space between circles
	
	//poistions of the orange circles
	clusterblock = [
	[0, 0],  // Center
  [0, -1], // Directly above
  [1, -1], // Top-right
  [1, 0],  // Bottom-right
  [0, 1],  // Bottom-left
  [-1, 0], // Top-left
	[-1,-1]
		]
	
	noLoop();      //disable loop	
	
	//refresh button
	refresh = createButton('Refresh');
	refresh.position(0,0);
	refresh.mousePressed(refreshPressed);

}




function draw() {	
background(bg);
	
//add all the text
textAlign(LEFT);                       	//align the text to left
fill(clorange);                         //color of text
textFont(stencil);                      //font assign
textLeading(35);                        //space between words
textSize(42);				                    //text size
text('The Intruders', 10, 60, textbox);	  //text and xpos & ypos
	
textAlign(LEFT); 	
fill(clpurple);
textFont(commercial);
textSize(18);				  
text('A Novel by', 10, 125);	
	
textAlign(LEFT); 	
fill(clorange);
textFont(commercial);
textSize(25);				  
text('Vivian Pines', 10, 155 );	
	
//call functions
randomizeclusterPosition();
drawcircles();	
	
}



function drawcircles() {
	//draw circles within grid, with every alternate line being offset from initial position
	for (var a = 0; a < grdsize; a = a + 1){
		var offset = (a % 2 === 0) ? 0 : space / 2;

	for (var b = 0; b < grdsize; b = b + 1){
		var x = b * space + offset + xoffset;
		var y = a * space + yoffset;
		//fill(clpurple);
   //fill the circles with either purple or orange
		if(theclusterPosition(a, b)) {
			fill(clorange);  
      } else {
        fill(clpurple);  
		}
		//ellipse command
		ellipse(x, y, csize, csize);
	}
	}
}



function theclusterPosition(row, col) {
	//make cluster of of circles
  for (var pos of clusterblock) {
    var clusterRow = clusterPosition[0] + pos[0];
    var clusterCol = clusterPosition[1] + pos[1];
    if (row === clusterRow && col === clusterCol) {
      return true;
    }
  }
  return false;
}



function randomizeclusterPosition() {
  let maxr = 10; // To keep the cluster within bounds
  let maxc = 10;
//randomize the position of orange cluster
  let randomRow = floor(random(0, maxr));
  let randomCol = floor(random(1, maxc)); 

  clusterPosition = [randomRow, randomCol];
}


function refreshPressed() {
	//function linked to button
	draw();
}

function keyPressed() {
	//save variations
	if( key == 's' || key == 'S'){
		saveCanvas('Ábeerah_Malik_Week8_Assignment.jpg');
		
	}
	
}



