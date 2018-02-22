define(
    function() {
        var MediaCaptureView = GlueJS.View.extend({
            el: '#content',
            template: 'MediaCaptureTemplate',
            events: {
                'click #capture_audio': 'captureAudio',
                'click #capture_image': 'captureImage',
                'click #capture_video': 'captureVideo'
            },
            captureAudio: function() {
                navigator.device.capture.captureAudio(function(mediaFiles) {
                    var i, path, len;
                    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                        path = mediaFiles[i].fullPath;
                        alert(path);
                        // do something interesting with the file
                    }
                }, function(error) {
                    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                }, {
                    limit:1
                });
            },
            captureImage: function() {
                // start image capture
                navigator.device.capture.captureImage(function(mediaFiles) {
                    var i, path, len;
                    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                        path = mediaFiles[i].fullPath;
                        alert(path);
                        // do something interesting with the file
                    }
                }, function(error) {
                    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                }, {
                    limit:1
                });
            },
            captureVideo: function() {
                // start video capture
                navigator.device.capture.captureVideo(function(mediaFiles) {
                    var i, path, len;
                    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                        path = mediaFiles[i].fullPath;
                        alert(path);
                        // do something interesting with the file
                    }
                }, function(error) {
                    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
                }, {
                    limit:1
                });
            }
        });
        return MediaCaptureView;
    }
);