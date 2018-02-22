define(
    function() {
        var CameraView = GlueJS.View.extend({
            el: '#content',
            template: 'CameraTemplate',
            events: {
                'click #take_picture': 'takePicture'
            },
            takePicture: function() {
                navigator.camera.getPicture(this.onSuccess, this.onFail, {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL
                });
            },
            onSuccess: function(imageData) {
                $('#picture').show();
                $('#picture').attr('src', 'data:image/jpeg;base64,' + imageData);
            },
            onFail: function(message) {
                alert('Failed : ' + message);
            }
        });
        return CameraView;
    }
);