export function tool(){


	tools: [],
	tool_selected: null,
	get_selected: function(){
		return this.selected;
	},
	select_tool:  function( tool ){

		this.selected = tool;
		$('#palette-tool a').removeClass('tool-selected')
						.eq(tool.id)
						.addClass('tool-selected');
	},

	init : function(arg){

		this.tools = arg;

		let 	$tools 		= $('#palette-tool');
			$one 		= $tools.children('a').detach();

		for (var i = 0; i < arg.length ; i++) {

			let  t 		= $one.clone();
			     tool 	= this.tools[i];
			     arg[i].id	= i;

			var a = arg[i].iconfa();
				t.children().removeClass();
				t.children().addClass(a);
				$('#palette-tool').append(t);
				t.attr('title', arg[i].name);
				arg[i].id	= i;
		}		
		
		//Outils par defaut
		this.select_tool(this.tools[0]);	

		// Gestion des clics
		var self 	= this;
		$('#palette-tool').on('click','a',function(){
			let index = $('#palette-tool a').index(this);
			console.log(self.tools[index]);
			self.select_tool(self.tools[index]);

		});	


	}	
}
