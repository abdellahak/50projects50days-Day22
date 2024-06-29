let lineWidth = document.querySelector('#lineWidth');
let lineWidthValue = document.querySelector('#lineWidthValue');
lineWidthValue.innerText = lineWidth.value;



// canvas
let options = document.querySelector('.options');
let clearButton = document.querySelector('.button');
let color = document.querySelector('#selectedColor');
let canvas = document.querySelector('#drawingBoard');
let ctx = canvas.getContext('2d');


let canvasOffsetX = canvas.offsetLeft;
let canvasOffsetY = canvas.offsetTop;

canvas.width =window.innerWidth - canvasOffsetX;
canvas.height =window.innerHeight - canvasOffsetY;


let isPainting = false;
let lineSize = lineWidth.value;
let startX;
let startY;

clearButton.addEventListener('click', function(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
// lineWidth.addEventListener('change', function(){
//     setLineWidth(this);
//     lineSize = lineWidthValue.value;
// });
// color.addEventListener('change', function(){
//     ctx.strokeStyle = color.value;
// });

options.addEventListener('change', function(e){
    if (e.target.id =="lineWidth"){
        lineWidthValue.innerText = e.target.value;
        lineSize =e.target.value;
    }
    if(e.target.id =="selectedColor"){
        ctx.strokeStyle = color.value;
    }
})

canvas.addEventListener('mousedown', (e)=>{
    isPainting =true;
    startX =e.clientX;
    startY = e.clientY;
});
canvas.addEventListener('mouseup', (e)=>{
    isPainting =false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);


function draw(e){
if(!isPainting){
    return;
}
ctx.lineWidth = lineSize;
ctx.lineCap='round';

ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
}
