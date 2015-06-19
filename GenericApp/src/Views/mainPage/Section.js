var famous = require('famous');
var DOMElement = famous.domRenderables.DOMElement;
var Node = famous.core.Node;
var FooterButton = require('./FooterButton');
var Align = require('famous/components/Align');
var PhotoCollection = require('../../Models/PhotoCollection');
var Image = require('./Image');

var w = innerWidth;
var h = innerHeight;
var i = 0;
var imageModelArray = [];

function Section(category) {
    Node.call(this);
    console.log(category);
    // this.category = 'Dog';
    this.category = category;
    this.collection = PhotoCollection.load('jeff');
    // this.imgs = createImages.call(this, i);
    handleCollection.call(this);
    _debug.call(this);

}


Section.prototype = Object.create(Node.prototype);

function handleCollection() {
    // this.collection.on('all', function(collection) {
    //     console.log(collection);
    // });
    this.collection.once('sync', function(collection) {
        createImages.call(this, collection);
        this.collection.on('add', function(model) {
            if(model.get('type')==this.category)
                addImages.call(this, model);
        }.bind(this));
        this.collection.on('remove', function(model){
            if(model.get('type')==this.category){
                removeImage.call(this, model);
            }
        }.bind(this));
    }.bind(this));
}

function _debug() {
    if (app && app.debug) {
        window.photoCollection = this.collection;
        window.imageModelArray = imageModelArray;
    }
}

function createImages(collection) {
    //var result = [];
    var img;
    var positionIdx=0;
    var satisfiedImg = collection.filter(function(model) {
        return model.get('type')==this.category;
    }.bind(this));
    // console.log(satisfiedImg);
    for (i = 0; i < satisfiedImg.length; i++) {
        var mdl = satisfiedImg[i];
        //console.log(mdl);
        img = this.addChild()
            .setSizeMode('default', 'absolute')
            .setAbsoluteSize(w, h - 100)
            .setPosition(0, (h - 150) * i)
            .addChild(new Image({
                model: mdl
            }));
        imageModelArray.push(mdl);   
    }
    //return result;
};

function addImages(mdl){
    i++;
    var newimage = this.addChild()
        .setSizeMode('default', 'absolute')
        .setAbsoluteSize(w, h - 100)
        .setPosition(0, (h - 150) * i)
        .addChild(new Image({
             model: mdl
         }));
    imageModelArray.push(mdl); 
};

function removeImage(mdl){
    var idx=0;
    for(var j = 0; j < imageModelArray.length; j++){
        if(mdl.get('imageUrl') == imageModelArray[j].get('imageUrl')){
            idx=j
        } else if (imageModelArray[j].get('type')==this.category) {
            var img = this.addChild()
                .setSizeMode('default', 'absolute')
                .setAbsoluteSize(w, h - 100)
                .setPosition(0, (h - 150) * i)
                .addChild(new Image({
                    model: imageModelArray[j]
                }));
        }
    }
    imageModelArray.splice(idx, 1);
}

module.exports = Section;
