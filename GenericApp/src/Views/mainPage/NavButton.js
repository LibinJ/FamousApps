var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var theme = require('../../Theme');

function NavButton(id, status) {
    // Extend Node
    Node.call(this);
    this.el = makeEl(this);
    this.id = id;
    this.el.setContent(id);
    this.type = 'NavButton';
    this.addUIEvent('click');
}

NavButton.prototype = Object.create(Node.prototype);

NavButton.prototype.onReceive = function onReceive (event, payload) {
    if (event === 'changeSection') {
        // swap on/off depend if this button points
        // to the apps current section
        if (payload.to === this.getId()) 
            this.on();
        else 
            this.off();
    }
};

NavButton.prototype.getId = function(){
    return this.id;
}

NavButton.prototype.on = function on () {
    this.el.removeClass('off').addClass('on');
};

NavButton.prototype.off = function off () {
    this.el.removeClass('on').addClass('off');
};

function makeEl(node){
	 return new DOMElement(node, {
        properties: {
            textAlign: 'center',
            lineHeight: theme.NavButton.lineHeight,
            fontSize: theme.NavButton.fontSize,
            color: theme.NavButton.color,
            zIndex: 30,
            cursor: 'pointer'
        }
    });
}

module.exports = NavButton;