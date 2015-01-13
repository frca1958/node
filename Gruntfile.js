'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
 
    jshint: {   
	  options: { node: true
      },
      files: ['Gruntfile.js', 'hello.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', 'jshint');
  grunt.registerTask('travis', 'jshint');
  
};
