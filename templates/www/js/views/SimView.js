define(
    function() {
        var SimView = GlueJS.View.extend({
            el: '#content',
            template: 'SimTemplate',
            onAfterRender: function(options) {
                window.plugins.sim.getSimInfo(this.simInfo, this.simInfoErr);
            },
            simInfo: function(result) {
                $('#listview span:eq(0)').html(result.carrierName || 'undefined');
                $('#listview span:eq(1)').html(result.countryCode || 'undefined');
                $('#listview span:eq(2)').html(result.mcc || 'undefined');
                $('#listview span:eq(3)').html(result.mnc || 'undefined');
                if(device.platform == 'Android') {
                    $('#listview span:eq(4)').html('미지원');
                    $('#listview span:eq(5)').html(result.phoneNumber || 'undefined');
                } else {
                    $('#listview span:eq(4)').html(result.allowsVOIP || 'undefined');
                    $('#listview span:eq(5)').html('미지원');
                }
            },
            simInfoErr: function(error) {
                alert(error);
            }
        });
        return SimView;
    }
);