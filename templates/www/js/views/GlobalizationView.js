define(
    function() {
        var GlobalizationView = GlueJS.View.extend({
            el: '#content',
            template: 'GlobalizationTemplate',
            onAfterRender: function(options) {
                this.getGlobalization();
            },
            getGlobalization: function() {
                navigator.globalization.getPreferredLanguage(
                    function (language) {
                        $('#listview span:eq(0)').html(language.value || 'undefined');
                    },
                    function () {
                        alert('Error getting language\n');
                    }
                );

                navigator.globalization.getLocaleName(
                    function (locale) {
                        $('#listview span:eq(1)').html(locale.value || 'undefined');
                    },
                    function () {
                        alert('Error getting locale\n');
                    }
                );

                navigator.globalization.dateToString(
                    new Date(),
                    function (date) {
                        $('#listview span:eq(2)').html(date.value || 'undefined');
                    }, function () {
                        alert('Error getting dateString\n');
                    }, {
                        formatLength: 'short',
                        selector: 'date and time'
                    }
                );

                navigator.globalization.getCurrencyPattern(
                    'KRW',
                    function (pattern) {
                        $('#listview span:eq(3)').html(pattern.pattern || 'undefined');
                    },
                    function () {
                        alert('Error getting pattern\n');
                    }
                );
            }
        });
        return GlobalizationView;
    }
);