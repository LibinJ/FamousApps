var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function AddButton(mount) {
    // Extend Node
    Node.call(this);

    this.setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(theme.AddButton.width, theme.AddButton.height)
            .setPosition(innerWidth-innerWidth/10, 0);

    this.el = new DOMElement(this, {
        classes: ['add-button'],
        tagName: 'div',
        content: '+',
        properties: {
            backgroundColor: theme.headerBackgroundColor,
            zIndex: 10
        }
    });

    this.addUIEvent('click');
}

AddButton.prototype = Object.create(Node.prototype);

AddButton.prototype.onReceive = function onReceive(event, payload){
    // console.log("this method got called")
    if (event === 'click') {
        console.log(event);        
        console.log(payload);
    };
}

module.exports = AddButton;
