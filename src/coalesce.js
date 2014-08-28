Handlebars.registerHelper('coalesce', function () {
    var values = Array.prototype.slice.call(arguments);
    var options = values.pop();
    values = _.compact(values);
    return values.length > 0 ? values[0] : '';
});