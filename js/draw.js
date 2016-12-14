$('#leap_disco').modal();

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

ctx.lineWidth = 5;
ctx.translate(width/2, height/2);

// Function qui permet de dessiner
function draw() {
    let a, b;

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
function eraser(){
        // I have lots of transforms right now
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Will always clear the right space
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    // Still have my old transforms
}




