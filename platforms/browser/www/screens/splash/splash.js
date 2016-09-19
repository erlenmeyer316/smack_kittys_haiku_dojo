define(['jquery', 'radio', 'handlebars', 'styleLoader', 'templateLoader', 'text!screens/splash/splash.tmpl.html'], function ($, Radio, Handlebars, StyleLoader, TemplateLoader, Template) {
    var CONST_SCREEN_ID = 'splashScreen';
    var CONST_SCREEN_STYLE = 'screens/splash/splash.css';
    var CONST_AVATAR_ID = 'avatar';
    var CONST_AVATAR_ANIM_MS = 1000;
    var CONST_AVATAR_ANIM_TOP_VAL = '20em';
    var CONST_WRITE_BTN_ID = 'write-btn';
    var CONST_WRITE_BTN_EVENT_ID = 'splashScreen.writeClick';
    var CONST_ABOUT_BTN_ID = 'about-btn';
    var CONST_ABOUT_BTN_EVENT_ID = 'splashScreen.aboutClick';
    var CONST_BTN_ANIM_SPEED = 'slow';
    var CONST_SCREEN_EVENT_DELEGATE = 'splashScreen.event';
    
    var animate = function () {
        $('#' + CONST_AVATAR_ID).animate({
            top: CONST_AVATAR_ANIM_TOP_VAL
        }, CONST_AVATAR_ANIM_MS, function () {
            $('#' + CONST_WRITE_BTN_ID + '>a').show(CONST_BTN_ANIM_SPEED, function () {});
            $('#' + CONST_ABOUT_BTN_ID + '>a').show(CONST_BTN_ANIM_SPEED, function () {});            
        });
    };

    var bindControls = function () {
        $('#' + CONST_WRITE_BTN_ID).click(function(){
            Radio(CONST_SCREEN_EVENT_DELEGATE).broadcast(CONST_WRITE_BTN_EVENT_ID);
        });
        
        $('#' + CONST_ABOUT_BTN_ID).click(function(){
            Radio(CONST_SCREEN_EVENT_DELEGATE).broadcast(CONST_ABOUT_BTN_EVENT_ID);
        });
    };

    var load = function (element) {
        StyleLoader.load(CONST_SCREEN_STYLE);
        TemplateLoader.load(Template, null, null, element, function () {
            animate();            
            bindControls();
        });               
    };
    
    var unload = function () {
        StyleLoader.unload(CONST_VIEW_STYLE);
    };        

    return {
        id: CONST_SCREEN_ID,
        load: load,        
        unload: unload,
        events: CONST_SCREEN_EVENT_DELEGATE,
        writeEventId: CONST_WRITE_BTN_EVENT_ID,
        aboutEventId: CONST_ABOUT_BTN_EVENT_ID
        
    };
});
