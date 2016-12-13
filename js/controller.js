$('#eraser').on('click', function () {
	eraser();
});

var controller = new Leap.Controller();
controller.connect();

 controller.on('frame', onFrame);
function onFrame(frame)
{
	$('#leap_disco').modal('close');
}

setInterval(function(){ $('#leap_disco').modal('open'); }, 1000);