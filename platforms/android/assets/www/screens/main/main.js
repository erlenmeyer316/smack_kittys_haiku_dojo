define(['jquery', 'radio', 'haikuValidator', 'styleLoader', 'templateLoader', 'text!screens/main/main.tmpl.html'], function ($, Radio, HaikuValidator, StyleLoader, TemplateLoader, Template) {
    var CONST_SCREEN_ID = 'mainScreen';
    var CONST_SCREEN_STYLE = 'screens/main/main.css';
    var CONST_FRM_ID = "frmHaiku";
    var CONST_TXTLINE1_ID = 'txtLine1';
    var CONST_TXTLINE2_ID = 'txtLine2';
    var CONST_TXTLINE3_ID = 'txtLine3';
    var CONST_BTN_CHECK_ID = 'btnCheck';
    var CONST_BTN_RESET_ID = 'btnReset';

     var updateView = function(count, line){
        var txt_line_id = '';
        var req_count = 0;
        switch(line){
            case 1:
                txt_line_id = CONST_TXTLINE1_ID;
                req_count = 5;
                break;
            case 2:
                txt_line_id = CONST_TXTLINE2_ID;
                req_count = 7;
                break;
            case 3:
                txt_line_id = CONST_TXTLINE3_ID;
                req_count = 5;
                break;
            default:
                txt_line_id = '';
                req_count = 0;
        }
             
        if(count != req_count){     
            addLineStyle(txt_line_id, true);            
        }

        if(count == req_count){            
            addLineStyle(txt_line_id, false);
        }

    };

    var bindControls = function(){
        $('#' +  CONST_BTN_CHECK_ID).click(function(){
            HaikuValidator.check($('#' + CONST_TXTLINE1_ID).val(),
                                $('#' + CONST_TXTLINE2_ID).val(),
                                $('#' + CONST_TXTLINE3_ID).val());
        });
        
        $('#' + CONST_BTN_RESET_ID).click(function(){
            resetLine(CONST_TXTLINE1_ID);
            resetLine(CONST_TXTLINE2_ID);
            resetLine(CONST_TXTLINE3_ID);
        });
    };

    var resetLine = function(lineId){
        $('#' + lineId).removeClass('lineError');
        $('#' + lineId).removeClass('lineValid');
        $('#' + lineId).val('');
    };
        
    var addLineStyle = function(lineId, error){
        if(error){
            $('#' + lineId).removeClass('lineValid');
            $('#' + lineId).addClass('lineError');
        } else {
            $('#' + lineId).removeClass('lineError');
            $('#' + lineId).addClass('lineValid');
        }
    };


    var load = function (element) {
        StyleLoader.load(CONST_SCREEN_STYLE);
        TemplateLoader.load(Template, null, null, element, function () {
            
            bindControls();
        });
    };
    
    Radio(HaikuValidator.HaikuLineCheckEvent).subscribe(function(result){
        updateView(result.count, result.line);        
    });

    return {
        id: CONST_SCREEN_ID,
        load: load
    };
});
