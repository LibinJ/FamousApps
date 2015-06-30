var famous  = require('famous');
var GestureHandler = famous.components.GestureHandler;
var Align = famous.components.Align;

function DragComp (node, option) {
	this.node = node;
	var childrenArray = node.getChildren();
	var gestures = [];
    return;
	for(var i = 0; i < childrenArray.length; i++){ 
        if(childrenArray[i] == null)
            continue;
        var flag = 0;
		gestures[i] = new GestureHandler(childrenArray[i]);
    	gestures[i].on('drag', function drag(e) {
            console.log(e);
            console.log("flag: " + flag);
            switch(e.status) {
                case 'move':
                    if(this.flag == 0 && e.center.x < 2/3 * innerWidth){
                        node.setPosition(e.center.x, 0, 0);
                    }
                    break;
                case 'start':
                    if(Math.abs(e.centerVelocity.y) > 50){
                        //e.defaultPrevented();
                        this.flag = 1;
                    }
                    break;
                case 'end':
                    if(this.flag == 0){
                        if(e.centerVelocity.x > 0 ){
                            node.setPosition(2/3 * innerWidth, 0, 0);
                        }
                        else if(e.centerVelocity.x  < 0){
                            node.setPosition(0, 0, 0);
                        }
                    }
                    break;
            }
        });
	}
}

module.exports = DragComp;
