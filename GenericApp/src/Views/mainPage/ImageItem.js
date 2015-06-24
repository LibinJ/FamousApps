var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');

var w = innerWidth;
var h = innerHeight;

function ImageItem(options) {
    Node.call(this);
    this.model = options.model;
    this.el = new DOMElement(this, {
        tagName: 'div'
    });
    render.call(this);
    handleModel.call(this);
}


ImageItem.prototype = Object.create(Node.prototype);

function handleModel() {
    this.model.on('destroy', function(){

        var parent = this.getParent();
        parent.removeChild(this);
        console.log('destroy', parent, this);
    }.bind(this));
}

function render() {
    this.el.setContent('<img src=' + this.model.get('imageUrl') + ' height="' + (h-200) + '" width="' + w + '""><p class="textContent">' + this.model.get('title') + '</p>' );
}

module.exports = ImageItem;