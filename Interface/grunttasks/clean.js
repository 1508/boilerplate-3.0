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

    // Folder where javascript files are copied before being run through babel
    // Is nessesary because of Foundation needing babel before it can be used in RequireJS
    tempBuild: {
        src: ['<%= package.tempbuildresources %>']
    },

    production: {
        src: ['<%= package.buildresources %>/**'],
    },

    staticsite: {
        src: ['<%= package.staticsite %>/**'],
    }
};
