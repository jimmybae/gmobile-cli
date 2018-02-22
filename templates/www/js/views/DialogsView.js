define(
    function() {
        var DialogsView = GlueJS.View.extend({
            el: '#content',
            template: 'DialogsTemplate',
            events: {
                'click #alert_btn': 'showAlert',
                'click #confirm_btn': 'showConfirm',
                'click #prompt_btn': 'showPrompt',
                'click #beep_btn': 'playBeep',
                'click #vibrate_btn': 'playVibrate'
            },
            showAlert: function() {
                navigator.notification.alert(
                    'Alert Dialog Test',
                    this.onAlert,
                    'Alert Dialog',
                    'Click'
                );
            },
            onAlert: function() {
                alert('Alert OK');
            },
            showConfirm: function() {
                navigator.notification.confirm(
                    'Confirm Dialog Test',
                    this.onConfirm,
                    'Confirm Dialog', ['OK', 'Cancel']
                );
            },
            onConfirm: function(buttonIndex) {
                alert('You selected button ' + buttonIndex);
            },
            showPrompt: function() {
                navigator.notification.prompt(
                    'Please enter your name', // message
                    this.onPrompt, // callback to invoke
                    'Registration', // title
                    ['Ok', 'Exit'], // buttonLabels
                    'Jane Doe' // defaultText
                );
            },
            onPrompt: function(results) {
                alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
            },
            playBeep: function() {
                navigator.notification.beep(2);
            },
            playVibrate: function() {
                navigator.notification.vibrate(2500);
            }
        });
        return DialogsView;
    }
);