module.exports = {

   dev: {
         options: {
            mangle: false,
            compress: false,
            beautify: true
         },
         files: {
            'dist/app.js': [
               // app
               'src/js/app.module.js',
               'src/js/app.config.js',
               'src/js/app.controller.js',
               'src/js/routing.js',

               'src/app/shared/**/*.js',
               'src/app/components/**/*.js'
            ]
         }
   },

   prod: {
         options: {
            mangle: false
         },
         files: {
            'dist/app.js': [
               // app
               'src/js/app.module.js',
               'src/js/app.config.js',
               'src/js/app.controller.js',
               'src/js/routing.js',

               'src/app/shared/**/*.js',
               'src/app/components/**/*.js'
            ]
         }
   }

};