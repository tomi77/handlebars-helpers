Handlebars.registerHelper('neq', function() {
  var val1, vals;
  vals = Array.prototype.slice.call(arguments);
  val1 = vals.shift();
  return _.all(vals, function(val) {
    return val1 !== val;
  });
});
