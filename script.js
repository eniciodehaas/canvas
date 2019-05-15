let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

i=0;

let draw =[
  //linkeroor
  'drawCircle(125,140,90,"black",1,"black")',
  //rechteroor
  'drawCircle(475,140,90,"black",1,"black")',
  //hoofd
  'drawCircle(300,350,200,"white",5,"black")',
  //linkeroog
  'drawOval(240,170,40,70,3,"black","white")',
  //rechteroog
  'drawOval(360,170,40,70,3,"black","white")',
  //neus
  'drawOval(300,500,45,35,3,"black","black")',
  //mond
  'drawHalf(300,450,70,"black",1,"black")',
  'drawHalf(300,450,40,"red",1,"red")',
  //rechterpupil
  'drawOval(360,160,20,40,3,"black","black")',
  //linkerpupil
  'drawOval(240,160,20,40,3,"black","black")'
];

//sterren
setInterval(() => {
drawLine(280,30,320,70,randomColor());
drawLine(40,570,80,530,randomColor());
drawLine(560,570,520,530,randomColor());
},100);
setInterval(() => {
drawLine(320,30,280,70,randomColor());
drawLine(40,530,80,570,randomColor());
drawLine(560,530,520,570,randomColor());
},222);
setInterval(() => {
drawLine(300,20,300,80,randomColor());
drawLine(60,520,60,580,randomColor());
drawLine(540,580,540,520,randomColor());
},310);
setInterval(() => {
drawLine(270,50,330,50,randomColor());
drawLine(30,550,90,550,randomColor());
drawLine(570,550,510,550,randomColor());
},368);

function randomColor(){
  return('#'+Math.floor(Math.random()*16777215).toString(16));
}

function drawLine(xstart,ystart,xeind,yeind,color)
{
  context.beginPath();
  context.moveTo(xstart,ystart);
  context.lineTo(xeind,yeind);
  context.strokeStyle=color;
  context.stroke();
}

function drawOval(x, y, rw, rh, lw, lineColor, fillColor)
{
  context.save();
  context.scale(1,  rh/rw);
  context.beginPath();
  context.arc(x, y, rw, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth=lw;
  context.strokeStyle=lineColor;
  context.fillStyle = fillColor;
  context.fill();
  context.stroke();
}

function drawCircle(x, y, r, fillColor, lw, lc)
{
  context.beginPath();
  context.arc(x,y,r,0,2*Math.PI);
  context.lineWidth=lw;
  context.strokeStyle=lc;
  context.fillStyle = fillColor;
  context.fill();
  context.closePath();
  context.stroke();
}

function drawHalf(x,y,r,fillColor,lw,lc)
{
  context.beginPath();
  context.arc(x,y,r,0,1*Math.PI);
  context.lineWidth=lw;
  context.strokeStyle=lc;
  context.fillStyle = fillColor;
  context.fill();
  context.closePath();
  context.stroke();
}

function loop() {
    eval(draw[i]);
    i++;
    setTimeout(() => {
        loop();
    }, 500);
}

loop(draw);
