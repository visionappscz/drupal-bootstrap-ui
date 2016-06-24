'use strict';

module.exports = {

  less: {
    files: ['<%= paths.src %>/less/**/*.less'],
    tasks: ['build-css'],
  },
  js: {
    files: ['<%= paths.dist %>/js/*.js'],
    tasks: ['test-js'],
  },
  images: {
    files: ['<%= paths.src %>/images/**/*'],
    tasks: ['build-images'],
  },

};
