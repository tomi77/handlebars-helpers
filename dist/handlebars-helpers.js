
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["handlebars","underscore","moment"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('handlebars'), require('underscore'), require('moment'));
  } else {
    root.HandlebarsHelpers = factory(root.Handlebars, root._, root.moment);
  }
}(this, function(Handlebars, _, moment) {

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

Handlebars.registerHelper('eq', function() {
  var val1, vals;
  vals = Array.prototype.slice.call(arguments);
  val1 = vals.shift();
  return _.any(vals, function(val) {
    return val1 === val;
  });
});

Handlebars.registerHelper('gt', function(val1, val2) {
  return val1 > val2;
});

Handlebars.registerHelper('gte', function(val1, val2) {
  return val1 >= val2;
});

Handlebars.registerHelper('lt', function(val1, val2) {
  return val1 < val2;
});

Handlebars.registerHelper('lte', function(val1, val2) {
  return val1 <= val2;
});

Handlebars.registerHelper('moment', function(value, format) {
  return moment(value).format(format);
});

Handlebars.registerHelper('neq', function() {
  var val1, vals;
  vals = Array.prototype.slice.call(arguments);
  val1 = vals.shift();
  return _.all(vals, function(val) {
    return val1 !== val;
  });
});

Handlebars.registerHelper('nl2br', function(value) {
  if (value) {
    return new Handlebars.SafeString(value.replace(/\n/gm, '<br/>'));
  } else {
    return '';
  }
});

return Handlebars;

}));
