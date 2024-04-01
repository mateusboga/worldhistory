/* global $ */

/*
	V A R I A B L E S
*/

var PI = Math.PI;


var mouse = {x:100,y:100,time:0,cx:0,cy:0,lclick:false,mclick:false,rclick:false};
var cam = {x:0,y:0,x2:0,y2:0,s:10};
var now = new Date();
var hstart = -9999;

var events = [];
var spans = [];
var nations = [];

var measurex = null;
var measurex2 = null;

var select = null;

var nselect = null;

var loading = true;

$(document).ready(function(){
	res();
})

window.onload=function(){
	res(); loading = false;

	
	start();
	

	if(typeof(Storage) != "undefined") {
		

	} else {
		console.log("Could not load!");
	}

	
	
}

//SET RESOLUTION
function res(){
	C1.width = $(window).width();
	C1.height = $(window).height();
	ctx1.imageSmoothingEnabled = true;
	Cw = C1.width;
	Ch = C1.height;
}

//REFRESH FRAME
window.setInterval(function(){
	
	if(!loading)
	draw();

	if(mouse.lclick){
		mouse.time++
	}else{
		mouse.time = 0;
	}

	cam.x += (cam.x2-cam.x)/10;
	cam.y += (cam.y2-cam.y)/10;
	
	if( Cw != $(window).width()
	|| Ch != $(window).height() ){
		res();
	}

},1000/fps);

/*
	B A S E   F U N C T I O N S
*/

function start(){

	cam.x2 = now.getFullYear()+(now.getMonth()/12);
	cam.x = cam.x2;
	cam.y2 = -200;
	cam.s = 10;


}



/*
	C O N S T R U C T O R S
*/

function evnt(date,date2,type,y,name,desc,aprox){

	o = {

		date:date,
		date2:date2,
		type:type,
		name:name,
		desc:desc,
		a:aprox,
		y:y,

	}

	return o

}

function span(sdate,sdate2,edate,edate2,type,name,desc,y,sty,eny,obj){

	o2 = {
		start:new evnt(sdate,sdate2,type,name,desc),
		end:new evnt(edate,edate2,type,name,desc),
		type:type,
		name:name,
		desc:desc,
		y:y,
		y1:sty,
		y2:eny,
		obj:obj,
	}

	return o2;

}

/*
	C O N T R O L S   &   T E C H A N I C S
*/

function click(b){

	regclk = false;

	if(b == 2){

		cam.x += (mouse.cx-mouse.x)/cam.s; cam.y += (mouse.cy-mouse.y)
		
		if(cam.y > 50) cam.y = 50
		else if(cam.y < -500) cam.y = -500;
		
		if(cam.x > 500+now.getFullYear()) cam.x = 500+now.getFullYear()
		else if(cam.x < -500+hstart) cam.x = -500+hstart;

		cam.x2 = cam.x; cam.y2 = cam.y

	}else if(b == 1 && (Math.abs(mouse.x-mouse.cx)+Math.abs(mouse.y-mouse.cy)) > 10){

		measurex2 = absx(mouse.x);

	}else{

		regclk = true;
		measurex = null; measurex2 = null;

	}

	mouse.cx = mouse.x;
	mouse.cy = mouse.y;

	if(regclk){

		selected = false;

		for (let i = 0; i < events.length; i++) {
			const e = events[i];

			d1 = e.date+(Math.floor(e.date2)/13); y = rely(-80-(25*e.y))

			//if(e.a) d1 = e.date;

			if(d1 < 0) d1++

			if(dist(mouse.x,mouse.y,relx(d1),y) < 20){

				select = i;
				cam.x2 = d1;
				selected = true;
				break;
			}
	
	
		}

		if(!selected){

			if(nselect != null) nsl1 = nselect;
			else nsl1 = null;

			if(select != null) select = null
			else nselect = null

			
			 //nselect = null;

			bh = 15

			for (let i = 0; i < nations.length; i++) {
				const e = nations[i];

				hy1 = rely(-80-(25*(e.y)))
				if(e.y1 != null) hy2 = rely(-80-(25*(e.y1)))
				
				strty = e.start.date+(Math.floor(e.start.date2)/13);
				endy = e.end.date+(Math.floor(e.end.date2)/13);

				if(endy == 0) endy = now.getFullYear()+(now.getMonth()/12)

				if(nsl1){
					if(e.y < nations[nsl1].y){

						hy2 += nopw; hy1 += nopw;
	
					}else if(e.y > nations[nsl1].y){
						hy2 -= nopw; hy1 -= nopw;
					}
				}
				

				if(mouse.x > relx(strty) && mouse.x < relx(endy) && mouse.y > hy1-(bh/2) && mouse.y < hy1+(bh/2)){

					nselect = i;
					//if(nations[i].end.date != 0)
					//cam.x2 = (nations[i].start.date+nations[i].end.date)/2;
					//else cam.x2 = now.getFullYear();
					break;

				}

			}

			//if(url != null)
			//window.open(url, '_blank');
			

			//window.open(URL, '_blank');
		}

		

	}

	//console.log(o);
	
}


