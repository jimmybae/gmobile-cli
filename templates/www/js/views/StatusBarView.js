define(
    function() {
        var StatusBarView = GlueJS.View.extend({
            el: '#content',
            template: 'StatusBarTemplate',
            events: {
                'click #status_bar_hide': 'statusBarHide',
                'click #status_bar_show': 'statusBarShow',
                'change #status_bar_color': 'statusBarColor'
            },
            onAfterRender: function(options) {
                $('.ui-select span.form-control').css('height', '500px');
            },
            statusBarHide: function(event) {
                StatusBar.hide();
            },
            statusBarShow: function(event) {
                StatusBar.show();
            },
            statusBarColor: function(event) {
                StatusBar.backgroundColorByName(event.target.value);
            }
        });
        return StatusBarView;
    }
);