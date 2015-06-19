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

function Section(category) {
    Node.call(this);
    console.log(category);
    // this.category = 'Dog';
    this.category = category;
    this.collection = PhotoCollection.load('jeff');
    // this.imgs = createImages.call(this, i);
    handleCollection.call(this);
    _debug.call(this);
    this.imageModelArray = [];
    this.imageNodeArray = [];

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
        window.imageModelArray = this.imageModelArray;
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
        this.imageModelArray.push(mdl);
        console.log(this.imageModelArray);
        this.imageNodeArray.push(img);   
    }
    //return result;
};

function addImages(mdl){
    i++;
    var newImage = this.addChild()
        .setSizeMode('default', 'absolute')
        .setAbsoluteSize(w, h - 100)
        .setPosition(0, (h - 150) * i)
        .addChild(new Image({
             model: mdl
         }));
    this.imageModelArray.push(mdl); 
    this.imageNodeArray.push(newImage);
};

function removeImage(mdl){
    var parent = this.imageNodeArray[0].getParent();
    for (var i=0; i<this.imageNodeArray.length; i++) {
        parent.removeChild(this.imageNodeArray[i]);
    }
    this.imageNodeArray=[];
    console.log(this.imageNodeArray);
}

module.exports = Section;
