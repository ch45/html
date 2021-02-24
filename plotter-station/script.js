$(function() {
    
    $('#control-home').draggable({containment: ".plotter-control"}).css({'top': 200 - 16, 'left': 0});
    $('#control-pen-change').draggable({containment: ".plotter-control"}).css({'top': 200 - 16, 'left': 150 - 45});
    $('#control-centre').draggable({containment: ".plotter-control"}).css({'top': 100 - 16, 'left': 150 - 18});
});

var canvas = document.getElementById('ramp-graphic');
var ctx = canvas.getContext('2d');

// Axis X
ctx.beginPath();
ctx.moveTo(10, 220);
ctx.lineWidth = 2;
ctx.lineCap = 'square';
ctx.lineTo(440, 220);
ctx.stroke();

// Axis Y
ctx.beginPath();
ctx.moveTo(20, 230);
ctx.lineWidth = 2;
ctx.lineCap = 'square';
ctx.lineTo(20, 10);
ctx.stroke();

// Acceleration
ctx.beginPath();
ctx.moveTo(30, 220);
ctx.lineWidth = 1;
ctx.lineCap = 'square';
ctx.lineTo(130, 20);
ctx.strokeStyle = '#ff0000';
ctx.stroke();
// Constant Velocity
ctx.lineTo(330, 20);
ctx.stroke();
// Deceleration
ctx.lineTo(430, 220);
ctx.stroke();

