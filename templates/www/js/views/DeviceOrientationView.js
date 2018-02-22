define(
    function() {
        var DeviceOrientationView = GlueJS.View.extend({
            el: '#content',
            template: 'DeviceOrientationTemplate',
            events: {
                'click #curr_head': 'currHead'
            },
            onAfterRender: function(options) {
                this.currHead();
            },
            currHead: function() {
                navigator.compass.getCurrentHeading(this.onSuccess, this.onFail);
            },
            onSuccess: function(heading) {
                $('#listview span:eq(0)').html(heading.magneticHeading || 0);
            },
            onFail: function(message) {
                alert('Error : ' + message);
            }
        });
        return DeviceOrientationView;
    }
);