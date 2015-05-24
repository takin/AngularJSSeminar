module.exports = function(grunt){

	var plugins = ['grunt-usemin','grunt-contrib-concat','grunt-contrib-copy','grunt-contrib-uglify','grunt-contrib-htmlmin','grunt-contrib-cssmin'];

	(function(){
		for(var i = 0; i < plugins.length; ++i){
			grunt.loadNpmTasks(plugins[i]);
		}
	})();

	grunt.initConfig({
		useminPrepare:{
			html: 'index.html'
		},
		usemin:{
			html: 'dist/index.html'
		},
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
		// concat: {
		// 	build: {
		// 		options:{
		// 			separator: ';'
		// 		},
		// 		files:{
		// 			'temp/app.js':[
		// 				'{components,directives}/**/*.js',
		// 				'services/*.js'
		// 			],
		// 			'dist/js/vendor.js': [
		// 				'bower_components/angular/angular.min.js',
		// 				'bower_components/angular-animate/angular-animate.min.js',
		// 				'bower_components/angular-route/angular-route.min.js',
		// 				'bower_components/bootstrap/dist/js/bootstrap.min.js',
		// 				'bower_components/jquery/dist/jquery.min.js'
		// 			]
		// 		},
		// 	},
		// },
		// uglify:{
		// 	build:{
		// 		files:{
		// 			'dist/js/app.js':'temp/app.js'
		// 		}
		// 	}
		// },
		// usemin:{

		// }
	});

	grunt.registerTask('default',['useminPrepare','concat','uglify','cssmin','htmlmin','copy','usemin']);

};