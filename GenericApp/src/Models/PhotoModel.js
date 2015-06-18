
var PhotoModel = Backbone.Model.extend({
	defaults: {
		imageUrl: 'http://.....',
		title: 'image title',
        type: 'home'
	}
});

module.exports = PhotoModel;