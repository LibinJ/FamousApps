var PhotoModel = require('./PhotoModel')

var PhotoCollection = Backbone.Firebase.Collection.extend({
	model: PhotoModel,
    url: function() {
        return new Firebase('https://genericapps.firebaseio.com/photoCollection/'+this.options.userID);
    }
});

PhotoCollection.load = _.memoize(function(userID) {
    this.photoCollection = new PhotoCollection({
        userID: userID
    });
    return this.photoCollection;
});

module.exports = PhotoCollection;