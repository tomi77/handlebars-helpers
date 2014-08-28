Handlebars.registerHelper 'coalesce', ->
  values = Array.prototype.slice.call arguments
  options = values.pop()
  values = _.compact values
  if values.length > 0 then values[0] else ''