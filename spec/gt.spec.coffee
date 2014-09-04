Handlebars = require 'handlebars'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/gt.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
script.runInNewContext context

describe 'A gt Handlebars helper', () ->
  'use strict'

  it 'should return true if first parameter is greater than second parameter', () ->
    template = Handlebars.compile '{{#if (gt a b)}}yes{{else}}no{{/if}}'

    expect(template({a: 1, b: 1})).toBe 'no'
    expect(template({a: 1, b: 0})).toBe 'yes'
    expect(template({a: 0, b: 1})).toBe 'no'