module.exports = function(grunt) {
    grunt.registerTask('watchDevelopment', function() {
        // Configuration for watch:development tasks.
        var config = {
            images: {
                files: ['<%= package.resources %>/images/**/*.{png,jpg,gif,svg}'],
                tasks: ['newer:copy:development']
            },

            umbracoStyling: {
                files: [
                    '<%= package.resources %>/sass/umbraco.core.scss',
                    '<%= package.resources %>/sass/**/*.umbraco.scss'
                ],
                tasks: ['sass_globbing:umbracoStyling', 'sass:umbracoStyling'],
            },

            scss: {
                files: [
                    '<%= package.resources %>/sass/**/*.scss',
                    '!<%= package.resources %>/sass/umbraco.core.scss',
                    '!<%= package.resources %>/sass/**/*.umbraco.scss'
                ],
                tasks: ['newer:postcss:scss', 'sass:development', 'postcss:development'],
            },

            js: {
                files: ['<%= package.resources %>/js/**/*.js'],
                tasks: ['newer:copy:development', 'requirejs:development'],
            },

            jsstandalone: {
                files: ['<%= package.resources %>/js/standalone/*.js'],
                tasks: ['newer:copy:development'],
                options: {
                    livereload: true
                }
            },

            fonts: {
                files: ['<%= package.resources %>/fonts/**'],
                tasks: ['newer:copy:development'],
            }
        };

        grunt.config('watch', config);
        grunt.task.run('watch');
    });
};
