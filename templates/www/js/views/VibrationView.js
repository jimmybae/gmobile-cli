define(
    function() {
        var VibrationView = GlueJS.View.extend({
            el: '#content',
            template: 'VibrationTemplate',
            events: {
                'click #vibration': 'vibration'
            },
            onAfterRender: function(options) {
                navigator.vibrate(1000);
            },
            vibration: function() {
                navigator.vibrate($('#vibration_time').val() * 1000);
            }
        });
        return VibrationView;
    }
);