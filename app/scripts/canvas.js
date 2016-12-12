// Création du Canvas
	
	// Lien vers le HTML <canvas>
	let canvas 	= document.getElementById('drawzone');
	let ctx 		= canvas.getContext('2d');

	// Taille du Canvas
	canvas.width 	= window.innerWidth;
	canvas.height	= window.innerHeight;

export {canvas, ctx};
