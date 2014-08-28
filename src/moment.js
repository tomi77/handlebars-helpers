Handlebars.registerHelper('moment', function(value, format) {
  return moment(value).format(format);
});
