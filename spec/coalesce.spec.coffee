Handlebars = require 'handlebars'
_ = require 'underscore'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/coalesce.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
  _: _
script.runInNewContext context

describe 'A coalesce Handlebars helper', () ->
  'use strict'

  it 'should return first not empty parameter', () ->
    template = Handlebars.compile '{{coalesce a b}}'

    expect(template({a: 'not null 1', b: 'not null 2'})).toBe 'not null 1'
    expect(template({a: '', b: 'not null'})).toBe 'not null'
    expect(template({a: null, b: 'not null'})).toBe 'not null'
    expect(template({a: undefined, b: 'not null'})).toBe 'not null'
    expect(template({a: null, b: null})).toBe ''