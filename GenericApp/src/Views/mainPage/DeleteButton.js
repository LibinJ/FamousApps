var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function DeleteButton(options) {
    // Extend Node
    Node.call(this);

    this.setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(theme.DeleteButton.width, theme.DeleteButton.height)
            .setPosition(innerWidth-theme.DeleteButton.width, 0);
    this.type = 'DeleteButton';

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
    if (event == 'click' && payload.node.type == 'DeleteButton') {
        var imageItem=this.getParent();
        var model=imageItem.model;
        var collection=imageItem.model.collection;
        collection.remove(model);
    }
}

module.exports = DeleteButton;