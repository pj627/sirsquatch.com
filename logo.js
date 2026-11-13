(function(){let g;
const FUR='#5a3c26',DK='#3c2717',LT='#7d5838',MID='#4b3120',SKIN='#3a2a1e',FACE='#6e5440',FACEL='#82654d',ORANGE='#e8772e',ORDK='#b9581f',CREAM='#fbf3e2',GOLD='#e2b44a',GOLDL='#f6dc8c',HAT='#231a14';
let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
function tuftEdge(pts,col){g.fillStyle=col;g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(const p of pts.slice(1))g.lineTo(p[0],p[1]);g.closePath();g.fill()}
// a fur shape: an ellipse-ish outline broken into soft, uneven tufts
function furShape(cx,cy,rx,ry,col,n,jag,from=0,to=Math.PI*2){g.fillStyle=col;g.beginPath();
  for(let i=0;i<=n;i++){const t=from+(to-from)*i/n,k=i%2?1-jag*(.6+rnd()*.6):1+jag*.2*rnd();g.lineTo(cx+Math.cos(t)*rx*k,cy+Math.sin(t)*ry*k)}g.closePath();g.fill()}
function strands(x,y,w,h,col,n,len,ang){g.strokeStyle=col;g.lineWidth=4;g.lineCap='round';for(let i=0;i<n;i++){const px=x+rnd()*w,py=y+rnd()*h,a=ang+(rnd()-.5)*.5;g.beginPath();g.moveTo(px,py);g.quadraticCurveTo(px+Math.cos(a)*len*.5+4,py+Math.sin(a)*len*.5,px+Math.cos(a)*len,py+Math.sin(a)*len);g.stroke()}}
function emblem(){seed=7;
g.fillStyle='rgba(0,0,0,.22)';g.beginPath();g.arc(512,528,480,0,7);g.fill();
g.fillStyle=CREAM;g.beginPath();g.arc(512,512,480,0,7);g.fill();
g.strokeStyle=GOLD;g.lineWidth=4;g.beginPath();g.arc(512,512,462,0,7);g.stroke();
g.save();g.beginPath();g.arc(512,512,440,0,7);g.clip();
const bg=g.createRadialGradient(512,430,30,512,512,540);bg.addColorStop(0,'#5d9a4a');bg.addColorStop(.55,'#2f6130');bg.addColorStop(1,'#132a15');g.fillStyle=bg;g.fillRect(0,0,1024,1024);
// moon + far ridge of trees for depth
g.fillStyle='rgba(255,246,214,.16)';g.beginPath();g.arc(770,250,70,0,7);g.fill();g.fillStyle='rgba(255,246,214,.22)';g.beginPath();g.arc(770,250,48,0,7);g.fill();
g.fillStyle='#24502a';for(let x=90;x<960;x+=58){const h=120+((x*37)%70);g.beginPath();g.moveTo(x-34,900);g.lineTo(x,900-h*1.9);g.lineTo(x+34,900);g.closePath();g.fill()}
g.fillStyle='#173318';for(const [x,h] of [[140,340],[250,265],[790,305],[890,345],[690,235],[345,225]]){g.beginPath();g.moveTo(x-h*.28,900);g.lineTo(x,900-h*1.55);g.lineTo(x+h*.28,900);g.closePath();g.fill();
  g.fillStyle='#1d3d1e';g.beginPath();g.moveTo(x,900-h*1.55);g.lineTo(x+h*.28,900);g.lineTo(x+h*.06,900);g.closePath();g.fill();g.fillStyle='#173318'}
// shoulders and chest
furShape(512,1030,345,320,MID,80,.06,Math.PI,Math.PI*2);
furShape(512,1035,330,305,FUR,80,.05,Math.PI,Math.PI*2);
g.fillStyle=LT;g.beginPath();g.ellipse(512,1005,158,195,0,0,7);g.fill();
strands(360,780,300,200,'rgba(60,39,23,.35)',16,22,1.45);
strands(430,860,170,130,'rgba(150,112,78,.35)',8,18,1.5);
// bow tie with folds and a knot
g.fillStyle=ORANGE;g.beginPath();g.moveTo(512,744);g.quadraticCurveTo(470,708,416,698);g.quadraticCurveTo(398,744,418,792);g.quadraticCurveTo(470,782,512,744);g.fill();
g.beginPath();g.moveTo(512,744);g.quadraticCurveTo(554,708,608,698);g.quadraticCurveTo(626,744,606,792);g.quadraticCurveTo(554,782,512,744);g.fill();
g.strokeStyle=ORDK;g.lineWidth=5;g.lineCap='round';for(const s of[-1,1]){g.beginPath();g.moveTo(512+s*30,738);g.quadraticCurveTo(512+s*62,730,512+s*86,716);g.stroke();g.beginPath();g.moveTo(512+s*30,752);g.quadraticCurveTo(512+s*62,764,512+s*86,776);g.stroke()}
g.fillStyle=ORDK;g.beginPath();g.roundRect(490,720,44,50,14);g.fill();g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.roundRect(498,726,14,30,7);g.fill();
const hx=512,hy=560;
// head: soft tufted outline
g.fillStyle=MID;g.beginPath();g.moveTo(hx-176,hy+92);g.bezierCurveTo(hx-212,hy-44,hx-134,hy-186,hx,hy-206);g.bezierCurveTo(hx+134,hy-186,hx+212,hy-44,hx+176,hy+92);g.bezierCurveTo(hx+154,hy+182,hx-154,hy+182,hx-176,hy+92);g.closePath();g.fill();
g.fillStyle=FUR;g.beginPath();g.moveTo(hx-170,hy+90);g.bezierCurveTo(hx-205,hy-40,hx-130,hy-180,hx,hy-200);g.bezierCurveTo(hx+130,hy-180,hx+205,hy-40,hx+170,hy+90);g.bezierCurveTo(hx+150,hy+175,hx-150,hy+175,hx-170,hy+90);g.closePath();g.fill();
for(const s of[-1,1])for(let i=0;i<7;i++){const y=hy-44+i*28,x=hx+s*(170-i*7),L=24+((i*13)%14);g.fillStyle=i%2?FUR:MID;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+s*L*.9,y+4,x+s*L,y+16);g.quadraticCurveTo(x+s*L*.4,y+18,x,y+28);g.closePath();g.fill()}
// cheek ruff below the face
for(let i=0;i<9;i++){const a=Math.PI*(.18+i*.08),x=hx+Math.cos(a)*120,y=hy+44+Math.sin(a)*112;g.fillStyle=i%2?FUR:MID;g.beginPath();g.moveTo(x-12,y-6);g.quadraticCurveTo(x+Math.cos(a)*14,y+Math.sin(a)*24,x+12,y-4);g.closePath();g.fill()}
// face
g.fillStyle=FACE;g.beginPath();g.ellipse(hx,hy+40,118,108,0,0,7);g.fill();
g.fillStyle=FACEL;g.beginPath();g.ellipse(hx-20,hy+20,70,52,-.3,0,7);g.fill();
// brows: left relaxed, right raised behind the monocle
g.fillStyle=DK;g.beginPath();g.moveTo(hx-108,hy-6);g.quadraticCurveTo(hx-60,hy-38,hx-14,hy-14);g.quadraticCurveTo(hx-58,hy-20,hx-108,hy-6);g.fill();
g.beginPath();g.moveTo(hx+12,hy-34);g.quadraticCurveTo(hx+62,hy-66,hx+112,hy-38);g.quadraticCurveTo(hx+64,hy-46,hx+12,hy-34);g.fill();
// eyes
for(const [ex,ey,r] of [[hx-52,hy+16,20],[hx+52,hy+10,22]]){g.fillStyle='#f3e6c8';g.beginPath();g.ellipse(ex,ey,r+2,r,0,0,7);g.fill();g.fillStyle='#3b2412';g.beginPath();g.arc(ex+3,ey+3,12.5,0,7);g.fill();g.fillStyle='#120b05';g.beginPath();g.arc(ex+3,ey+3,7.5,0,7);g.fill();g.fillStyle='#fff';g.beginPath();g.arc(ex+8,ey-3,4.2,0,7);g.fill();g.beginPath();g.arc(ex-3,ey+8,1.8,0,7);g.fill()}
g.strokeStyle='rgba(42,24,16,.55)';g.lineWidth=4;g.beginPath();g.arc(hx-52,hy+16,24,Math.PI*1.1,Math.PI*1.9);g.stroke();
// monocle: gold rim, tinted glass, glint, chain to the bow tie
g.fillStyle='rgba(190,225,240,.18)';g.beginPath();g.arc(hx+52,hy+10,36,0,7);g.fill();
g.strokeStyle='#b8902e';g.lineWidth=13;g.beginPath();g.arc(hx+52,hy+10,40,0,7);g.stroke();
g.strokeStyle=GOLD;g.lineWidth=8;g.beginPath();g.arc(hx+52,hy+10,40,0,7);g.stroke();
g.strokeStyle=GOLDL;g.lineWidth=3.5;g.beginPath();g.arc(hx+52,hy+10,40,Math.PI*1.05,Math.PI*1.55);g.stroke();
g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=5;g.lineCap='round';g.beginPath();g.arc(hx+52,hy+10,26,Math.PI*1.15,Math.PI*1.4);g.stroke();
g.fillStyle=GOLD;for(let i=0;i<=14;i++){const t=i/14,x=(1-t)*(1-t)*(hx+84)+2*(1-t)*t*(hx+140)+t*t*(hx+40),y=(1-t)*(1-t)*(hy+38)+2*(1-t)*t*(hy+150)+t*t*(hy+170);g.beginPath();g.ellipse(x,y,4.5,3,t*2,0,7);g.fill()}
// nose, mouth, little smile
g.fillStyle=SKIN;g.beginPath();g.moveTo(hx-34,hy+58);g.quadraticCurveTo(hx,hy+36,hx+34,hy+58);g.quadraticCurveTo(hx+30,hy+84,hx,hy+86);g.quadraticCurveTo(hx-30,hy+84,hx-34,hy+58);g.fill();
g.fillStyle='rgba(255,255,255,.22)';g.beginPath();g.ellipse(hx-10,hy+54,10,5,-.3,0,7);g.fill();
g.strokeStyle='#2a1810';g.lineWidth=9;g.lineCap='round';g.beginPath();g.moveTo(hx-44,hy+106);g.quadraticCurveTo(hx+4,hy+138,hx+50,hy+100);g.stroke();
g.lineWidth=6;g.beginPath();g.moveTo(hx+50,hy+100);g.lineTo(hx+60,hy+94);g.stroke();
// top hat
g.save();g.translate(hx+14,hy-122);g.rotate(.1);
g.fillStyle='rgba(0,0,0,.32)';g.beginPath();g.ellipse(0,16,190,34,0,0,7);g.fill();
g.fillStyle=HAT;g.beginPath();g.ellipse(0,0,185,34,0,0,7);g.fill();
g.strokeStyle='rgba(255,255,255,.12)';g.lineWidth=5;g.beginPath();g.ellipse(0,0,182,31,0,Math.PI*.05,Math.PI*.95);g.stroke();
const hg=g.createLinearGradient(-112,0,112,0);hg.addColorStop(0,'#2e231b');hg.addColorStop(.35,'#1c1510');hg.addColorStop(1,'#2a2019');g.fillStyle=hg;
g.beginPath();g.moveTo(-112,-6);g.lineTo(-100,-250);g.quadraticCurveTo(0,-268,100,-250);g.lineTo(112,-6);g.quadraticCurveTo(0,14,-112,-6);g.fill();
g.fillStyle=ORANGE;g.beginPath();g.moveTo(-110,-46);g.quadraticCurveTo(0,-34,110,-46);g.lineTo(108,-86);g.quadraticCurveTo(0,-74,-108,-86);g.closePath();g.fill();
g.fillStyle=ORDK;g.beginPath();g.moveTo(-110,-46);g.quadraticCurveTo(0,-34,110,-46);g.lineTo(110,-54);g.quadraticCurveTo(0,-42,-110,-54);g.closePath();g.fill();
g.fillStyle='rgba(255,255,255,.10)';g.beginPath();g.moveTo(-88,-238);g.lineTo(-58,-242);g.lineTo(-66,-20);g.lineTo(-98,-14);g.closePath();g.fill();
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
