define(
    function() {
        var DeviceView = GlueJS.View.extend({
            el: '#content',
            template: 'DeviceTemplate',
            onAfterRender: function(options) {
                this.deviceInfo();
            },
            deviceInfo: function() {
                $('#listview span:eq(0)').html(device.name || 'undefined');
                $('#listview span:eq(1)').html(device.cordova || 'undefined');
                $('#listview span:eq(2)').html(device.platform || 'undefined');
                $('#listview span:eq(3)').html(device.uuid || 'undefined');
                $('#listview span:eq(4)').html(device.model || 'undefined');
                $('#listview span:eq(5)').html(device.version || 'undefined');
            }
        });
        return DeviceView;
    }
);