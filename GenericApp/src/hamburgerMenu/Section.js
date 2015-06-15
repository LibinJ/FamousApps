var DOMElement = require('famous/dom-renderables/DOMElement');
var Node = require('famous/core/Node');

function Section(mount) {
    // Extend Node
    Node.call(this);
    this.dom = new DOMElement(this, { 
	    tagName: 'iframe',
	    attributes: {
	    	width: '100%',
	    	height: '100%',
	    	src: 'http://www.youtube.com/embed/TvKymDP85JI?rel=0&autoplay=1',
	    	frameborder: 0
	    },
	    properties: {
            zIndex: 10
        }
	});
}

Section.prototype = Object.create(Node.prototype);

module.exports = Section;