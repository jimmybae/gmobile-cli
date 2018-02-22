define(
    function() {
        var GeolocationView = GlueJS.View.extend({
            el: '#content',
            template: 'GeolocationTemplate',
            events: {
                'click #curr_posi': 'currPosi'
            },
            onAfterRender: function(options) {
                this.currPosi();
            },
            currPosi: function() {
                navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, {
                    timeout: 30000,
                    maximumAge: 60000,
                    enableHighAccuracy: true
                });
            },
            onSuccess: function(position) {
                $('#listview span:eq(0)').html(position.coords.latitud || 'undefined');
                $('#listview span:eq(1)').html(position.coords.longitude || 'undefined');
                $('#listview span:eq(2)').html(position.coords.altitude || 'undefined');
                $('#listview span:eq(3)').html(position.coords.accuracy || 'undefined');
                $('#listview span:eq(4)').html(position.coords.altitudeAccuracy || 'undefined');
                $('#listview span:eq(5)').html(position.coords.heading || 'undefined');
                $('#listview span:eq(6)').html(position.coords.speed || 'undefined');
                $('#listview span:eq(7)').html(position.timestamp || 'undefined');
            },
            onError: function(error) {
                /*$('#listview').html('<li>code: ' + error.code + '</li>' +
                    '<li>message: ' + error.message + '</li>');*/
                alert('message: ' + error.message);
            }
        });
        return GeolocationView;
    }
);