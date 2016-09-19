requirejs.config({
    paths: {
        //bower_components
        text: ['bower_components/text/text'],
        jquery: ['bower_components/jquery/dist/jquery.min'],
        bootstrap: ['bower_components/bootstrap/dist/js/bootstrap.min'],        
        handlebars: ['bower_components/handlebars/handlebars.min'],
        radio: ['bower_components/radio/radio'],
        //modules
        styleLoader: ['modules/styleLoader'],
        templateLoader: ['modules/templateLoader'],
        haikuValidator: ['modules/haikuValidator'],
        syllableCount: ['modules/syllableCount/syllableCount'],        
        //app controller
        app: ['app'],
        //screens
        screenSplash: ['screens/splash/splash'],
        screenMain: ['screens/main/main'],
    },
    shim: {
        'bootstrap': {
            exports: '$',
            deps: ['jquery']
        }       
    }

});
