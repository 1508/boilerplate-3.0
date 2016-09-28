module.exports = {

    options: {
        sourceMap: true
    },

    production: {
        files: {
            '<%= package.buildresources %>/js/script.js': '<%= package.buildresources %>/js/script.js'
        }
    }
};
