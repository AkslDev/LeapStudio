let controllerOptions = { enableGestures: true },
    width = 920,
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

ctx.lineWidth = 5;
ctx.translate(width/2, height/2);

function draw() {
    let a, b;

    for (let id in after) {
        b = before[id],
        a = after[id];
        if (!b) continue;

        ctx.strokeStyle = color(id);
        ctx.moveTo(b.tipPosition.x, -b.tipPosition.y);
        ctx.lineTo(a.tipPosition.x, -a.tipPosition.y);
        ctx.stroke();
        ctx.beginPath();
    }

    before = after;
}

Leap.loop(controllerOptions, function(frame, done) {
    after = {};
    for (let i = 0; i < frame.pointables.length; i++) {
        after[frame.pointables[i].id] = frame.pointables[i];
    }
    draw();
    done();
});
