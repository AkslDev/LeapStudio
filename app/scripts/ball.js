import {canvas, ctx} from './canvas';
import {draw_circle} from './utils';

const MAX_LIFE = 5000;

// Fonction Ball qui paramètre la balle
export function Ball(x, y, radius, gravity) {
	this.radius 	= radius;
	this.gravity 	= gravity;
	this.velocity 	= { x: 0, y: 0 };
	this.position 	= { x, y };

	this.born 	= Date.now();
	this.life 		= 0;
	this.dead 	= false;
}

Ball.prototype.update = function updateBall() {
  	if (this.dead) {
    		return;
  	}

  	this.velocity.y += this.gravity;
  	this.position.x += this.velocity.x;
  	this.position.y += this.velocity.y;

  	if (this.position.y + this.radius >= canvas.height) {
    		this.position.y = canvas.height - this.radius;
  	}

  	if (this.position.y + this.radius === canvas.height) {
    		this.velocity.y *= -0.8;
  	}

  	this.life = Date.now();

  	if (this.life - this.born > MAX_LIFE) {
   	 	this.dead = true;
  	}
};

Ball.prototype.render = function renderBall() {
  	if (this.dead) {
    		return;
  	}

  	ctx.fillStyle = 'orange';
  	draw_circle(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
};
