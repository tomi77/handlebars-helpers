Handlebars = require 'handlebars'
_ = require 'underscore'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/neq.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
  _: _
script.runInNewContext context

describe 'A neq Handlebars helper', () ->
  'use strict'

  it 'should return true if first parameter is not equal (!==) each others parameters', () ->
    template = Handlebars.compile '{{#if (neq a b)}}yes{{else}}no{{/if}}'

    expect(template({a: 1, b: 1})).toBe 'no'
    expect(template({a: 1, b: 0})).toBe 'yes'
    expect(template({a: 1, b: '1'})).toBe 'yes'
    expect(template({a: '1', b: '1'})).toBe 'no'

    template = Handlebars.compile '{{#if (neq a b c)}}yes{{else}}no{{/if}}'

    expect(template({a: 1, b: 1, c: 0})).toBe 'no'
    expect(template({a: 1, b: 0, c: 1})).toBe 'no'
    expect(template({a: 1, b: 2, c: 0})).toBe 'yes'