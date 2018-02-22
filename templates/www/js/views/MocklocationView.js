define(
    function() {
        var MocklocationView = GlueJS.View.extend({
            el: '#content',
            template: 'MocklocationTemplate',
            events: {
                'click #check_mocklocation': 'isAllowMockLocation',
                'click #add_test_provider': 'addTestProvider',
                'click #remove_test_provider': 'removeTestProvider'
            },
            addTestProvider: function() {
                var name = $('#provider_name').val();
                navigator.locationcheckup.add(this.onSuccess, this.onError, {
                    'name': name,
                    'requireNetwork': false,
                    'requireSatellite': false,
                    'requireCell': false,
                    'hasMonetaryCost': false,
                    'supportsAltitude': false,
                    'supportsSpeed': false,
                    'supportsBearing': false,
                    'fakeLatitude': 37.0,
                    'fakeLongitude': 127.0
                });
            },
            removeTestProvider: function() {
                var name = $('#provider_name').val();
                navigator.locationcheckup.remove(this.onSuccess, this.onError, {
                    'name': name
                });
            },
            isAllowMockLocation: function() {
                navigator.locationcheckup.isAllowMockLocation(this.onSuccessCheck, this.onErrorCheck, {});
            },
            onSuccess: function(message) {
                $('#provider').html(message);
            },
            onSuccessCheck: function(result) {
                $('#mockloacation').html(result.checked);
            },
            onError: function(error) {
                $('#provider').html(error);
            },
            onErrorCheck: function(error) {
                $('#mockloacation').html(error);
            },
        });
        return MocklocationView;
    }
);