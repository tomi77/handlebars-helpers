Handlebars.registerHelper 'coalesce', (values..., options) ->
  values = _.compact values
  if values.length > 0 then values[0] else ''
