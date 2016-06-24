'use strict';

module.exports = {

  assets: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
      {
        expand: true,
        cwd: '<%= paths.src %>/js/',
        src: ['*.js'],
        dest: '<%= paths.dist %>/js/',
      },
    ],
  },
  bower: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.bower %>/bootstrap/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
      {
        expand: true,
        cwd: '<%= paths.bower %>/bootstrap.ui/dist/css/',
        src: ['bootstrap-ui.css'],
        dest: '<%= paths.dist %>/css/',
      },
      {
        expand: true,
        cwd: '<%= paths.bower %>/bootstrap/js/',
        src: ['*.js'],
        dest: '<%= paths.dist %>/js/bootstrap/',
      },
    ],
  },

};
