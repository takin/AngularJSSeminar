module.exports = function(grunt){

	/* ======================================================================
	|	format output: 														|
	|		dist/															|
	|		  --> js/														|
	|		  -----> vendor.js --> concatinated all node_modules javascript	|
	|		  -----> app.js --> application loginc files					|
	|		  --> views/													|
	|		  --> css/														|
	|		  --> index.html												|
	=========================================================================*/

	(function(){
			var tasks = [
					'grunt-usemin',
					'grunt-contrib-clean',
					'grunt-contrib-copy',
					'grunt-contrib-htmlmin',
					'grunt-contrib-cssmin',
					'grunt-contrib-concat',
					'grunt-contrib-uglify'
				];
			for(var i = 0; i < tasks.length; ++i){
				grunt.loadNpmTasks(tasks[i]);
			}
	})();

	grunt.initConfig({
		myProject:{
			path: 'build'
		},
		pkg: grunt.file.readJSON('package.json'),
		htmlmin:{
			dist:{
				options:{
					removeComments: true,
					collapseWhitespace: true,
				},
				files:[{
					expand: true,
					flatten: true,
					cwd:'components',
					src:['**/*.html'],
					dest:'dist/views/'
				}],
			},
		},

		copy:{
			main:{
				files:{
					'dist/index.html':'index.html'
				}
			}
		},

		cssmin: {
			target:{
				files:{
					'dist/css/style.css' : [
						'public/css/style.css',
						'bower_components/bootstrap/dist/css/bootstrap.css',
						'bower_components/animate.css/animate.css'
					],
				},
			},
		},

		uglify:{
			dist:{
				expand: true,
				files:{
					'dist/js/app.js':['{components,directives}/**/*.js','services/*.js']
				}
			}
		},

		concat: {
			dist:{
				options: {
					separator: ';',
				},
				files: {
					'dist/js/vendor.js':[
						'bower_components/angular/angular.min.js',
						'bower_components/angular-animate/angular-animate.min.js',
						'bower_components/angular-route/angular-route.min.js',
						'bower_components/bootstrap/dist/js/bootstrap.min.js',
						'bower_components/jquery/dist/jquery.min.js'
					]
				},
			},
		},
		clean:['dist']
	});

	grunt.registerTask('default',[
		'clean',
		'htmlmin',
		'cssmin',
		'uglify',
		'concat',
		'copy'
	]);
}