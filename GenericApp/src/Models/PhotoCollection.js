var PhotoModel = require('./PhotoModel')
var userID;

var PhotoCollection = Backbone.Firebase.Collection.extend({
	model: PhotoModel,
    autoSync: true,
    url: function() {
        return new Firebase('https://genericapps.firebaseio.com/photoCollection/' + userID);
    }
});

PhotoCollection.load = _.memoize(function(id) {
    userID = id;
    this.photoCollection = new PhotoCollection();
    return this.photoCollection;
});

module.exports = PhotoCollection;