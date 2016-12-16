let color_selected = 'black';
let eraser = false;
$('#leap_disco').modal();
$('#modal1').modal();

function chose_color(color){
	if(color == 'eraser'){
		color_selected = '#bcbcbc';
	}else{
		color_selected = color;
	}
	choise = '#'+color;
	$('.palette').removeClass('selected');
	$('#eraser').removeClass('selected');
	$(choise).addClass('selected');
}

$('#trash').on('click', function () {
	 $('#modal1').modal('open');
});

$('#trash_yes').on('click', function () {
	trash();
	eraser = false;
});

// Berk... 
$('#black').on('click', function () {
	chose_color('black');
	eraser = false;
});
$('#eraser').on('click', function () {
	chose_color('eraser');
	eraser = false;
	eraser = true;
});
$('#blue').on('click', function () {
	chose_color('blue');
	eraser = false;
});
$('#orange').on('click', function () {
	chose_color('orange');
	eraser = false;
});
$('#red').on('click', function () {
	chose_color('red');
	eraser = false;
});
$('#green').on('click', function () {
	chose_color('green');
	eraser = false;
});

let drawing = false;
$('#leap_disco').modal('open');

Leap.loop({enableGestures: true}, function(frame, done) {
	$('#leap_disco').modal('close');

	if (frame.hands.length > 0) {
		console.log(frame.hands[0].sphereRadius);
		if (frame.hands[0].sphereRadius > 37) {
			drawing = true;
		}else{
			drawing = false;
		}
	}
    
    
    if(drawing == true){
	    	after = {};
	    for (let i = 0; i < frame.pointables.length; i++) {
	        after[frame.pointables[i].id] = frame.pointables[i];
	    }
	    if(eraser == true){
	    	draw(30);
	    }else{
	    	draw();
	    }
	    done();
    }else{
	    done();
    }
});

