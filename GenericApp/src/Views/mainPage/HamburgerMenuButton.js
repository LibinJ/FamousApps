var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function HamburgerMenuButton(mount) {
    // Extend Node
    Node.call(this);

    this.type = 'HamburgerMenuButton';

    this.setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(theme.HamburgerMenuButton.width, theme.HamburgerMenuButton.height)
            .setPosition(theme.HamburgerMenuButton.position*2, theme.HamburgerMenuButton.position);

    this.el = new DOMElement(this, {
        tagName: 'div',
        content: '<i class="fa fa-bars fa-2x button-color"></i>',
        properties: {
            backgroundColor: theme.headerBackgroundColor,
            zIndex: 10
        }
    });

    this.addUIEvent('click');
}

HamburgerMenuButton.prototype = Object.create(Node.prototype);

// HamburgerMenuButton.prototype.onReceive = function onReceive(event, payload){
//     // console.log("this method got called")
//     if (event === 'click') {
//         console.log(event);        
//         console.log(payload);
//     };
// }

module.exports = HamburgerMenuButton;
