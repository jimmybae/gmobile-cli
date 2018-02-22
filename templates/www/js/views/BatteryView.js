define(
    function() {
        var BatteryView = GlueJS.View.extend({
            el: '#content',
            template: 'BatteryTemplate',
            batteryStatus: null,
            onAfterRender: function(options) {
                if (this.batteryStatus) {
                    this.batteryStatusChange();
                } else {
                    this.onDeviceReady();
                }
            },
            onBatteryStatus: function(status) {
                console.log('~!~ onBatteryStatus');
                var view = GlueJS.loadModule('BatteryView')
                view.batteryStatus = status;
                view.batteryStatusChange();
            },
            batteryStatusChange: function() {
                var self = this;
                var badge = self.batteryStatus.isPlugged ? 'success' : 'danger';
                var level = self.batteryStatus.level;
                $('#battery_level').html(level + '%');
                $('#battery_plugged').html('Plugged<span class="badge badge-' + badge + '">' + self.batteryStatus.isPlugged + '</span>');

                $('.progress-bar').css('width', level + '%').attr('aria-valuenow', level);
                $('.progress-bar').html(level + '%');
            },
            onBatteryCritical: function(status) {
                navigator.notification.alert('Your battery is SUPER low!');
            },
            onBatteryLow: function(status) {
                navigator.notification.alert('Your battery is low!');
            },
            onDeviceReady: function() {
                window.addEventListener('batterystatus', this.onBatteryStatus, false);
                //listen for battery events
                window.addEventListener('batterycritical', this.onBatteryCritical, false);
                window.addEventListener('batterylow', this.onBatteryLow, false);
            }
        });
        return BatteryView;
    }
);