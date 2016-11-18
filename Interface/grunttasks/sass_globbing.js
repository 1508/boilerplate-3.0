module.exports = {
    options: {

    },
    // Generate a main stylesheet for the Umbraco Styling Plugin, to import all .umbraco.scss files
    umbracoStyling: {
        files: {
            '<%= package.interfaceRoot %>/umbraco/css/styles.scss': ['<%= package.resources %>/sass/umbraco.core.scss', '<%= package.resources %>/sass/**/*.umbraco.scss']
        }
    }

}
