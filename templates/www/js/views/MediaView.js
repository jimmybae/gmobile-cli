define(
    function() {
        var MediaView = GlueJS.View.extend({
            el: '#content',
            template: 'MediaTemplate',
            my_media: null,
            mediaTimer: null,
            events: {
                'click #start': 'mediaStart',
                'click #pause': 'mediaPause',
                'click #stop': 'mediaStop'
            },
            onBeforeRender: function(options) {
                if(this.mediaTimer) {
                    clearInterval(this.mediaTimer);
                }
            },
            onAfterRender: function(options) {
                var src = '/Ringtones/hangouts_incoming_call.ogg';
                this.my_media = new Media(src, function() {
                    console.log("playAudio():Audio Success");
                }, function(err) {
                    console.log("playAudio():Audio Error: " + err);
                });
            },
            mediaStart: function() {
                var self = this;
                self.my_media.play();
                // Update media position every second
                self.mediaTimer = setInterval(function () {
                    // get media position
                    self.my_media.getCurrentPosition(
                        // success callback
                        function (position) {
                            if (position > 0.0) {
                                $('#timer').html(position);
                                var level = position / self.my_media.getDuration() * 100;
                                $('.progress-bar').css('width', level + '%').attr('aria-valuenow', level);
                            } else {
                                clearInterval(self.mediaTimer);
                                $('#timer').html(0);
                                $('.progress-bar').css('width', 0 + '%').attr('aria-valuenow', 0);
                            }
                        },
                        // error callback
                        function (e) {
                            console.log("Error getting pos=" + e);
                        }
                    );
                }, 1000);
            },
            mediaPause: function() {
                this.my_media.pause();
            },
            mediaStop: function() {
                clearInterval(this.mediaTimer);
                this.my_media.stop();
                $('.progress-bar').css('width', 0 + '%').attr('aria-valuenow', 0);
                setTimeout(function() {
                    $('#timer').html(0);
                }, 100);
            }
        });
        return MediaView;
    }
);