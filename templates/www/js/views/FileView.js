define(
    function() {
        var FileView = GlueJS.View.extend({
            el: '#content',
            template: 'FileTemplate',
            onAfterRender: function(options) {
                window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/index.html', this.gotFile, this.fail);
            },
            gotFile: function(fileEntry) {
                fileEntry.file(function(file) {
                    var reader = new FileReader();
            
                    reader.onloadend = function(e) {
                        $('#file_content').text(this.result);
                    }
                    reader.readAsText(file);
                });
            },
            fail: function(e) {
                $('#file_content').text('FileSystem Error');
            }
        });
        return FileView;
    }
);