Handlebars = require 'handlebars'
_s = require 'underscore.string'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/sprintf.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
  _s: _s
script.runInNewContext context

describe 'A sprintf Handlebars helper', () ->
  'use strict'

  it 'should format', () ->
    template = Handlebars.compile '{{sprintf value format}}'

    expect(template({value: 1, format: '%.2f'})).toBe '1.00'
    expect(template({value: 2, format: '%d'})).toBe '2'