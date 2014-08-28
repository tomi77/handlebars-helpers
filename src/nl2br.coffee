Handlebars.registerHelper 'nl2br', (value) ->
  if value then new Handlebars.SafeString value.replace(/\n/gm, '<br/>') else ''