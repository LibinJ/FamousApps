var Backbone = require('backbone');
var MenuItemModel = require('./MenuItemModel')

var HamburgerMenuCollection = Backbone.Collection.extend({
	model: MenuItemModel,
	url: 'data/menu.json',
	parse: function(res) {
		console.log(res)
	}
});

module.exports = HamburgerMenuCollection;