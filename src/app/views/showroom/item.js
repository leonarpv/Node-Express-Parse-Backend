define([
    'underscore',
    'parse',
    
    'text!templates/showroom/item.html'
], function(
	_, Parse,
	itemTemplate
) {
	
	var view = Parse.View.extend({
	
		tagName : 'tr',
	
		events : {},
	
	
		initialize : function(options) {
			
			//if (app.DEBUG_LEVEL == DEBUG_LEVEL.TRACE) console.log('ShowroomItem.initialize');
			
			_.bindAll(this, 'render');
			
			this.template = _.template(itemTemplate);
			
			this.model.bind('change', this.render);
	
		},
	
	
		render : function() {
			
			//if (app.DEBUG_LEVEL == DEBUG_LEVEL.TRACE) console.log('ShowroomItem.render');
			
			this.$el.html(this.template(this.model.toTemplate()));
			
			this.$el.attr('data-id', this.model.id);
			
			return this;
			
		}
		
		
	});
	
	return view;

});