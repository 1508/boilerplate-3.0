/*globals requirejs:false */

var Foundation = {};

requirejs.config({

    baseUrl: '/resources/js/modules',

    paths: {

        'main':                                 '../main',
        'almond':                               '../libs/almond.0.3.3',

        //Libs
        'jquery':                               '../libs/jquery-3.2.1.min',
        'selectivizr':                          '../libs/selectivizr-min',
        'js.cookie':                            '../libs/js.cookie',

        //Plugins
        'mouse-detect':                         '../plugins/mouse-detect',

        // Foundation
        'foundation.core':                      '../libs/foundation/foundation.core',

        //Foundation utils
        'foundation.util.mediaQuery':           '../libs/foundation/foundation.util.mediaQuery',
        'foundation.util.box':                  '../libs/foundation/foundation.util.box',
        'foundation.util.keyboard':             '../libs/foundation/foundation.util.keyboard',
        'foundation.util.motion':               '../libs/foundation/foundation.util.motion',
        'foundation.util.nest':                 '../libs/foundation/foundation.util.nest',
        'foundation.util.timerAndImageLoader':  '../libs/foundation/foundation.util.timerAndImageLoader',
        'foundation.util.touch':                '../libs/foundation/foundation.util.touch',
        'foundation.util.triggers':             '../libs/foundation/foundation.util.triggers',
        // Foundation plugins
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
        'foundation.tooltip':                   '../libs/foundation/foundation.tooltip'
    },

    shim: {
        'foundation.core':                      { deps: ['jquery'],             exports: 'Foundation' },
        'foundation.util.mediaQuery':           { deps: ['foundation.core'],    exports: 'Foundation.MediaQuery' },
        'foundation.util.box':                  { deps: ['foundation.core'],    exports: 'Box' },
        'foundation.util.keyboard':             { deps: ['foundation.core'],    exports: 'Keyboard' },
        'foundation.util.motion':               { deps: ['foundation.core'],    exports: 'Motion' },
        'foundation.util.nest':                 { deps: ['foundation.core'],    exports: 'Nest' },
        'foundation.util.timerAndImageLoader':  { deps: ['foundation.core'],    exports: 'timerAndImageLoader' },
        'foundation.util.touch':                { deps: ['foundation.core'],    exports: 'Touch' },
        'foundation.util.triggers':             { deps: ['foundation.core'],    exports: 'Triggers' },

        //Foundation plugins
        'foundation.abide':                     { deps: ['foundation.core'],    exports: 'Foundation.Abide' },
        'foundation.accordion':                 { deps: ['foundation.core'],    exports: 'Foundation.Accordion' },
        'foundation.accordionMenu':             { deps: ['foundation.core'],    exports: 'Foundation.AccordionMenu' },
        'foundation.drilldown':                 { deps: ['foundation.core'],	exports: 'Foundation.Drilldown' },
        'foundation.dropdown':                  { deps: ['foundation.core'],    exports: 'Foundation.Dropdown' },
        'foundation.dropdownMenu':              { deps: ['foundation.core'],    exports: 'Foundation.DropdownMenu' },
        'foundation.equalizer':                 { deps: ['foundation.core'],    exports: 'Foundation.Equalizer' },
        'foundation.interchange':               { deps: ['foundation.core'],    exports: 'Foundation.Interchange' },
        'foundation.magellan':                  { deps: ['foundation.core'],    exports: 'Foundation.Magellan' },
        'foundation.offcanvas':                 { deps: ['foundation.core'],    exports: 'Foundation.OffCanvas' },
        'foundation.orbit':                     { deps: ['foundation.core'],    exports: 'Foundation.Orbit' },
        'foundation.responsiveMenu':            { deps: ['foundation.core'],    exports: 'Foundation.ResponsiveMenu' },
        'foundation.responsiveToggle':          { deps: ['foundation.core'],    exports: 'Foundation.ResponsiveToggle' },
        'foundation.reveal':                    { deps: ['foundation.core'],    exports: 'Foundation.Reveal' },
        'foundation.slider':                    { deps: ['foundation.core'],    exports: 'Foundation.Slider' },
        'foundation.sticky':                    { deps: ['foundation.core'],    exports: 'Foundation.Sticky' },
        'foundation.tabs':                      { deps: ['foundation.core'],    exports: 'Foundation.Tabs' },
        'foundation.tooltip':                   { deps: ['foundation.core'],    exports: 'Foundation.Tooltip' }
    },

    deps: ['main', 'mouse-detect']

});
