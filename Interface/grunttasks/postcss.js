module.exports = {

    options: {
        map: true  // inline sourcemaps
    },

    //Sort properties in  SCSS files
    scss: {
        options: {
            map: false,
            syntax: require('postcss-scss'),
            processors: [
                require('postcss-sorting')({
                    "sort-order": "default",
                    "empty-lines-between-children-rules": 0,
                    "empty-lines-between-media-rules": 0,
                    "preserve-empty-lines-between-children-rules": false
                })
            ]
        },
        
        files: [{
            expand: true,
            filter: 'isFile',
            cwd: '<%= package.resources %>/sass',
            src: [
                //Include all scss files
                '**/*.scss',

                //Except
                '!**/core/_settings.scss',
                '!**/scaffolding/**',
                '!**/_variables.scss'
            ],
            dest: '<%= package.resources %>/sass'
        }]
        
    },

    prototype: {

        options: {
            processors: [
                // add vendor prefixes
                require('autoprefixer')({
                    browsers: ['last 2 versions']
                })
            ]
        },

        src: '<%= package.prototyperesources %>/css/styles.css'
    },


    development: {
        options: {
            processors: [
                // add vendor prefixes
                require('autoprefixer')({
                    browsers: 'last 2 versions'
                })
            ]
        },
        src: '<%= package.buildresources %>/css/styles.css'
    },

    production: {
        options: {
            processors: [
                // add vendor prefixes
                require('autoprefixer')({
                    browsers: 'last 2 versions'
                }),

                // minify the result
                require('cssnano')()
            ]
        },
        files: [{
            src: '<%= package.buildresources %>/css/styles.css'
        }]

    }
};
