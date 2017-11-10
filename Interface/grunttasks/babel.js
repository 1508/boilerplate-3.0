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
        files: [{
            expand: true,
            cwd: '<%= package.tempbuildresources %>/js/libs/foundation',
            src: [
                '*.js'
            ],
            dest: '<%= package.tempbuildresources %>/js/libs/foundation'
        }]
    },

    production: {
        files: [{
            expand: true,
            cwd: '<%= package.tempbuildresources %>/js/libs/foundation',
            src: [
                '*.js'
            ],
            dest: '<%= package.tempbuildresources %>/js/libs/foundation'
        }]
    }

}
