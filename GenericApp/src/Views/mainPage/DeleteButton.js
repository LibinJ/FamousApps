var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function DeleteButton(options) {
    // Extend Node
    Node.call(this);

    this.setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(innerWidth/20, innerHeight/20)
            .setPosition(innerWidth-innerWidth/20, 0);
            // .setPosition(0, 0);


    this.el = new DOMElement(this, {
        classes: ['delete-button'],
        tagName: 'div',
        content: 'X',
        properties: {
            backgroundColor: theme.deleteButtonColor,
            opacity: 0.5,
            zIndex: 10
        }
    });

    this.addUIEvent('click');
}

DeleteButton.prototype = Object.create(Node.prototype);

DeleteButton.prototype.onReceive = function onReceive(event, payload){
    // console.log("this method got called")
    if (event === 'click') {
        console.log(event);        
        console.log(payload);
    };
}

module.exports = DeleteButton;