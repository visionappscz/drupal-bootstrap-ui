'use strict';

module.exports = {

  dist: {
    options: {
      processors: [
        require('pixrem')(),
        require('autoprefixer')(),
      ],
    },
    src: '<%= paths.temp %>/<%= pkg.name %>.css',
    dest: '<%= paths.dist %>/css/<%= pkg.name %>.css',
  },

};
