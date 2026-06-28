const music=document.getElementById("music");

function show(id){
document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function openLetter(){
music.play().catch(()=>{});
show("s1");
start();
}

function toInvite(){show("s2")}
function toQuestion(){show("s3")}
function yes(){show("final")}

const no=document.getElementById("no");
no.addEventListener("mouseover",()=>{
no.style.position="absolute";
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";
});

// простые “падающие точки”
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let dots=[];

function Dot(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.vy=Math.random()*2+1;
}

function start(){
for(let i=0;i<60;i++){
dots.push(new Dot());
}
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,215,150,0.5)";

dots.forEach(d=>{
d.y+=d.vy;
if(d.y>canvas.height)d.y=0;

ctx.beginPath();
ctx.arc(d.x,d.y,2,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(draw);
}

draw();

window.onresize=()=>{
canvas.width=innerWidth;
canvas.height=innerHeight;
};
