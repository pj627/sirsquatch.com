(function(){let g;
const FUR='#5a3c26',DK='#3c2717',LT='#7d5838',SKIN='#3a2a1e',FACE='#6e5440',ORANGE='#e8772e',CREAM='#fbf3e2',GOLD='#e2b44a',HAT='#231a14';
function furBlob(cx,cy,rx,ry,k,col,n=70,rot=0){g.fillStyle=col;g.beginPath();
for(let i=0;i<n;i++){const t=i/n*Math.PI*2,sn=Math.sin(t),f=1+k*sn,rr=i%2?.95:1.035;const x=Math.cos(t)*rx*f*rr,y=sn*ry*rr;
g.lineTo(cx+x*Math.cos(rot)-y*Math.sin(rot),cy+x*Math.sin(rot)+y*Math.cos(rot))}g.closePath();g.fill()}
function emblem(){
g.fillStyle='rgba(0,0,0,.25)';g.beginPath();g.arc(512,526,480,0,7);g.fill();
g.fillStyle=CREAM;g.beginPath();g.arc(512,512,480,0,7);g.fill();
g.save();g.beginPath();g.arc(512,512,440,0,7);g.clip();
const bg=g.createRadialGradient(512,470,40,512,512,520);bg.addColorStop(0,'#4f8a3f');bg.addColorStop(1,'#1b3a1c');g.fillStyle=bg;g.fillRect(0,0,1024,1024);
g.fillStyle='#173318';for(const [x,h] of [[150,330],[260,260],[780,300],[880,340],[690,230],[350,220]]){g.beginPath();g.moveTo(x-h*.28,880);g.lineTo(x,880-h*1.5);g.lineTo(x+h*.28,880);g.closePath();g.fill()}
furBlob(512,1010,330,300,-.12,FUR,90);
g.fillStyle=LT;g.beginPath();g.ellipse(512,1000,150,190,0,0,7);g.fill();
g.fillStyle=ORANGE;g.beginPath();g.moveTo(512,742);g.lineTo(420,700);g.quadraticCurveTo(400,742,420,786);g.closePath();g.fill();
g.beginPath();g.moveTo(512,742);g.lineTo(604,700);g.quadraticCurveTo(624,742,604,786);g.closePath();g.fill();
g.fillStyle='#b9581f';g.beginPath();g.ellipse(512,742,22,26,0,0,7);g.fill();
const hx=512,hy=560;
g.fillStyle=FUR;g.beginPath();g.moveTo(hx-170,hy+90);g.bezierCurveTo(hx-205,hy-40,hx-130,hy-180,hx,hy-200);
g.bezierCurveTo(hx+130,hy-180,hx+205,hy-40,hx+170,hy+90);g.bezierCurveTo(hx+150,hy+175,hx-150,hy+175,hx-170,hy+90);g.closePath();g.fill();
for(const s of [-1,1])for(let i=0;i<6;i++){const y=hy-30+i*30,x=hx+s*(168-i*6);g.beginPath();g.moveTo(x,y);g.lineTo(x+s*30,y+14);g.lineTo(x,y+26);g.closePath();g.fill()}
g.fillStyle=FACE;g.beginPath();g.ellipse(hx,hy+40,118,108,0,0,7);g.fill();
g.fillStyle=DK;g.beginPath();g.ellipse(hx-55,hy-12,62,20,.1,0,7);g.fill();g.beginPath();g.ellipse(hx+58,hy-30,62,20,-.25,0,7);g.fill();
for(const [ex,ey] of [[hx-50,hy+16],[hx+52,hy+10]]){g.fillStyle='#f3e6c8';g.beginPath();g.ellipse(ex,ey,22,20,0,0,7);g.fill();g.fillStyle='#120b05';g.beginPath();g.arc(ex+3,ey+3,12,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(ex+8,ey-3,4,0,7);g.fill()}
g.strokeStyle=GOLD;g.lineWidth=11;g.beginPath();g.arc(hx+52,hy+10,40,0,7);g.stroke();
g.fillStyle='rgba(255,255,255,.14)';g.beginPath();g.arc(hx+52,hy+10,35,0,7);g.fill();
g.strokeStyle=GOLD;g.lineWidth=5;g.setLineDash([10,7]);g.beginPath();g.moveTo(hx+80,hy+40);g.quadraticCurveTo(hx+140,hy+150,hx+95,hy+215);g.stroke();g.setLineDash([]);
g.fillStyle=SKIN;g.beginPath();g.ellipse(hx,hy+62,32,21,0,0,7);g.fill();
g.strokeStyle='#2a1810';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(hx-46,hy+104);g.quadraticCurveTo(hx,hy+134,hx+46,hy+104);g.stroke();
g.save();g.translate(hx+14,hy-122);g.rotate(.1);
g.fillStyle='rgba(0,0,0,.3)';g.beginPath();g.ellipse(0,14,190,34,0,0,7);g.fill();
g.fillStyle=HAT;g.beginPath();g.ellipse(0,0,185,34,0,0,7);g.fill();
g.beginPath();g.moveTo(-112,-6);g.lineTo(-100,-250);g.quadraticCurveTo(0,-268,100,-250);g.lineTo(112,-6);g.quadraticCurveTo(0,14,-112,-6);g.fill();
g.fillStyle=ORANGE;g.beginPath();g.moveTo(-110,-46);g.lineTo(110,-46);g.lineTo(108,-86);g.quadraticCurveTo(0,-74,-108,-86);g.closePath();g.fill();
g.fillStyle='rgba(255,255,255,.08)';g.beginPath();g.moveTo(-90,-240);g.lineTo(-60,-244);g.lineTo(-70,-20);g.lineTo(-100,-16);g.closePath();g.fill();
g.fillStyle='#3a2c22';g.beginPath();g.ellipse(0,-252,100,18,0,0,7);g.fill();
g.restore();
g.restore();
g.strokeStyle=ORANGE;g.lineWidth=10;g.beginPath();g.arc(512,512,440,0,7);g.stroke();
}
function paint(c){g=c.getContext('2d');g.setTransform(c.width/1024,0,0,c.width/1024,0,0);emblem()}
document.querySelectorAll('canvas.sq-logo').forEach(paint);
var f=document.createElement('canvas');f.width=f.height=64;paint(f);
var l=document.createElement('link');l.rel='icon';l.href=f.toDataURL();document.head.appendChild(l);
})();