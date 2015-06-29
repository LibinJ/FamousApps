var famous  = require('famous');
var GestureHandler = famous.components.GestureHandler;
var Align = famous.components.Align;

function DragComp (node, option) {
	this.node = node;
	var childrenArray = node.getChildren();
	var gestures = [];
	for(var i = 0; i < childrenArray.length; i++){ 
        if(childrenArray[i] == null)
            continue;
		gestures[i] = new GestureHandler(childrenArray[i]);
    	gestures[i].on('drag', function drag(e) {
            //console.log(e);
            switch(e.status) {
                case 'move':
                    if(e.center.x > 0 && e.center.x < 2/3 * innerWidth){
                        node.setPosition(e.center.x, 0, 0);
                    }
                    break;
                case 'start':
                    break;
                case 'end':
                    if(e.centerVelocity.x > 0){
                        node.setPosition(2/3 * innerWidth, 0, 0);

                    }
                    else if(e.centerVelocity.x  < 0){
                        node.setPosition(0, 0, 0);
                    }
                    // console.log(node.content.sections.Cat.section);
                    // node.content.sections.Cat.section.handleCollection();
                    // });
                    break;
            }
        });
	}
}

module.exports = DragComp;
