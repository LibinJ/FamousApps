var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;

var w = innerWidth;
var h = innerHeight;

function Header(mount) {
    // Extend Node
    Node.call(this);

    makeEl.call(this);
}

Header.prototype = Object.create(Node.prototype);

function makeEl(){ 
    this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(w, 75)
        .setAlign(0.5, 75/(2*h))
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);
    this.el = new DOMElement(this, { 
        properties: {
            backgroundColor: "#484848",
            zIndex: 25
        }
    });

    this.titleNode = this.addChild();

    this.titleNode
        .setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(w, 50)
        .setAlign(0.5, 0.5)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5);

   var titleElement = new DOMElement(this.titleNode, {
        classes: ['titleContent'],
        tagName: 'div',
        content: "Main"
    });
}

Header.prototype.onReceive = function onReceive (event, payload) {
    console.log("receive");
    console.log(payload.node);
    console.log(event);
    var textElement = new DOMElement(this.titleNode, {
        classes: ['textContent'],
        tagName: 'div',
        content: "change"
    });
};

module.exports = Header;