define(
    function() {
        var InappBrowserView = GlueJS.View.extend({
            el: '#content',
            template: 'InappBrowserTemplate',
            ref: null,
            flash: false,
            events: {
                'click #openInAppBrowser': 'openInAppBrowser',
                'click #closeInAppBrowser': 'closeRef',
                'click #openInAppBrowserHidden': 'openInAppBrowserHidden',
                'click #showInAppBrowserHidden': 'showInAppBrowser'
            },
            openInAppBrowser: function() {
                this.ref = cordova.InAppBrowser.open('https://m.naver.com/', '_blank', 'location=yes');
                if (!this.flag) {
                    this.refAddEventListener();
                } else {
                    this.refRemoveEventListener();
                }
            },
            refAddEventListener: function() {
                this.ref.addEventListener('loadstart', function(event) {
                    alert(event.url);
                });
                this.flag = true;
            },
            refRemoveEventListener: function() {
                this.ref.removeEventListener('loadstart', function(event) {
                    alert('Remove Event');
                });
                this.flag = false;
            },
            closeRef: function() {
                this.ref.close();
            },
            openInAppBrowserHidden: function() {
                this.ref = cordova.InAppBrowser.open('https://www.google.com', '_blank', 'hidden=yes');
            },
            showInAppBrowser: function() {
                this.ref.show();
            }
        });
        return InappBrowserView;
    }
);