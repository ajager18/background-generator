var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var rand = document.getElementById("random");


function setGradient (){
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


function random (){
	// color1.value = Math.floor(Math.random()*256);
	
	body.style.background = 
	"linear-gradient(to right, rgb(255,255,0), rgb (255,0,0));"
	
}


css.textContent = "linear-gradient(to right, rgb(255, 0, 0), " + 
"rgb(255, 255, 0)); "

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
rand.addEventListener("click",random);

