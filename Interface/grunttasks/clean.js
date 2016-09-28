module.exports = {

    //Cleanup the built Umbraco styling plugin files
    umbracoStyling: {
        src: ['<%= package.build %>/App_Plugins/<%= package.umbracoStylingPlugin%>/**']
    },

    prototype: {
        src: ['<%= package.prototype %>/**'],
    },

    development: {
        src: ['<%= package.buildresources %>/**'],
    },

    production: {
        src: ['<%= package.buildresources %>/**'],
    },

    staticsite: {
        src: ['<%= package.staticsite %>/**'],
    }
};
