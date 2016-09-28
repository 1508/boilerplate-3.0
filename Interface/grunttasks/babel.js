/**
* Will compile the source files for Foundation and prepare them for use in our setup
*/
module.exports = {
    options: {
        sourceMap: false
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
            cwd: '<%= package.buildresources %>/js/libs/foundation',
            src: [
                '*.js'
            ],
            dest: '<%= package.buildresources %>/js/libs/foundation'
        }]
    },

    production: {
        files: [{
            expand: true,
            cwd: '<%= package.buildresources %>/js/libs/foundation',
            src: [
                '*.js'
            ],
            dest: '<%= package.buildresources %>/js/libs/foundation'
        }]
    }
}
