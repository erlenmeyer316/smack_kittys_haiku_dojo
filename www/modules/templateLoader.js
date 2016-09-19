define(['jquery', 'handlebars'], function ($, Handlebars) {

    var load = function (template, partials, context, elem, callback) {
        var tmpl = Handlebars.compile(template);
        if (partials) {
            for (var i = 0; i < partials.length; i++) {
                Handlebars.registerPartial(partials[i].name, partials[i].template);
            }
        }
        if (!elem) {
            $("body").html(tmpl(context));
        } else {
            $("#" + elem).html(tmpl(context));
        }

        if(callback){
            callback();
        }

    };

    return {
        load: load
    };
});
