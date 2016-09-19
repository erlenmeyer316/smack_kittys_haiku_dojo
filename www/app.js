define(['jquery', 'radio', 'screenSplash', 'screenMain'], function ($, Radio, ScreenSplash, ScreenMain) {

    ScreenSplash.load();

    Radio(ScreenSplash.events).subscribe(function(eventId){
        switch(eventId){
            case ScreenSplash.writeEventId:
                ScreenMain.load();
                break;
            case ScreenSplash.aboutEventId():
            default:
                alert('Not Implemented in App Controller!');
                break;
        }
        
        
        if(eventId == ScreenSplash.writeEventId){
            
        }
        
    });        
});