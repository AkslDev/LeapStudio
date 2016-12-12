import {canvas, ctx} from './canvas';

	// Fonction mapping 3D to 2D
	export function to2D(leapPoint, frame){

		let iBox = frame.interactionBox;
		let normalizedPoint = iBox.normalizePoint(leapPoint ,true);

		return{
			x : normalizedPoint[0] * canvas.width,
			y : (1 - normalizedPoint[1]) * canvas.height
		};
	}

	// Fonction pour dessiner les cercles des éléments des 	doigts
	export function draw_circle(x, y, size, color='#0d47a1'){
		ctx.fillStyle 	= color;
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI*2);
		ctx.fill();
		ctx.closePath();
	}
	
	// Fonction pour lier les cercles de chaque doigts
	export function stroke(begin, end){
		ctx.moveTo(begin.x, begin.y);
		ctx.lineTo(end.x, end.y);
		ctx.stroke();
	}