module.exports = {  

	options: {
		livereload: true,
		nospawn: true
	},

	html: {
  		files: ['src/**/*.html'],
  		tasks: ['copy:partials']
	},
	
	styles: {
  		files: ['src/styles/*.less'],
  		tasks: ['less']
	},

    js: {
    	files: ['src/**/*.js'],
    	tasks: ['uglify:dev']
   	}

};