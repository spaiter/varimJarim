var app = {};
(function() {
	var root = this;

	app = {
		models: {},
		views: {},
		collection: {},
		collections: {},
		router: null,
		search_timer: null,
		init: function() {
			if (typeof jQuery != 'undefined') {
				$(document).ready(function(){
					app.bb_init();
					app.events();
				});
			}
		},
		bb_init: function() {
			app.models.good     = Backbone.Model.extend({});
			app.views.good_view = Backbone.View.extend({
					tagName: "tr",
					className: "item",
					template: _.template($('#list-item-template').html()),
					initialize: function() {
						this.model.bind('change', this.render, this);
					},
					render: function() {
						var el = $(this.template(this.model.toJSON()));
						this.setElement(el);
						this.$el.attr('data-id', this.model.id);
						return this;
					}
				});
			app.models.good_col = Backbone.Collection.extend({
					model: app.models.good,
					options: {},
					url: function() {
						return '/goods.json?' + $.param(this.options);
					},
					parse: function(response) {
						var self = this;
						_.each(response, function(item){
							var md = new app.models.good(item);
							var vw = new app.views.good_view({model: md});
							$('#list').append(vw.render().el);
						});
					}
				});

			app.collections.collection = new app.models.good_col();
			
			app.router = Backbone.Router.extend({
				routes: {
					"cart":          "cart",
					"order":         "order",
					"search/:query": "search"
				},
				search: function(query) {
					$('#list').empty();
					app.collections.collection.options.query = query;
					app.collections.collection.fetch();
				}
			});

			Backbone.emulateHTTP = true;
			new app.router();
  			Backbone.history.start();

		},
		events: function() {
			$('#query').keydown(function(){
				window.clearTimeout(app.search_timer);
			});
			$('#query').keyup(function(){
				var query = $(this).val();
				app.search_timer = setTimeout(function(){ window.location.hash = 'search/' + query; }, 200);
			});
			$('#query').change(function(){
				var query = $(this).val();
				app.search_timer = setTimeout(function(){ window.location.hash = 'search/' + query; }, 200);
			});
		}
	};
	
	app.init();

}).call(this);
