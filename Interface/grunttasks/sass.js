module.exports = {

    //Build stylesheet for Umbraco custom content modules
    umbracoStyling: {
        options: {
            sourceMap: false,
            outputStyle: 'nested'
        },
        files: {
            '<%= package.build %>/App_Plugins/<%= package.umbracoStylingPlugin %>/css/styles.css': '<%= package.interfaceRoot %>/umbraco/css/styles.scss'
        }
    },

    prototype: {
        options:{
            sourceMap: true,
            sourceComments: true,
            outputStyle: 'expanded',
            imagePath: '<%= package.prototyperesources %>/images'
        },
        files: {
            '<%= package.prototyperesources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    },

    development: {
        options:{
            sourceMap: true,
            sourceComments: true,
            outputStyle: 'expanded',
            imagePath: '<%= package.buildresources %>/images'
        },
        files: {
            '<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    },

    production: {
        options:{
            sourceMap: false,
            outputStyle: 'compressed',
            imagePath: '<%= package.buildresources %>/images'
        },
        files: {
            '<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.scss'
        }
    }

};
