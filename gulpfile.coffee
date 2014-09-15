gulp = require 'gulp'
uglify = require 'gulp-uglify'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
rename = require 'gulp-rename'
wrap = require 'gulp-wrap-umd'

deps = [
  {name: 'handlebars', globalName: 'Handlebars', paramName: 'Handlebars'}
  {name: 'underscore', globalName: '_', paramName: '_'}
  {name: 'moment'}
]

gulp.task 'default', ->
  gulp.src './src/*.coffee'
  .pipe coffee bare: true, expand: true, flatten: true
  .pipe concat 'handlebars-helpers.js'
  .pipe wrap namespace: 'HandlebarsHelpers', exports: 'Handlebars', deps: deps
  .pipe gulp.dest './dist/'
  .pipe uglify()
  .pipe rename extname: '.min.js'
  .pipe gulp.dest './dist/'