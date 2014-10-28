module.exports = function (grunt) {

	// project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify : {
			files : {
				src : 'src/*.js',
				dest : 'build/',
				expand : true,
				flatten : true,
				ext : '.min.js'
			},
			watch : {
				js : { files : 'js/*.js', tasks : ['uglify']}
			}
		}
	});

	//load the plughins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//define default task
	grunt.registerTask('default', ['uglify']);

}