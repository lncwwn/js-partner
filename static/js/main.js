require.config({
    baseUrl: '/static/js/',
    paths: {
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

require(['jquery'], function($) {
    $(document).ready(function() {
        var modules = $('script[data-module]');
        if (modules && modules.length) {
            for (var i = 0; i < modules.length; i++) {
                var module = modules[i], name = $(module).attr('data-module');
                require([name], function(m) {
                    if (m && m.init) {
                        m.init();
                    }
                });
            }
        }
    });
});

