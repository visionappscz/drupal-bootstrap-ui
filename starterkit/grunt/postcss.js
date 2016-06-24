'use strict';

module.exports = {

  dist: {
    options: {
      processors: [
        require('pixrem')(),
        require('autoprefixer')(),
      ],
    },
    src: '<%= paths.temp %>/main.css',
    dest: '<%= paths.dist %>/css/main.css',
  },

};
