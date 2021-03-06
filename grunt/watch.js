'use strict';

module.exports = {

  less: {
    files: ['<%= paths.src %>/less/**/*.less'],
    tasks: ['build-css'],
  },
  js: {
    files: ['<%= paths.src %>/js/*.js'],
    tasks: ['build-js'],
  },
  images: {
    files: ['<%= paths.src %>/images/**/*'],
    tasks: ['copy:images'],
  },

};
