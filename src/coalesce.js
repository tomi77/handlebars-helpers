Handlebars.registerHelper('coalesce', function() {
  var options, values;
  values = Array.prototype.slice.call(arguments);
  options = values.pop();
  values = _.compact(values);
  if (values.length > 0) {
    return values[0];
  } else {
    return '';
  }
});
