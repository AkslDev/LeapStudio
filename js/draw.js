let width = 920,
    height = 980,
    canvas = d3.select('div#draw_zone')
        .append('canvas')
        .attr('width', width)
        .attr('style', 'display:block; margin: 0% auto;')
        .attr('height', height).node(),
    ctx = canvas.getContext('2d'),
    before = {},
    after = {},
    color = d3.scale.category20();

canvas.width = width;
canvas.height = height;

ctx.translate(width/2, height/2);

// Function qui permet de dessiner
function draw(rotate) {
    let a, b;
    if(rotate == null){
        ctx.lineWidth = 4;
    }else{
        ctx.lineWidth = rotate;
    }

    for (let id in after) {
        b = before[id],
        a = after[id];
        if (!b) continue;

        ctx.strokeStyle = color_selected;
        ctx.moveTo(b.tipPosition.x, -b.tipPosition.y);
        ctx.lineTo(a.tipPosition.x, -a.tipPosition.y);
        ctx.stroke();
        ctx.beginPath();
    }

    before = after;
}
// Function qui permet d'effacer le canvas
function trash(){
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}




