export class Color  {
	/**
	 * Represente une couleur dans la palette
	 * @param  {string} Nom de la couleur	
	 * @return {array}  Valeur R,G,B de la couleur
	 */
	constructor(name, color){
		this.name 	= 	name;
		this.color_rgb	= 	color;
	}
	to_string(){
		return "rgb("+this.color_rgb.join(',')+")";
	}
}