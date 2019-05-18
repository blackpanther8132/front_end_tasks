var canvas = document.getElementById("DemoCanvas");
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.shadowColor = "grey";
    ctx.strokeStyle = "white";
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 6;
    ctx.shadowOffsetY = 6;

    ctx.arc(300, 205, 220, 0, Math.PI, true);
    ctx.stroke();

}