var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var NavButton = require('./NavButton');

var numSections = FooterButton.sections.length;
var w = innerWidth;
var h = innerHeight;

function Footer(mount) {
    // Extend Node
    Node.call(this);

    this.buttons = {};

    makeEl.call(this);

    FooterButton.sections.forEach(function (section, i) {
        this.buttons[section.id] = this.addChild(new NavButton(section.id))
                                       .setProportionalSize(1 / numSections)
                                       .setAlign(i / numSections);
    }.bind(this));
}

Footer.prototype = Object.create(Node.prototype);

function makeEl(){ 
    this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(w, 75)
        .setAlign(0.5, 1-75/(2*h))
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);
    this.el = new DOMElement(this, { 
        properties: {
            zIndex: 25
        }
    });
}

module.exports = Footer;