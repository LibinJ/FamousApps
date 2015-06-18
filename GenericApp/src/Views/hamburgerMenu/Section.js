var famous = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;

var TitleProSize = .04;
var LabelProSize = .06;

function Section(title, labels, position, createSec) {
    // Extend Node
    Node.call(this);
    this.position = position;
    if (createSec)
        makeTitle.call(this, title);
    makeLabels.call(this, labels);
}

Section.prototype = Object.create(Node.prototype);

function makeTitle(titleContent) {
    this.title = this.addChild();
    this.title
        .setAlign(0, this.position, 0)
        .setProportionalSize(1, TitleProSize, 1);
    new DOMElement(this.title, {
        tagName: 'div1',
        content: titleContent,
        properties: {
            fontSize: TitleProSize * .8 * innerHeight + 'px',
            textAlign: 'center',
            backgroundColor: "hsl(120, 100%, 50%)"
        }
    });
    this.position += TitleProSize;
}

function makeLabels(ls, position) {
    var label = this.addChild()
    label
        .setAlign(0, this.position, 0)
        .setProportionalSize(1, LabelProSize, 1);
    new DOMElement(label, {
        tagName: 'div2',
        content: ls,
        properties: {
            fontSize: LabelProSize * .8 * innerHeight + 'px',
            textAlign: 'center',
            backgroundColor: "hsl(270, 100%, 50%)"
        }
    });
    this.position += LabelProSize;
}

module.exports = Section;
