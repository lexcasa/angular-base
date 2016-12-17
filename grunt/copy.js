module.exports = {  

  partials: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'src/',
        src: ['**/*.html'],
        dest: 'dist/'
      },
      {
        expand: true,
        flatten: false,
        cwd: 'src/fonts/',
        src: ['**/*'],
        dest: 'dist/'
      },
      {
        expand: true,
        flatten: false,
        cwd: 'src/imgs/',
        src: ['**/*'],
        dest: 'dist/'
      }     
    ]
  },

  deps: {
    files: [
      {
        expand: true,
        flatten: false,
        src: ['bower_components/**/*'],
        dest: 'dist/'
      },
    ],
  },

  js: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'src/js/',
        src: ['*.js'],
        dest: 'dist/js'
      }
    ]
  }

};