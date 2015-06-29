var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var Align = famous.components.Align;
var AddButton = require('./AddButton');
var HamburgerMenuButton = require('./HamburgerMenuButton');
var theme = require('../../Theme');

var w = innerWidth;
var h = innerHeight;

function Header(mount) {
    // Extend Node
    Node.call(this);
    makeEl.call(this);
    addButtons.call(this);
}

Header.prototype = Object.create(Node.prototype);

function makeEl(){ 
    this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(w, theme.headerHeight)
        .setAlign(0.5, 75/(2*h))
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);
    this.el = new DOMElement(this, {
        classes: ["header"],
        properties: {
            backgroundColor: theme.headerBackgroundColor,
            zIndex: 25
        }
    });

    this.titleNode = this.addChild();
    this.titleElement = new DOMElement(this.titleNode, {
         classes: ['titleContent'],
         tagName: 'div',
         content: "Home"
    });
}

Header.prototype.onReceive = function onReceive (event, payload) {
    if (event === 'changeSection') 
        this.changeSection(payload.to);
};

Header.prototype.changeSection = function changeSection (to) {
    var titleAlign = new Align(this.titleNode);
    titleAlign.set(0, -1, 0, {
        duration: 250,
    }, function(){
        this.titleElement.setContent(to);
        this.title=to;
        titleAlign.set(0, 0, 0, {
            duration: 250,
        });
    }.bind(this));
};

function addButtons(){ 
    this.addChild(new AddButton());
    this.addChild(new HamburgerMenuButton());
}

module.exports = Header;