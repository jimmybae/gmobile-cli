define(
    function() {
        var SplashScreenView = GlueJS.View.extend({
            el: '#content',
            template: 'SplashScreenTemplate',
            events: {
                'click #show_splash': 'showSplash'
            },
            onAfterRender: function(options) {
                navigator.splashscreen.show();
                setTimeout(function() {
                    navigator.splashscreen.hide();
                }, 500);
            },
            showSplash: function() {
                navigator.splashscreen.show();
                setTimeout(function() {
                    navigator.splashscreen.hide();
                }, $('#splash_time').val() * 1000);
            }
        });
        return SplashScreenView;
    }
);