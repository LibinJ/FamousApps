var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');
var PhotoCollection = require('../../Models/PhotoCollection');
var Image = require('./Image');

var w = innerWidth;
var h = innerHeight;

function Section(i) {
    Node.call(this);
    this.collection = PhotoCollection.load('jeff');
    // this.imgs = createImages.call(this, i);
    handleCollection.call(this);
    _debug.call(this);

}


Section.prototype = Object.create(Node.prototype);

function handleCollection() {
    // this.collection.on('all', function(collection) {
    //     console.log(collection);
    // });
    this.collection.on('sync', function(collection) {
        createImages.call(this, collection);
    }.bind(this));
}

function _debug() {
    if (app && app.debug) {
        window.photoCollection = this.collection;
    }
}


function createImages(collection) {
    var result = [];
    var numberOfImgs = collection.length;
    var img;
    console.log(numberOfImgs);
    for (var i = 0 ; i < numberOfImgs ; i++) {
        console.log("before: " + i);
        img = this.addChild()
                    .setSizeMode('default', 'absolute')
                    .setAbsoluteSize(w, h-100)
                    .setPosition(0, (h-150) * i)
                    .addChild(new Image({
                        model: collection.at(i)
                    }));
        console.log("after: " + i);
        result.push(img);
    }
    return result;
};

module.exports = Section;