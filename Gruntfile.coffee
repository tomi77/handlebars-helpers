module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    concat:
      dist:
        src: 'src/*.js',
        dest: 'dist/handlebars-helpers.js'
        options:
          banner: """(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['handlebars', 'underscore', 'moment'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('handlebars'), require('underscore'), require('moment'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.Handlebars, root._, root.moment);
    }
}(this, function (Handlebars, _, moment) {
    'use strict';


"""
          footer: """

}));"""

    uglify:
      options:
        compress: true

      dist:
        files:
          'dist/handlebars-helpers.min.js': 'dist/handlebars-helpers.js'

    coffee:
      options:
        bare: true

      dist:
        expand: true
        flatten: true
        cwd: 'src'
        src: '*.coffee'
        dest: 'src'
        ext: '.js'

    clean: ['src/**/*.js']

  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'default', ['coffee', 'concat', 'uglify', 'clean']