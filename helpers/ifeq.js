define(['hbs/handlebars', 'underscore'], function (Handlebars, _) {
    function ifeq(val1, val2, options) {
        if (val1 === val2) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }

    Handlebars.registerHelper('ifeq', ifeq);
    return ifeq;
});