define([], function () {
    var load = function (script) {
        var cssNode = document.createElement('link');
        cssNode.type = 'text/css';
        cssNode.rel = 'stylesheet';
        cssNode.href = script;
        cssNode.media = 'screen';
        $('head').append(cssNode);
    };

    var unload = function (script) {
        $('link[rel=stylesheet][href~="' + script + '"]').remove();
    };


    return {
        load: load,
        unload: unload
    };

});
