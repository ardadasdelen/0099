jQuery(function ($) {

    'use strict';

    let preloader = $('.preloader');

    setTimeout(function() {
        preloader.addClass('ready');
        
    }, preloader.data('timeout'))
})
