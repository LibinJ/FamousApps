var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');

var w = innerWidth;
var h = innerHeight;

function Image() {
    Node.call(this);

    var contentImageEl = new DOMElement(this, {
        tagName: 'img'
    }).setAttribute('src', 'imgs/' + getRandomImage());
}


Image.prototype = Object.create(Node.prototype);

function random (array) {
    return array[(Math.random() * array.length)|0];
}

function getRandomImage(){
    return random(FooterButton.images);
}

module.exports = Image;