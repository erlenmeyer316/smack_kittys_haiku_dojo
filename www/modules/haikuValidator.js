define(['jquery', 'radio', 'syllableCount'], function ($, Radio, SyllableCount) {    
    var CONST_HAIKU_LINE_CHK_EVNT_ID = 'haiku.CheckedEvent';

    var checkHaiku = function (line1, line2, line3) {
        SyllableCount.count(line1, 1);
        SyllableCount.count(line2, 2);
        SyllableCount.count(line3, 3);
    };
    
    Radio(SyllableCount.event).subscribe(function(result){
        var sylCnt = 0;        
        
        for (var i = 0; i < result.words.length; i++) {
            if(result.words[i].alt == 1){
                sylCnt += result.words[i].count;    
            }            
        }
         
        Radio(CONST_HAIKU_LINE_CHK_EVNT_ID).broadcast({
            count: sylCnt,
            line: result.lineNumber
        });
    });
    
    return {
        check: checkHaiku,
        HaikuLineCheckEvent: CONST_HAIKU_LINE_CHK_EVNT_ID
    };
});
