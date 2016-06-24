'use strict';

module.exports = {

  options: {
    jshintrc: true,
  },
  grunt: ['Gruntfile.js', 'grunt/*.js'],
  core: ['<%= paths.dist %>/js/*.js'],

};
