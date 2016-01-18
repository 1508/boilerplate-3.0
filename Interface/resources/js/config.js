/*globals requirejs:false */

requirejs.config({
    baseUrl: '/resources/js/modules',
    paths: {
        'main':             '../main',
        'almond':           '../libs/almond.0.2.5',
        
        //Libs
        'jquery':           '../libs/jquery-1.12.0.min',
        'selectivizr':      '../libs/selectivizr-min',
        'jquery.cookie':    '../libs/jquery.cookie',

        //Plugins
        'mouse-detect':     '../plugins/mouse-detect',

        // Foundation
        'foundation':                           '../libs/foundation/foundation',
        'foundation.core':                      '../libs/foundation/foundation.core',
        'foundation.abide':                     '../libs/foundation/foundation.abide',
        'foundation.accordion':                 '../libs/foundation/foundation.accordion',
        'foundation.accordionMenu':             '../libs/foundation/foundation.accordionMenu',
        'foundation.drilldown':                 '../libs/foundation/foundation.drilldown',
        'foundation.dropdown':                  '../libs/foundation/foundation.dropdown',
        'foundation.dropdownMenu':              '../libs/foundation/foundation.dropdownMenu',
        'foundation.equalizer':                 '../libs/foundation/foundation.equalizer',
        'foundation.interchange':               '../libs/foundation/foundation.interchange',
        'foundation.magellan':                  '../libs/foundation/foundation.magellan',
        'foundation.offcanvas':                 '../libs/foundation/foundation.offcanvas',
        'foundation.orbit':                     '../libs/foundation/foundation.orbit',
        'foundation.responsiveMenu':            '../libs/foundation/foundation.responsiveMenu',
        'foundation.responsiveToggle':          '../libs/foundation/foundation.responsiveToggle',
        'foundation.reveal':                    '../libs/foundation/foundation.reveal',
        'foundation.slider':                    '../libs/foundation/foundation.slider',
        'foundation.sticky':                    '../libs/foundation/foundation.sticky',
        'foundation.tabs':                      '../libs/foundation/foundation.tabs',
        'foundation.toggler':                   '../libs/foundation/foundation.toggler',
        'foundation.tooltip':                   '../libs/foundation/foundation.tooltip',
        'foundation.util.box':                  '../libs/foundation/foundation.util.box',
        'foundation.util.keyboard':             '../libs/foundation/foundation.util.keyboard',
        'foundation.util.mediaQuery':           '../libs/foundation/foundation.util.mediaQuery',
        'foundation.util.motion':               '../libs/foundation/foundation.util.motion',
        'foundation.util.nest':                 '../libs/foundation/foundation.util.nest',
        'foundation.util.timerAndImageLoader':  '../libs/foundation/foundation.util.timerAndImageLoader',
        'foundation.util.touch':                '../libs/foundation/foundation.util.touch',
        'foundation.util.triggers':             '../libs/foundation/foundation.util.triggers'
        
        
    },
    shim: {
        'foundation':                           ['jquery'],
        'foundation.core':                      ['jquery'],
        'foundation.abide':                     ['foundation.core'],
        'foundation.accordion':                 ['foundation.core'],
        'foundation.accordionMenu':             ['foundation.core'],
        'foundation.drilldown':                 ['foundation.core'],
        'foundation.dropdown':                  ['foundation.core'],
        'foundation.dropdownMenu':              ['foundation.core'],
        'foundation.equalizer':                 ['foundation.core'],
        'foundation.interchange':               ['foundation.core'],
        'foundation.magellan':                  ['foundation.core'],
        'foundation.offcanvas':                 ['foundation.core'],
        'foundation.orbit':                     ['foundation.core'],
        'foundation.responsiveMenu':            ['foundation.core'],
        'foundation.responsiveToggle':          ['foundation.core'],
        'foundation.reveal':                    ['foundation.core'],
        'foundation.slider':                    ['foundation.core'],
        'foundation.sticky':                    ['foundation.core'],
        'foundation.tabs':                      ['foundation.core'],
        'foundation.toggler':                   ['foundation.core'],
        'foundation.tooltip':                   ['foundation.core'],
        'foundation.util.box':                  ['foundation.core'],
        'foundation.util.keyboard':             ['foundation.core'],
        'foundation.util.mediaQuery':           ['foundation.core'],
        'foundation.util.motion':               ['foundation.core'],
        'foundation.util.nest':                 ['foundation.core'],
        'foundation.util.timerAndImageLoader':  ['foundation.core'],
        'foundation.util.touch':                ['foundation.core'],
        'foundation.util.triggers':             ['foundation.core']
        
    },
    deps: ['main', 'selectivizr', 'mouse-detect']
});
