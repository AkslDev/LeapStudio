// Libs
import Leap from 'leapjs';

// Custom Script
import {canvas, ctx} from './canvas';
import {to2D, draw_circle , stroke} from './utils';
import {Ball} from './ball';

// Class
import {tool} from './tools';
// import {Color} from './class_color';
import {Eraser} from './class_eraser';
// import {tool_color} from './tool_color';


let balls = [];

// Leap
Leap.loop( (frame) => {

	// console.info(frame.hands.length, 'Mains détéctées!');

	ctx.fillStyle 	= 'black';
	ctx.clearRect(0,0, canvas.width, canvas.height);

	// Boucle parcourant chaque main détéctée dans l'espace leap
	frame.hands.forEach((hand) => {

		let palmPos 	= to2D(hand.stabilizedPalmPosition, frame);
		draw_circle(palmPos.x, palmPos.y, 30);

		// Boucle parcourant chaque doigts de cette main
		hand.fingers.forEach((finger) => {

			// Distal Phalange
			let tipPos	= 	to2D(finger.stabilizedTipPosition, frame);
			draw_circle(tipPos.x, tipPos.y, 10, '#e57373');

			// Intermédiaire Phalange
			let dipPos	= 	to2D(finger.dipPosition, frame);
			draw_circle(dipPos.x, dipPos.y, 10,'#64b5f6');

			// Proximal
			let pipPos	= 	to2D(finger.pipPosition, frame);
			draw_circle(pipPos.x, pipPos.y, 10, '#aed581');

			// Metacarpal
			let mcpPos	= 	to2D(finger.mcpPosition, frame);
			draw_circle(mcpPos.x, mcpPos.y, 10,'#ffd54f');
			
			// Carpal
			let carpPos	= 	to2D(finger.carpPosition, frame);
			draw_circle(carpPos.x, carpPos.y, 10,'#9575cd');			
			// console.log(finger);

			// Relier les points
			stroke(tipPos, dipPos);
			stroke(dipPos, pipPos);
			stroke(pipPos, mcpPos);
			stroke(mcpPos, carpPos);
		});
	});

	// Vérification des gestures
  	frame.gestures.forEach((gesture) => {
    		// console.log(gesture)
    		
    		if (gesture.type === 'keyTap') {
      			let gesturePos = to2D(gesture.position, frame);
      			balls.push(new Ball(gesturePos.x, gesturePos.y, 30, 0.7));
    		}
  	});

  	// Dessin des balles (si il en existe)
  	balls.forEach((ball, index) => {
    		if (ball.dead) {
      			return balls.splice(index, 1);
    		}
    		ball.update();
    		ball.render();
  	});
});
