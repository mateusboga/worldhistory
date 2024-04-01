/*
	R E N D E R I N G
*/

var fps = 60;

var C1 = document.getElementById("C1");
var ctx1 = C1.getContext("2d");
Cw = 1000;
Ch = 1000;
ctx1.imageSmoothingEnabled = true;

var bgcol = "#ccc";
var measurecol = "#99a"

var curtype = "default";

var monthnshort = [
	"Jan.",
	"Feb.",
	"Mar.",
	"Apr.",
	"May",
	"Jun.",
	"Jul.",
	"Aug.",
	"Sep.",
	"Oct.",
	"Nov.",
	"Dec."
];

var spancols = [
	"#555",
	"#a50",
	"#269",
	"#182",
	"#933",
	"#a63",
]
var spancols2 = [
	"#444",
	"#d60",
	"#27b",
	"#182",
	"#c00",
	"#c90",
	"#929",
	"#2a2",
	"#229",
	"#972"
]
var warcol = "#933";

var tooltip = ""; var tooltipy = 0;

var nopw = 25; //Nation open width extra

var body = document.getElementsByTagName("BODY")[0];

function draw(){

	curtype = "default"; tooltip = "";

	if(mouse.rclick) curtype = "move";

	ctx1.clearRect(0,0,Cw,Ch);

	ctx1.fillStyle = bgcol;
	ctx1.fillRect(0,0,Cw,Ch);

	hovered = null;

	drawSpans();

	//ctx1.globalCompositeOperation = "multiply"
	drawNations();
	//ctx1.globalCompositeOperation = "source-over"

	if(nselect != null){

		drawSelectedNation()

	}

	drawEvents(events);

	drawTimeline();

	if(tooltip != "" && hovered == null){

		ttw = getWidthOfText(tooltip,"Bold 15px Arial");

		drawInfoBox()
	}

	body.style.cursor = curtype;
	
}

function drawInfoBox(){

	txtb = 4;

	ctx1.fillStyle = "#ddd";
	ctx1.fillRect(mouse.x-(ttw/2)-txtb,tooltipy+txtb,ttw+(txtb*2),-15-(txtb));
	ctx1.strokeStyle = "#000";
	ctx1.lineWidth = 1;
	ctx1.strokeRect(mouse.x-(ttw/2)-txtb,tooltipy+txtb,ttw+(txtb*2),-15-(txtb));

	ctx1.font = "Bold 15px Arial";
	ctx1.textAlign = "center";
	ctx1.fillStyle = "#000";
	ctx1.fillText(tooltip,mouse.x,tooltipy);

}

function drawInfoBox2(titl,txt,x1,y1){

	txtb = 10;

	ttw = getWidthOfText(titl,"Bold 20px Arial");

	for (let i = 0; i < txt.length; i++) {
		const e = txt[i];
		ttw1 = getWidthOfText(e,"15px Arial");
		if(ttw1 > ttw) ttw = ttw1;
	}
	
	lh = 17
	h = 20+(lh*txt.length);

	ctx1.fillStyle = "#ddd";
	ctx1.fillRect(x1-(ttw/2)-txtb,y1+txtb,ttw+(txtb*2),-h-(txtb*2));
	ctx1.strokeStyle = "#000";
	ctx1.lineWidth = 1;
	ctx1.beginPath();
	ctx1.roundRect(x1-(ttw/2)-txtb,y1+txtb,ttw+(txtb*2),-h-(txtb*2),[3]);
	ctx1.stroke();

	ctx1.font = "Bold 20px Arial";
	ctx1.textAlign = "center";
	ctx1.fillStyle = "#000";
	ctx1.fillText(titl,x1,y1-(h-20));

	ctx1.font = "15px Arial";
	for (let i = 0; i < txt.length; i++) {
		const e = txt[i];
		ctx1.fillText(e,x1,y1-(h-20-(lh*(i+1))));
	}
	

}

