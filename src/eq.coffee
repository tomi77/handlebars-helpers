Handlebars.registerHelper 'eq', ->
  vals = Array.prototype.slice.call arguments
  val1 = vals.shift()

  _.any vals, (val) ->
    val1 is val