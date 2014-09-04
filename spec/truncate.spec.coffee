Handlebars = require 'handlebars'
_s = require 'underscore.string'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../../src/underscore.string/underscore.string.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
  _s: _s
script.runInNewContext context

describe 'A truncate Handlebars helper', () ->
  'use strict'

  it 'should truncate', () ->
    template = Handlebars.compile '{{truncate str pos more}}'

    expect(template({str: 'Hello world', pos: 6, more: 'read more'})).toBe 'Hello read more'
    expect(template({str: 'Hello world', pos: 5, more: undefined})).toBe 'Hello...'
    expect(template({str: 'Hello', pos: 10, more: undefined})).toBe 'Hello'
    expect(template({str: '', pos: 10, more: undefined})).toBe ''
    expect(template({str: null, pos: 10, more: undefined})).toBe ''
    expect(template({str: undefined, pos: 10, more: undefined})).toBe ''
    expect(template({str: 1234567890, pos: 5, more: undefined})).toBe '12345...'