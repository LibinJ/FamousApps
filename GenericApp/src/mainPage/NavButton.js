var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;

function NavButton(id, status) {
    // Extend Node
    Node.call(this);
    
    this.el = makeEl(this);

    this.id = id;
    this.el.setContent(id);
        
    this.addUIEvent('click');
}

NavButton.prototype = Object.create(Node.prototype);


function makeEl(node){
	 return new DOMElement(node, {
        properties: {
            textAlign: 'center',
            lineHeight: '100px',
            fontSize: '18px',
            color: 'White',
            zIndex: 30,
            cursor: 'pointer'
        }
    });
}

module.exports = NavButton;