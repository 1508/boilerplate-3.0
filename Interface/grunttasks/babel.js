/**
* Will compile the source files for Foundation and prepare them for use in our setup
*/
module.exports = {
    options: {
        //No sourcemaps for Foundation files, as we dont need them
        sourceMap: false,
        //Prevent babel from trying to compact the output
        compact: false,
        presets: ['env']
    },

    prototype: {
        files: [{
            expand: true,
            cwd: '<%= package.prototyperesources %>/js/libs/foundation',
            src: [
                '*.js'
            ],
            dest: '<%= package.prototyperesources %>/js/libs/foundation'
        }]
    },

    development: {
        files: {
            '<%= package.buildresources %>/js/script.js': '<%= package.buildresources %>/js/script.js'
        }
    },

    production: {
        files: {
            '<%= package.buildresources %>/js/script.js': '<%= package.buildresources %>/js/script.js'
        }
    }
}
