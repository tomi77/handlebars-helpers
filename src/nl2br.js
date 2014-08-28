Handlebars.registerHelper('nl2br', function (value) {
    if (value) {
        return new Handlebars.SafeString(value.replace(/\n/gm, '<br/>'));
    } else {
        return '';
    }
});