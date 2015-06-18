// var Backbone = require('backbone');
var MenuItemModel = require('./MenuItemModel')

var HamburgerMenuCollection = Backbone.Collection.extend({
	model: MenuItemModel,
	url: 'data/menu.json'
});

module.exports = HamburgerMenuCollection;