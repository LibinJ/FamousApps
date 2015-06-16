var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;

var w = innerWidth;
var h = innerHeight;

function Content(mount) {
    // Extend Node
    Node.call(this);
    this.makeContent();
}

Content.prototype = Object.create(Node.prototype);

Content.prototype.makeContent = function () {
	this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(w, h-150)
        .setAlign(0.5, 0.5)
    	.setMountPoint(0.5, 0.5);
    this.el = new DOMElement(this, { 
        tagName: 'div',
        properties: {
            backgroundColor: "#E8E8E8 ",
            zIndex: 20
        }
    });
    this.textNode = this.addChild();

    this.textNode
   		.setSizeMode('absolute', 'absolute')
    	.setAbsoluteSize(w, 50)
   		.setAlign(0.5, 0.5)
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);

   var textElement = new DOMElement(this.textNode, {
   		classes: ['textContent'],
    	tagName: 'div',
    	content: "Hello"
    });
};

Content.prototype.setText = function (text) {
	var textElement = new DOMElement(this.textNode, {
		classes: ['textContent'],
    	tagName: 'div',
    	content: text
    });
};

module.exports = Content;