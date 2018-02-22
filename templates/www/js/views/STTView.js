define(
    function() {
        var STTView = GlueJS.View.extend({
            el: '#content',
            template: 'STTTemplate',
            events: {
                'click #stt_btn': 'speechToText',
                'click #stt_opt_btn': 'speechToTextOption'
            },
            speechToText: function() {
                navigator.stt.startSTT(this.onSuccess, this.onFail);
            },
            speechToTextOption: function() {
                navigator.stt.startSTT(this.onSuccess, this.onFail, 'ko-KR', '말씀하세요');
            },
            onSuccess: function(message) {
                alert(message);
            },
            onFail: function(error) {
                alert(error);
            }
        });
        return STTView;
    }
);