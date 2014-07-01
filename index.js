require.config({
    paths : {
        requirejs : 'bower_components/requirejs/require',
        backbone : 'bower_components/backbone/backbone',
        underscore : 'bower_components/underscore/underscore',
        jquery : 'bower_components/jquery/dist/jquery',
    },
    shim : {
        'myapp': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Application'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
});
require(['myapp'], function (Application) {
    new Application();
});