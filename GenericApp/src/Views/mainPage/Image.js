var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');

var w = innerWidth;
var h = innerHeight;

function Image(options) {
    Node.call(this);
    this.model = options.model;
    console.log(this.model);
    this.el = new DOMElement(this, {
        tagName: 'div'
    });
    this.el.setContent('<img src=' + this.model.get('imageUrl') + ' height="' + (h-200) + '" width="' + w + '""><p>' + this.model.get('title') + '</p>' );
}


Image.prototype = Object.create(Node.prototype);

function random (array) {
    return array[(Math.random() * array.length)|0];
}

function getRandomImage(){
    return random(FooterButton.images);
}

module.exports = Image;