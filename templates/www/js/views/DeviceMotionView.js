define(
    function() {
        var DeviceMotionView = GlueJS.View.extend({
            el: '#content',
            template: 'DeviceMotionTemplate',
            events: {
                'click #curr_accel': 'currAccel'
            },
            onAfterRender: function(options) {
                this.currAccel();
            },
            currAccel: function() {
                navigator.accelerometer.getCurrentAcceleration(this.onSuccess, this.onFail);
            },
            onSuccess: function(acceleration) {
                $('#listview span:eq(0)').html(acceleration.x || 'undefined');
                $('#listview span:eq(1)').html(acceleration.y || 'undefined');
                $('#listview span:eq(2)').html(acceleration.z || 'undefined');
                $('#listview span:eq(3)').html(acceleration.timestamp || 'undefined');
            },
            onFail: function(message) {
                alert('Error : ' + message);
            }
        });
        return DeviceMotionView;
    }
);