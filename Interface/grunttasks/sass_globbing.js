module.exports = {
    options: {

    },
    // Generate a main stylesheet for the Umbraco Styling Plugin, to import all .umbraco.scss files
    umbracoStyling: {
        files: {
            'Interface/umbraco/css/styles.scss': ['<%= package.resources %>/sass/**/*.umbraco.scss']
        }
    }

}
