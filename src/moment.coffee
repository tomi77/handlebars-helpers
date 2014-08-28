Handlebars.registerHelper 'moment', (value, format) ->
  moment value
  .format format