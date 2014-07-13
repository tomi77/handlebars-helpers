define(['hbs/handlebars', 'underscore'], function (Handlebars, _) {
    function ifHasPerm() {
        //var permissions = require('permissions'),
        var permissions = window.permissions,
            options = arguments[arguments.length - 1],
            perms = [];
        for (var i = 0; i < arguments.length - 1; i++) {
            perms.push(arguments[i]);
        }
        return _.all(perms, function (perm) {
            return permissions.indexOf(perm) !== -1;
        }) ? options.fn(this) : options.inverse(this);
    }

    Handlebars.registerHelper('if_has_perm', ifHasPerm);
    return ifHasPerm;
});