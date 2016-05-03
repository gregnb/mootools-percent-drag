/* simple class to covert from fixed to % */

	var DragPercent = new Class({
        Extends: Drag.Move,
		el:null,
        
		initialize: function(element,options) {
			this.el = $(element);
			this.parent(element, options);
		},
		stop: function(event){
			this.parent(event);		
			var percent = {
				x: (Math.round((this.el.getPosition(this.options.container).x / $(this.options.container).getSize().x) * 10000))/100,
				y: (Math.round((this.el.getPosition(this.options.container).y / $(this.options.container).getSize().y) * 10000))/100 
			};		
			this.el.setStyles({
				'left' : percent.x + '%',
				'top' : percent.y + '%'
			});
		},
    });
	