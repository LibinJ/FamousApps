window.app = {
    debug: true
}
var HamburgerMenu = require('./Views/hamburgerMenu/HamburgerMenu');
var Main = require('./Views/mainPage/Main');
var famous = require('famous');
var FamousEngine = famous.core.FamousEngine;

FamousEngine.init();
var scene = FamousEngine.createScene();
var hamburgerMenu = scene.addChild(new HamburgerMenu());
var page = scene.addChild(new Main());
//var test = scene.addChild(new Test());