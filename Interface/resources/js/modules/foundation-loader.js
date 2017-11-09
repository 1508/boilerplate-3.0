/*global define:false, Modernizr:false */

/**
* Enable the plugins by un-commenting in the define list below. Remeber to also enable the styling for the plugin, by including
* it in sass/scaffolding/foundation.scss
*/
define([

    'jquery',

    //Foundation core + must have dependencies
    'foundation.core',
    'foundation.util.mediaQuery',

    // Optional utils
    //'foundation.util.box',
    //'foundation.util.keyboard',
    //'foundation.util.motion',
    //'foundation.util.nest',
    //'foundation.util.timerAndImageLoader',
    //'foundation.util.touch',
    //'foundation.util.triggers',
    // Foundation plugins
    //'foundation.abide',
    //'foundation.accordion',
    //'foundation.accordionMenu',
    //'foundation.drilldown',
    //'foundation.dropdown',
    //'foundation.dropdownMenu',
    //'foundation.equalizer',
    //'foundation.interchange',
    //'foundation.magellan',
    //'foundation.offcanvas',
    //'foundation.orbit',
    //'foundation.responsiveMenu',
    //'foundation.responsiveToggle',
    //'foundation.reveal',
    //'foundation.slider',
    //'foundation.sticky',
    //'foundation.tabs',
    //'foundation.tooltip'

], function ($, Foundation) {

    'use strict';

    // bootstrap foundation
    $(document).foundation();
});
