import {canvas, ctx} from './canvas';

export class Eraser{
	constructor(canvas){
		super('Gomme', 'fa-eraser');

		this.canvas = canvas;
		this.bg_color	= new Color ('gris' , [211,211,211]);
		this.on_click = false;
	}

	onmousedown(mouse_event){
		let position = this.canvas.screen_to_canvas(mouse_event);
		this.canvas.draw(position.x, position.y, this.bg_color);
	}
	onmousemove(mouse_event){
		if (this.on_click == true){
				let position = this.canvas.screen_to_canvas(mouse_event);
				this.canvas.draw(position.x, position.y, this.bg_color);
			}
	}
}
