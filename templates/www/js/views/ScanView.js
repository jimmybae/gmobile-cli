define(
    function() {
        var ScanView = GlueJS.View.extend({
            el: '#content',
            template: 'ScanTemplate',
            events: {
                'click #scan_btn': 'scan',
                'click #generate_btn': 'generate'
            },
            scan: function() {
                navigator.scan.scan(this.scanSuccess, this.scanFail);
            },
            generate: function() {
                var data = {
                    'id': '123',
                    'dept': 'arch'
                }
                navigator.scan.generate(this.generateSuccess, this.generateFail, data, 'TEXT_TYPE');
            },
            scanSuccess: function(message) {
                alert(message);
            },
            scanFail: function(error) {
                alert(error);
            },
            generateSuccess: function(message) {
                $('#barcode').attr('src', 'data:image/png;base64,' + message);
            },
            generateFail: function(error) {
                alert(error);
            }
        });
        return ScanView;
    }
);