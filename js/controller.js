let color_selected = 'black';


function chose_color(color){
	color_selected = color;
	choise = '#'+color;
	$('.palette').removeClass('selected');
	$(choise).addClass('selected');
}

$('#eraser').on('click', function () {
	eraser();
});

$('#black').on('click', function () {
	chose_color('black');
});
$('#blue').on('click', function () {
	chose_color('blue');
});
$('#orange').on('click', function () {
	chose_color('orange');
});
$('#red').on('click', function () {
	chose_color('red');
});
$('#green').on('click', function () {
	chose_color('green');
});

Leap.loop({enableGestures: true}, function(frame, done) {
    $('#leap_disco').modal('close');
    after = {};
    for (let i = 0; i < frame.pointables.length; i++) {
        after[frame.pointables[i].id] = frame.pointables[i];
    }
    draw();
    done();
});

setInterval(function(){ $('#leap_disco').modal('open'); }, 1000);