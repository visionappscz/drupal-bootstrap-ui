'use strict';

module.exports = {

  'test-js': [
    'jshint',
  ],

  'test': [
    'test-js',
  ],

  'build-css': [
    'less',
    'postcss',
  ],

  'build-images': [
    'svgmin',
    'imagemin',
  ],

  build: [
    'clean',
    'build-css',
    'build-images',
  ],

  dev: [
    'test',
    'build',
    'browserSync',
    'watch',
  ],

  default: [
    'test',
    'build',
  ],

};
