Handlebars.registerHelper 'neq', (val1, vals...) ->
  _.all vals, (val) -> val1 isnt val
