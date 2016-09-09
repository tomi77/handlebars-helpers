Handlebars.registerHelper 'eq', (val1, vals...) ->
  _.any vals, (val) -> val1 is val
