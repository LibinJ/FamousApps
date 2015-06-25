var loadTheme = _.memoize(function() {
    var headerHeight = 75;
    var footerHeight = 75;
    return {
        headerHeight: headerHeight,
        footerHeight: footerHeight,
        backgoundColor1: 'rgb(50,56,77)',
        backgoundColor2: 'rgb(0,0,0)',
        textColor: 'rgb(223,242,153)',
        panelColor: 'rgb(223,242,153)',
        panelTextColor: 'rgb(50,56,77)',
        otherColor1: 'rgb(50,56,77)',
        otherColor2: 'rgb(237,240,242)',
        black: 'black',
        imageItem: {
            width: innerWidth,
            height: (innerHeight - footerHeight - headerHeight)/2
        }
    };
});
module.exports = loadTheme();