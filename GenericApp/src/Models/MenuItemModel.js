// var Backbone = require('backbone');

var MenuItemModel = Backbone.Model.extend({
	defaults: {
		content: 'c1',
		section: 's1'
	}
});

module.exports = MenuItemModel;