function drawEvents(evnts){

	ballw = 5;
	
	ctx1.lineWidth = 5; hy1 = 0;

	ctx1.strokeStyle = "#000";

	for (let i = 0; i < evnts.length; i++) {
		const e = evnts[i];

		bw = ballw; d1 = e.date+(Math.floor(e.date2)/13); y = rely(-80-(25*e.y))

		/*
		if(nselect != null){
			if(e.y < nations[nselect].y){
				y += nopw;
			}else if(e.y > nations[nselect].y){
				y -= nopw;
			}
		}*/
		

		if(d1 < 0) d1++;
		
		if(hovered == null && i != select){

			if(dist(mouse.x,mouse.y,relx(d1),y) < 20){

				bw = ballw*2;
				curtype = "pointer";

				hovered = evnts[i]; hy1 = y;

			}

		}else if(i == select){

			ctx1.lineWidth = 2; bw = ballw*2;

			ctx1.beginPath();
			ctx1.moveTo(relx(d1),y+bw);
			ctx1.lineTo(relx(d1),Ch);
			ctx1.moveTo(relx(d1),y-bw);
			ctx1.lineTo(relx(d1),0);
			ctx1.stroke();

			ctx1.lineWidth = 5;

			cury = e.date;
			if(cury > 0)
			date1 = Math.floor(cury) + " AD";
			else date1 = Math.abs(Math.floor(cury)) + " BC"

			if(e.a == 1) date1 = "~"+date1;

			ctx1.fillStyle = "#000";
			ctx1.font = "15px Arial";
			ctx1.textAlign = "center";
			if(e.date2 != 0)
			ctx1.fillText(((e.date2%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(e.date2)-1]+" "+date1,relx(d1),y-(bw*2));
			else ctx1.fillText(date1,relx(d1),y-(bw*2));

			ctx1.fillText(e.desc,relx(d1),y-(bw*4));

			ctx1.font = "Bold 15px Arial";
			ctx1.textAlign = "center";
			ctx1.fillText(e.name,relx(d1),y-(bw*6));
		}

		ctx1.beginPath();
		ctx1.arc(relx(d1),y,bw,0,PI*2);
		ctx1.stroke();

	}

	if(hovered != null){

		d1 = hovered.date+(Math.floor(hovered.date2)/13)

		if(d1 < 0) d1++;

		ctx1.fillStyle = "#000";
		ctx1.font = "15px Arial";
		ctx1.textAlign = "center";
		cury = hovered.date;
		if(cury > 0)
		date1 = Math.floor(cury) + " AD";
		else date1 = Math.abs(Math.floor(cury)) + " BC"

		if(hovered.a == 1) date1 = "~"+date1;

		if(hovered.date2 != 0)
		ctx1.fillText(((hovered.date2%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(hovered.date2)-1]+" "+date1,relx(d1),hy1-20);
		else ctx1.fillText(date1,relx(d1),hy1-20);

		ctx1.font = "Bold 15px Arial";
		ctx1.fillText(hovered.name,relx(d1),hy1-40);

	}

}

function drawNations(){

	bh = 15;

	//ctx1.globalAlpha = 0.5;
	for (let i = 0; i < nations.length; i++) {
		const e = nations[i];

		hy1 = rely(-80-(25*(e.y)))
		if(e.y1 != null) hy2 = rely(-80-(25*(e.y1)))
		if(e.y2 != null) hy3 = rely(-80-(25*(e.y2)))
		
		strty = e.start.date+(Math.floor(e.start.date2)/13);
		endy = e.end.date+(Math.floor(e.end.date2)/13);

		if(endy == 0) endy = now.getFullYear()+(now.getMonth()/12)

		if(nselect == i){



		}else{

			if(nselect == null){

				ctx1.strokeStyle = spancols2[e.type];
				ctx1.lineWidth = bh*1;
				ctx1.beginPath();
				if(e.y1 != null){
					ctx1.moveTo(relx(strty),hy2)
					if((endy-strty) > 6) curw = 3;
					else
					curw = (endy-strty)/10;
					ctx1.bezierCurveTo(relx(strty+curw),hy2,relx(strty+curw),hy1,relx(strty+curw+curw),hy1);
				}else{
					ctx1.moveTo(relx(strty),hy1)
					
				}
				if(e.y2 != null){
					if((endy-strty) > 6) curw = 3;
					else
					curw = (endy-strty)/10;
					ctx1.lineTo(relx(endy-curw-curw),hy1)
					ctx1.bezierCurveTo(relx(endy-curw),hy1,relx(endy-curw),hy3,relx(endy),hy3);
				}else{
					ctx1.lineTo(relx(endy),hy1);
					
				}
				ctx1.stroke();
				//ctx1.fillRect(relx(strty),hy1,(endy-strty)*cam.s,-bh);

				if(mouse.x > relx(strty) && mouse.x < relx(endy) && mouse.y > hy1-(bh/2) && mouse.y < hy1+(bh/2)){

					/*
					//ctx1.globalAlpha = 1;
					ctx1.font = "Bold 15px Arial";
					ctx1.textAlign = "center";
					ctx1.fillStyle = "#000";
					ctx1.fillText(e.name,mouse.x,hy1-(bh));*/

					tooltip = e.name;
					tooltipy = hy1-(bh)
					curtype = "pointer"
				}

			}else{

				if(e.y < nations[nselect].y){

					hy2 += nopw; hy1 += nopw; hy3 += nopw;

				}else if(e.y > nations[nselect].y){
					hy2 -= nopw; hy1 -= nopw; hy3 -= nopw;
				}

				ctx1.strokeStyle = spancols2[e.type];
				ctx1.lineWidth = bh*1;
				ctx1.beginPath();
				if(e.y1 != null){
					ctx1.moveTo(relx(strty),hy2)
					if((endy-strty) > 6) curw = 3;
					else
					curw = (endy-strty)/10;
					ctx1.bezierCurveTo(relx(strty+curw),hy2,relx(strty+curw),hy1,relx(strty+curw+curw),hy1);
				}else{
					ctx1.moveTo(relx(strty),hy1)
					
				}
				if(e.y2 != null){
					if((endy-strty) > 6) curw = 3;
					else
					curw = (endy-strty)/10;
					ctx1.lineTo(relx(endy-curw-curw),hy1)
					ctx1.bezierCurveTo(relx(endy-curw),hy1,relx(endy-curw),hy3,relx(endy),hy3);
				}else{
					ctx1.lineTo(relx(endy),hy1);
					
				}
				ctx1.stroke();
				//ctx1.fillRect(relx(strty),hy1,(endy-strty)*cam.s,-bh);
	
				if(mouse.x > relx(strty) && mouse.x < relx(endy) && mouse.y > hy1-(bh/2) && mouse.y < hy1+(bh/2)){
	
					/*
					//ctx1.globalAlpha = 1;
					ctx1.font = "Bold 15px Arial";
					ctx1.textAlign = "center";
					ctx1.fillStyle = "#000";
					ctx1.fillText(e.name,mouse.x,hy1-(bh));*/
	
					tooltip = e.name;
					tooltipy = hy1-(bh)
					curtype = "pointer"
				}

			}

		}

	}
	//ctx1.globalAlpha = 1;

}

function drawSelectedNation(){

	const e = nations[nselect];

	hy1 = rely(-80-(25*(e.y)))
	if(e.y1 != null) hy2 = rely(-80-(25*(e.y1)))
	
	strty = e.start.date+(Math.floor(e.start.date2)/13);
	endy = e.end.date+(Math.floor(e.end.date2)/13);

	if(endy == 0) endy = now.getFullYear()+(now.getMonth()/12)

	ctx1.strokeStyle = spancols2[e.type];
	ctx1.lineWidth = (bh*1)+(nopw*2);
	ctx1.beginPath();
	ctx1.moveTo(relx(strty),hy1)
	ctx1.lineTo(relx(endy),hy1);
	ctx1.stroke();

	nx1 = Cw/2;

	if(nx1 < relx(strty)) nx1 = relx(strty)
	else if(nx1 > relx(endy)) nx1 = relx(endy);

	date1 = strty;
	if(date1 > 0) date1 = Math.floor(date1) + " AD";
	else date1 = Math.floor(-date1) + " BC";
	strtm = e.start.date2

	date2 = endy;
	if(date2 == now.getFullYear()+(now.getMonth()/12)) date2 = "present"
	else if(date2 > 0) date2 = Math.floor(date2) + " AD";
	else date2 = Math.floor(-date2) + " BC";
	endm = e.end.date2

	if(strtm == 0)  startdate = date1
	else startdate = ((strtm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(strtm)-1]+" "+date1

	if(endm == 0) enddate = date2
	else enddate = ((endm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(endm)-1]+" "+date2

	dur = startdate+" – "+enddate
	if(e.obj != null) nam = e.obj.name
	else nam = e.name

	drawInfoBox2(nam,[dur],nx1,hy1-(nopw*2))

	if(e.obj != null)
	for (let j = 0; j < e.obj.leaders.length; j++) {
		const l = e.obj.leaders[j];
		
		drawTerm(l,hy1-10)

	}

}

function drawTerm(per,y){

	strty = per.start.date+(Math.floor(per.start.date2)/13);
	endy = per.end.date+(Math.floor(per.end.date2)/13);
	psnt = false

	if(endy == 0){
		endy = now.getFullYear()+(now.getMonth()/12)
		psnt = true;
	} 
	dnty = 15;

	ctx1.lineWidth = 2;
	ctx1.beginPath();
	ctx1.moveTo(relx(strty),y+dnty)
	//ctx1.lineTo(relx(strty),y-dnty);
	ctx1.lineTo(relx(strty),y);
	ctx1.lineTo(relx(endy),y);
	if(!psnt){
		ctx1.lineTo(relx(endy),y+dnty);
		//ctx1.lineTo(relx(endy),y-dnty);
	}
	ctx1.stroke();

	if(relx(endy)-relx(strty) > getWidthOfText(per.name,"15px Arial") ){

		ctx1.fillStyle = "#000";
		ctx1.font = "15px Arial";
		ctx1.fillText(per.name,relx((strty+endy)/2),y-4)

	}

	if(mouse.x > relx(strty) && mouse.x < relx(endy) && mouse.y > y-dnty && mouse.y < y+dnty){

		date1 = strty;
		if(date1 > 0) date1 = Math.floor(date1) + " AD";
		else date1 = Math.floor(-date1) + " BC";
		strtm = per.start.date2

		date2 = endy;
		if(psnt) date2 = "present"
		else if(date2 > 0) date2 = Math.floor(date2) + " AD";
		else date2 = Math.floor(-date2) + " BC";
		endm = per.end.date2

		if(strtm == 0)  startdate = date1
		else startdate = ((strtm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(strtm)-1]+" "+date1

		if(endm == 0) enddate = date2
		else enddate = ((endm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(endm)-1]+" "+date2

		tooltip = per.name+" ("+startdate+"–"+enddate+")";
		tooltipy = mouse.y-10

	}

	/*
	nx1 = Cw/2;

	if(nx1 < relx(strty)) nx1 = relx(strty)
	else if(nx1 > relx(endy)) nx1 = relx(endy);

	date1 = strty;
	if(date1 > 0) date1 = Math.floor(date1) + " AD";
	else date1 = Math.floor(-date1) + " BC";
	strtm = e.start.date2

	date2 = endy;
	if(date2 == now.getFullYear()+(now.getMonth()/12)) date2 = "present"
	else if(date2 > 0) date2 = Math.floor(date2) + " AD";
	else date2 = Math.floor(-date2) + " BC";
	endm = e.end.date2

	if(strtm == 0)  startdate = date1
	else startdate = ((strtm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(strtm)-1]+" "+date1

	if(endm == 0) enddate = date2
	else enddate = ((endm%1)*100).toFixed(0)+" of "+monthnshort[Math.floor(endm)-1]+" "+date2

	dur = startdate+" – "+enddate
	if(e.obj != null) nam = e.obj.name
	else nam = e.name

	*/

}

function drawSpans(){

	

	for (let i = 0; i < spans.length; i++) {
		const e = spans[i];

		bh = 30

		hy1 = rely(-80-(25*(e.y)))
		if(e.y == -1) hy1 = rely(-80-(25*(5)))
		if(e.y == -1) bh = 300
		else if(e.type == 5) bh = 90
		
		strty = e.start.date+(Math.floor(e.start.date2)/13);
		endy = e.end.date+(Math.floor(e.end.date2)/13);

		if(endy == 0) endy = now.getFullYear()+(now.getMonth()/12)

		
		ctx1.strokeStyle = spancols[e.type];
		ctx1.lineWidth = bh;
		ctx1.beginPath();
		ctx1.moveTo(relx(strty),hy1)
		ctx1.lineTo(relx(endy),hy1);
		ctx1.stroke();
		//ctx1.fillRect(relx(strty),hy1,(endy-strty)*cam.s,-bh);

		if(mouse.x > relx(strty) && mouse.x < relx(endy) && mouse.y > hy1-(bh/2) && mouse.y < hy1+(bh/2)){

			/*
			ctx1.globalAlpha = 1;
			ctx1.font = "Bold 15px Arial";
			ctx1.textAlign = "center";
			ctx1.fillStyle = "#000";
			ctx1.fillText(e.name,mouse.x,hy1-(bh));
			ctx1.globalAlpha = 0.5;*/

			tooltip = e.name;
			if(e.y == -1) tooltipy = mouse.y-(20)
			else tooltipy = hy1-(20)
			curtype = "pointer"

		}

	}
	ctx1.globalAlpha = 1;

}

function drawTimeline(){

	//camx = cam.x; camy = cam.y;
	ballw = 10;
	y1 = Ch-100;

	ctx1.globalAlpha = 0.5;
	ctx1.fillStyle = bgcol;
	ctx1.fillRect(0,y1,Cw,Ch);
	ctx1.globalAlpha = 1;
	
	ctx1.lineWidth = ballw/2;

	ctx1.strokeStyle = "#888";
	ctx1.beginPath();
	ctx1.moveTo(0,y1);
	ctx1.lineTo(Cw,y1);
	ctx1.stroke();

	ctx1.strokeStyle = "#000";
	ctx1.beginPath();
	ctx1.moveTo(relx(hstart),y1);
	ctx1.lineTo(relx(now.getFullYear()+(now.getMonth()/12))-(ballw),y1);
	ctx1.stroke();
	
	ctx1.beginPath();
	ctx1.arc(relx(now.getFullYear()+(now.getMonth()/12)),y1,ballw,0,PI*2);
	ctx1.stroke();

	ctx1.fillStyle = "#000";
	ctx1.font = "Bold 20px Arial";
	ctx1.textAlign = "center";
	ctx1.fillText(now.getDate()+" "+monthnshort[now.getMonth()]+" "+now.getFullYear(),relx(now.getFullYear()+(now.getMonth()/12)),y1+(ballw*8));

	n1 = hstart; inc = 1;
	if(cam.s < 1) inc = 100;
	else if(cam.s < 10) inc = 10;
	ctx1.beginPath(); ctx1.lineWidth = 2;
	while(n1 < now.getFullYear()+(now.getMonth()/12)){

		if(inc == 1)
		x1 = relx(n1+1);
		else x1 = relx(n1);

		if(x1 > 0 && x1 < Cw && x1 < relx(now.getFullYear()+(now.getMonth()/12))-(ballw)){
			ctx1.moveTo(x1,y1+(ctx1.lineWidth/2));
			if(inc == 1 && n1%100 == 0) ctx1.lineTo(x1,y1-ballw-ballw-ballw);
			else if(inc == 1 && n1%10 == 0) ctx1.lineTo(x1,y1-ballw-ballw);
			else if(inc == 10 && (n1-1)%100 == 0) ctx1.lineTo(x1,y1-ballw-ballw);
			else if(inc == 100 && (n1-1)%1000 == 0) ctx1.lineTo(x1,y1-ballw-ballw);
			else ctx1.lineTo(x1,y1-ballw);
		}
		
		n1+=inc;
	}
	ctx1.stroke();

	bor1 = 50;
	if(mouse.y > y1-bor1 && mouse.y < y1+bor1){
		if(mouse.rclick){

		}else if(mouse.lclick && mouse.lclick && (Math.abs(mouse.x-mouse.cx)+Math.abs(mouse.y-mouse.cy)) > 10){
		
		}else{
			cury = absx(mouse.x); x2 = mouse.x;
			if(cury <= 1) cury -= 1;
			
			ctx1.fillStyle = "#000";
			ctx1.font = "Bold 20px Arial";
			ctx1.textAlign = "center";
			if(cury > 0)
			date1 = Math.floor(cury) + " AD";
			else date1 = Math.abs(Math.floor(cury)) + " BC"
			ctx1.fillText(date1,x2,y1+(ballw*4));

			curtype = "pointer"
		}
		
	}

	if( mouse.lclick && (Math.abs(absx(mouse.x)-measurex)) > 0.1 ){

		ctx1.fillStyle = measurecol; bor2 = bor1/1.5;

		ctx1.fillRect(relx(measurex),y1+bor2,mouse.x-relx(measurex),-bor2/2);
		ctx1.beginPath();
		ctx1.moveTo(relx(measurex),y1);
		ctx1.lineTo(relx(measurex),y1+bor2);
		ctx1.lineTo(mouse.x,y1+bor2);
		ctx1.lineTo(mouse.x,y1);
		ctx1.stroke();
		ctx1.beginPath();
		ctx1.moveTo((relx(measurex)+mouse.x)/2,y1+(bor2/2));
		ctx1.lineTo((relx(measurex)+mouse.x)/2,y1+bor2);
		ctx1.stroke();

		cury1 = absx(mouse.x); cury2 = measurex;

		

		ctx1.fillStyle = "#000";
		ctx1.font = "Bold 20px Arial";
		if(cury1<cury2)
		ctx1.textAlign = "right";
		else ctx1.textAlign = "left";

		cury = cury1;

		if(cury <= 1) cury -= 1;

		if(cury > 0)
		date1 = Math.floor(cury) + " AD";
		else date1 = Math.abs(Math.floor(cury)) + " BC"
		ctx1.fillText("  "+date1+"  ",mouse.x,y1+(ballw*4));

		if(cury1>cury2)
		ctx1.textAlign = "right";
		else ctx1.textAlign = "left";

		cury = cury2;

		if(cury <= 1) cury -= 1;

		if(cury > 0)
		date1 = Math.floor(cury) + " AD";
		else date1 = Math.abs(Math.floor(cury)) + " BC"
		ctx1.fillText("  "+date1+"  ",relx(measurex),y1+(ballw*4));

		ctx1.textAlign = "center";
		ctx1.fillText(Math.abs(cury1-cury2).toFixed(1)+" years",(mouse.x+relx(measurex))/2,y1+(ballw*6));

		curtype = "col-resize";
	}else if(measurex2 != null){

		ctx1.fillStyle = measurecol; bor2 = bor1/1.5;

		ctx1.fillRect(relx(measurex),y1+bor2,relx(measurex2)-relx(measurex),-bor2/2);
		ctx1.beginPath();
		ctx1.moveTo(relx(measurex),y1);
		ctx1.lineTo(relx(measurex),y1+bor2);
		ctx1.lineTo(relx(measurex2),y1+bor2);
		ctx1.lineTo(relx(measurex2),y1);
		ctx1.stroke();
		ctx1.beginPath();
		ctx1.moveTo((relx(measurex)+relx(measurex2))/2,y1+(bor2/2));
		ctx1.lineTo((relx(measurex)+relx(measurex2))/2,y1+bor2);
		ctx1.stroke();

		cury1 = measurex2; cury2 = measurex;

		

		ctx1.fillStyle = "#000";
		ctx1.font = "Bold 20px Arial";
		if(cury1<cury2)
		ctx1.textAlign = "right";
		else ctx1.textAlign = "left";

		cury = cury1;

		if(cury <= 1) cury -= 1;

		if(cury > 0)
		date1 = Math.floor(cury) + " AD";
		else date1 = Math.abs(Math.floor(cury)) + " BC"
		ctx1.fillText("  "+date1+"  ",relx(measurex2),y1+(ballw*4));

		if(cury1>cury2)
		ctx1.textAlign = "right";
		else ctx1.textAlign = "left";

		cury = cury2;

		if(cury <= 1) cury -= 1;

		if(cury > 0)
		date1 = Math.floor(cury) + " AD";
		else date1 = Math.abs(Math.floor(cury)) + " BC"
		ctx1.fillText("  "+date1+"  ",relx(measurex),y1+(ballw*4));

		ctx1.textAlign = "center";
		ctx1.fillText(Math.abs(cury1-cury2).toFixed(1)+" years",(relx(measurex)+relx(measurex2))/2,y1+(ballw*6));

	}

};

function relx(n){

	if(mouse.rclick)
	return ((Cw/2)+((n-cam.x)*cam.s)+mouse.x-mouse.cx);
	else return ((Cw/2)+((n-cam.x)*cam.s));

}

function rely(n){

	if(mouse.rclick)
	return ((Ch/2)+((n-cam.y))+mouse.y-mouse.cy);
	else return ((Ch/2)+((n-cam.y)));

}

function absx(n){

	return ((n-(Cw/2))/cam.s)+cam.x

}

function drawLoading(){

	ctx1.fillStyle = "#aaa"
	ctx1.font = "22px MainFont"; ctx1.textAlign = "center";
	ctx1.fillText("loading",Math.ceil(Cw/2),(Ch/2));

}

function getWidthOfText(txt, font){
	// Create a dummy canvas (render invisible with css)
	var c=document.createElement('canvas');
	// Get the context of the dummy canvas
	var ctx=c.getContext('2d');
	// Set the context.font to the font that you are using
	ctx.font = font;
	// Measure the string 
	// !!! <CRUCIAL>  !!!
	var length = ctx.measureText(txt).width;
	// !!! </CRUCIAL> !!!
	// Return width
	return length;
  }