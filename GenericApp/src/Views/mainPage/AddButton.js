var famous = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function AddButton(mount) {
    // Extend Node
    Node.call(this);

    this.setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(theme.AddButton.width, theme.AddButton.height)
            .setPosition(innerWidth-theme.AddButton.position*2, theme.AddButton.position);


    this.el = new DOMElement(this, {
        tagName: 'div',
        content: '<i class="fa fa-plus fa-2x button-color"></i>',
        properties: {
            backgroundColor: theme.headerBackgroundColor,
            zIndex: 10
        }
    });

    this.type='AddButton';
    this.addUIEvent('click');
}

AddButton.prototype = Object.create(Node.prototype);

AddButton.prototype.onReceive = function onReceive(event, payload) {
    // console.log(event, payload);
    if (event == 'click' && payload.node.type == 'AddButton') {
        var header = this.getParent();
        var main = header.getParent();
        // console.log(main.content.sections[header.title].section);
        // console.log(header.title);
        var collection = main.content.sections[header.title].section.collection;
        collection.create({
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2IdoBoQd-X8igDW-oGJMBVTTIfn1lGs-2PoyBNMsVO0LImM_4eQ',
            type: header.title
        });
    }
}

module.exports = AddButton;
