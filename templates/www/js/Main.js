require.config({
    baseUrl: 'js',
    paths: {
        'text': 'libs/text',
        'jquery': 'libs/jquery-1.11.3.min',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'handlebars': 'libs/handlebars-v1.3.0',
        'datatables': 'libs/jquery.dataTables',
        'templates': '../templates',
        'glue':'libs/glue',
        'cordova': '../cordova',
        'popper': 'libs/popper',
        'bootstrap': 'libs/bootstrap'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'glue': {
            deps: ['jquery', 'underscore', 'backbone', 'handlebars'],
            exports: 'GlueJS'
        },
        'bootstrap' : {
            deps: ['jquery']
        }
    }
});
window.Popper = require(['popper']);
require([
    'App',
    'cordova',
    'bootstrap'
], function(App) {
    App.start();
});
