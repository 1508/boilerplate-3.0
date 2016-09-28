
module.exports = function(grunt, options) {

	return {

		/**
		* Copy manifest file for Umbraco plugin, and genereate the path to the solution and use that as the source of the
		* css property
		*/
	    umbracoStyling: {

	        src: '<%= package.interfaceRoot %>/umbraco/package.manifest',
	        dest: '<%= package.build %>/App_Plugins/<%= package.umbracoStylingPlugin%>/package.manifest',
	        options: {
				//Process the package.manifest source, to generate the path to the umbraco plugins folder
	            process: function(content) {
	                return grunt.template.process(content, {
						data: {
							pluginName: options.package.umbracoStylingPlugin
						}
					});
	            }
	        }
	    },

	    development: {
	        files: [{
	            //Fonts
	            expand: true,
	            cwd: '<%= package.resources %>/fonts/',
	            src: '**',
	            dest: '<%= package.buildresources %>/fonts'
	        }, {
	            //Javascript
	            expand: true,
	            cwd: '<%= package.resources %>/js/standalone/',
	            src: ['**/*.js'],
	            dest: '<%= package.buildresources %>/js/standalone'
	        }, {
	            //Images
	            expand: true,
	            cwd: '<%= package.resources %>/images/',
	            src: ['**/*.{png,jpg,gif,svg,ico}', '!temporary/**'],
	            dest: '<%= package.buildresources %>/images'

	        }]
	    },

	    prototype: {
	        files: [{
	            //Fonts
	            expand: true,
	            cwd: '<%= package.resources %>/fonts/',
	            src: '**',
	            dest: '<%= package.prototyperesources %>/fonts'
	        }, {
	            //Javascript
	            expand: true,
	            cwd: '<%= package.resources %>/js/',
	            src: ['**/*.js'],
	            dest: '<%= package.prototyperesources %>/js'
	        }, {
	            //Images
	            expand: true,
	            cwd: '<%= package.resources %>/images/',
	            src: ['**/*.{png,jpg,gif,svg,ico}'],
	            dest: '<%= package.prototyperesources %>/images'

	        }]
	    },

	    production: {
	        files: [{
	            //Fonts
	            expand: true,
	            cwd: '<%= package.resources %>/fonts/',
	            src: '**',
	            dest: '<%= package.buildresources %>/fonts'
	        }, {
	            //Javascript
	            expand: true,
	            cwd: '<%= package.resources %>/js/standalone/',
	            src: ['**/*.js'],
	            dest: '<%= package.buildresources %>/js/standalone'
	        }, {
	            //Images
	            expand: true,
	            cwd: '<%= package.resources %>/images/',
	            src: ['**/*.{png,jpg,gif,svg,ico}', '!temporary/**'],
	            dest: '<%= package.buildresources %>/images'

	        }]
	    }
	}
};
