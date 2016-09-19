requirejs(['cordova.js'],
    function () {
        // start of require

        // cordova is now available globally
        var exec = cordova.require('cordova/exec');

        var device = {
            // Application Constructor
            initialize: function () {
                this.bindEvents();
            },
            // Bind Event Listeners
            //
            // Bind any events that are required on startup. Common events are:
            // 'load', 'deviceready', 'offline', and 'online'.
            bindEvents: function () {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
            // deviceready Event Handler
            //
            // The scope of 'this' is the event. In order to call the 'receivedEvent'
            // function, we must explicity call 'app.receivedEvent(...);'
            onDeviceReady: function () {
                device.receivedEvent('deviceready');
            },
            // Update DOM on a Received Event
            receivedEvent: function (id) {
                switch (id) {
                case 'deviceready':
                    device.loadRequireJsConfig();
                    break;
                default:
                    break;
                }
            },
            loadRequireJsConfig: function () {
                require(['config.js'], function () {
                    //init app here
                    require(['app'], function () {

                    });
                });
            }
        };

        device.initialize();

        // end of require
    });
