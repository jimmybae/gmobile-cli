define(
    function() {
        var NFCView = GlueJS.View.extend({
            el: '#content',
            template: 'NFCTemplate',
            events: {
                'click #read_btn': 'readNFC',
                'click #write_btn': 'writeNFC',
            },
            readNFC: function() {
                $('#nfc').html('');
                navigator.nfc.read(this.onSuccess, this.onFail);
            },
            writeNFC: function() {
                $('#nfc').html('');
                navigator.notification.prompt("Please enter your name", this.onPrompt, "Tag Write", ['확인', '취소'], "Tag Write Test");
            },
            onPrompt: function(results) {
                var data = {
                    "name": results.input1,
                    "age": "30"
                }
                navigator.nfc.write(this.onSuccess, this.onFail, data);
            },
            onSuccess: function(message) {
                $('#nfc').html(message);
            },
            onFail: function(error) {
                $('#nfc').html(error);
            }
        });
        return NFCView;
    }
);