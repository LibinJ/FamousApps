var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;

function DeleteButton(options) {
    // Extend Node
    Node.call(this);

    this.setSizeMode('default', 'absolute')
            .setAbsoluteSize(innerWidth/20, innerHeight/20)
            .setPosition(innerWidth-innerWidth/20, 0);

    this.el = new DOMElement(this, {
        classes: ['textContent'],
        tagName: 'div',
        content: 'X',
        properties: {
            backgroundColor: "#000000",
            zIndex: 10
        }
    });
}

DeleteButton.prototype = Object.create(Node.prototype);

module.exports = DeleteButton;