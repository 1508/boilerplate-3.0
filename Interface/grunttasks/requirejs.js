module.exports = {

    development: {
        options: {
            name: 'almond',
            wrap: true,
            preserveLicenseComments: false,
            baseUrl: "<%= package.tempbuildresources %>/js/modules",
            mainConfigFile: "<%= package.tempbuildresources %>/js/config.js",
            out: "<%= package.buildresources %>/js/script.js",
            optimize: "none"
        }
    },

    production: {
        options: {
            name: 'almond',
            wrap: true,
            preserveLicenseComments: false,
            baseUrl: "<%= package.tempbuildresources %>/js/modules",
            mainConfigFile: "<%= package.tempbuildresources %>/js/config.js",
            out: "<%= package.buildresources %>/js/script.js",
            //Optimization handled by a seperate uglify task
            optimize: "none"
        }
    }

};
