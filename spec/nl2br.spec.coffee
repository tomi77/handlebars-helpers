Handlebars = require 'handlebars'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/nl2br.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
script.runInNewContext context

describe 'A nl2br Handlebars helper', () ->
  'use strict'

  it 'should replace new line to br html tag', () ->
    template = Handlebars.compile '{{nl2br text}}'

    expect(template({text: undefined})).toBe ''
    expect(template({text: null})).toBe ''
    expect(template({text: ''})).toBe ''
    expect(template({text: 'test'})).toBe 'test'
    expect(template({text: 'test\ntest'})).toBe 'test<br/>test'