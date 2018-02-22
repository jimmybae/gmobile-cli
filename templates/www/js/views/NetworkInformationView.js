define(
    function() {
        var NetworkInformationView = GlueJS.View.extend({
            el: '#content',
            template: 'NetworkInformationTemplate',
            onAfterRender: function(options) {
                var self = this;
                setTimeout(function() {
                    self.networkInfo();
                }, 0);
                
            },
            networkInfo: function() {
                var networkState = navigator.connection.type;

                /*
                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';
                */
                $('#listview span#' + networkState).html('connected');
            }
        });
        return NetworkInformationView;
    }
);