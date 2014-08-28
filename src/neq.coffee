Handlebars.registerHelper 'neq', ->
  vals = Array.prototype.slice.call arguments
  val1 = vals.shift()

  _.all vals, (val) ->
    val1 isnt val