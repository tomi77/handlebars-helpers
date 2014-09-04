Handlebars = require 'handlebars'
moment = require 'moment'
fs = require 'fs'
vm = require 'vm'
path = require 'path'
CoffeeScript = require 'coffee-script'

helper = fs.readFileSync path.join __dirname, '/../src/moment.coffee'
script = vm.createScript CoffeeScript.compile helper.toString()
context =
  Handlebars: Handlebars
  moment: moment
script.runInNewContext context

describe 'A moment Handlebars helper', () ->
  'use strict'

  it 'should format timestamp', () ->
    template = Handlebars.compile '{{moment ts format}}'
    ts = new Date(2014, 5, 20, 22, 42, 15).valueOf();

    expect(template({ts: ts, format: 'YYYY'})).toBe '2014'
    expect(template({ts: ts, format: 'MM'})).toBe '06'
    expect(template({ts: ts, format: 'DD'})).toBe '20'
    expect(template({ts: ts, format: 'HH'})).toBe '22'
    expect(template({ts: ts, format: 'mm'})).toBe '42'
    expect(template({ts: ts, format: 'ss'})).toBe '15'