$('#C1').mousedown(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = true;
			mouse.cx = mouse.x;
			mouse.cy = mouse.y;
			measurex = absx(mouse.x);
			measurex2 = null;
			break;
		case 2: //Middle mouse button
			mouse.mclick = true;
			break;
		case 3: //Right mouse button
			mouse.rclick = true;
			mouse.cx = mouse.x;
			mouse.cy = mouse.y;
			break;
	}
});
$('#C1').mouseup(function(e) {
	switch (e.which) {
		case 1: //Left mouse button
			mouse.lclick = false;
			click(1);
			break;
		case 2: //Middle mouse button
			mouse.mclick = false;
			break;
		case 3: //Right mouse button
			mouse.rclick = false;
			click(2);
			break;
	}
});

//PRESSING A KEY
window.onkeydown = function (e){
	/*
	if(facNameWrite){
		if(e.key == "Backspace"){
			newfacName = newfacName.slice(0,newfacName.length-1);
		}else if(e.keyCode >= 65 && e.keyCode <= 90){
			newfacName = newfacName+e.key;
		}
	*/
	var k = e.keyCode ? e.keyCode : e.which;
	switch(k){
		case 16:
			break;
		default: console.log(k); break;
	}

	
}
//RELEASING A KEY
window.onkeyup = function (e){
	var k = e.keyCode ? e.keyCode : e.which;
		switch(k){

		}
}
window.oncontextmenu = function(){
	return false;
}
C1.addEventListener('mousemove', function(evt) {
		//When the mouse is moved
		var rekt = C1.getBoundingClientRect();
		mouse.x = evt.clientX - rekt.left;
		mouse.y = evt.clientY - rekt.top;
}, false);

$('#C1').bind('DOMMouseScroll', function(e){
	scroll(e.originalEvent.detail);

	//prevent page fom scrolling
	return false;
});

//IE, Opera, Safari
$('#C1').bind('mousewheel', function(e){
	scroll(e.originalEvent.wheelDelta);
	
	//prevent page fom scrolling
	return false;
});

function scroll( e ){
	if( true ){
		if(e < 0) {
				//scroll down
			cam.s=cam.s*0.75
			if(cam.s < 0.25) cam.s = 0.25;
		}else {
				//scroll up
			cam.s=cam.s*1.333333333333333333333;
			if(cam.s > 200) cam.s = 200
		}
	}
}

function isEven(n) {
	return n % 2 == 0;
}

function dist(x1,y1,x2,y2){

	var a = x1 - x2;
	var b = y1 - y2;

	return Math.sqrt( a*a + b*b );

}

//RANDOM NUMBER
function RandNum(m){
	x = Math.round(Math.random()*m);
	return x;
}
