var famous  = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var Align = famous.components.Align;
var FooterButton = require('./FooterButton');
var Section = require('./Section');

var w = innerWidth;
var h = innerHeight;

function Content(mount) {
    // Extend Node
    Node.call(this);

    this
        .setDifferentialSize(0, -150, null)
        .setPosition(0, 75);

    this.el = new DOMElement(this).setProperty('overflow-y', 'scroll')
                                  .setProperty('overflow-x', 'hidden')
                                  .setProperty('background-color', '#888888');

    this.currentSection = null;
    this.sections = createSections.call(this);
}

Content.prototype = Object.create(Node.prototype);

Content.prototype.changeSection = function (to) {
	FooterButton.sections.forEach(function (section) {
        if (section.id === to) 
            this.sections[section.id].align.set(0, 0, 0, {
                duration: 500
            });
        else
            this.sections[section.id].align.set(1, 0, 0, {
                duration: 500
            });
    }.bind(this));

    this.currentSection = to;
};

Content.prototype.onReceive = function onReceive (event, payload) {
    if (event === 'changeSection') ;
        this.changeSection(payload.to);
};

function createSections () {
    var result = {};

    FooterButton.sections.forEach(function (section, i) {
        var child = this.addChild();
        result[section.id] = {
            align: new Align(child),
            section: child.addChild(new Section(section.id))
        }
    }.bind(this));

    return result;
}

module.exports = Content;