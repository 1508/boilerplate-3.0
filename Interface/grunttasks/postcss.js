module.exports = {

    options: {
        // inline sourcemaps
        map: true
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

        src: '<%= package.prototyperesources %>/css/styles.css',
        dest: '<%= package.prototyperesources %>/css/styles.css'
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
        src: '<%= package.buildresources %>/css/styles.css',
        dest: '<%= package.buildresources %>/css/styles.css'
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
            src: '<%= package.buildresources %>/css/styles.css',
            dest: '<%= package.buildresources %>/css/styles.css'
        }]

    }
};
