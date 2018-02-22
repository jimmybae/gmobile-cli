define(
    function() {
        var PluginsView = GlueJS.View.extend({
            el: '#content',
            template: 'PluginsTemplate'
        });
        return PluginsView;
    }
);