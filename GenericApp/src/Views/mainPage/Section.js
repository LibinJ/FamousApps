var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');
var Image = require('./Image');

var PhotoCollection = require('../../Models/PhotoCollection');
var w = innerWidth;
var h = innerHeight;

function Section(i) {
    Node.call(this);
    this.collection = PhotoCollection.load('jeff');
    this.imgs = createImages.call(this, i);
    handleCollection.call(this);
    _debug.call(this);
}


Section.prototype = Object.create(Node.prototype);

function handleCollection() {
    // this.collection.on('all', function(collection) {
    //     console.log(collection);
    // });
    this.collection.on('sync', function(collection) {
        collection.forEach(
            function(model) {
                console.log(model.get('imageUrl'));
            }
        );
    });
}

function _debug() {
    if (app && app.debug) {
        window.photoCollection = this.collection;
    }
}

function createImages(id) {
    var result = [];
    var numberOfImgs = FooterButton.sections[id].imgNumber;
    var img;

    for (var i = 0 ; i < numberOfImgs ; i++) {
        img = this.addChild()
                    .setSizeMode('default', 'absolute')
                    .setAbsoluteSize(w, h-150)
                    .setPosition(0, (h-150) * i)
                    .addChild(new Image());
        result.push(img);
    }
    return result;
};

module.exports = Section;