/*globals requirejs:false */

requirejs.config({

    baseUrl: '/resources/js/modules',

    paths: {

        'main':              '../main',
        'almond':            '../libs/almond.0.3.2',

        //Libs
        'jquery':            '../libs/jquery-1.12.0.min',
        'selectivizr':       '../libs/selectivizr-min',
        'js.cookie':         '../libs/js.cookie',

        //Plugins
        'mouse-detect':      '../plugins/mouse-detect',

        // Foundation
        'foundation':        '../libs/foundation'

    },

    shim: {
        'foundation': {
            deps: ['jquery'],
            exports: 'Foundation'
        }
    },

    deps: ['main', 'mouse-detect']

});
