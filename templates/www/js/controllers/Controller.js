define(
    function() {
        var HelloWorldController = GlueJS.Controller.extend({
            initialize: function(options) {
                GlueJS.loadModule('SlideView').show();
                this.init_navigate = '#plugins';
            },
            /*
                appRoutes 정의 functions
            */
            nav_plugins: function(options) {
                GlueJS.loadModule('PluginsView').show();
            },
            nav_login: function(options) {
                GlueJS.loadModule('LoginView').show();
            },
            nav_logout: function(options) {
                GlueJS.loadModule('LogoutView').show();
            },
            nav_battery: function(options) {
                GlueJS.loadModule('BatteryView').show();
            },
            nav_camera: function(options) {
                GlueJS.loadModule('CameraView').show();
            },
            nav_contacts: function(options) {
                GlueJS.loadModule('ContactsView').show();
            },
            nav_device: function(options) {
                GlueJS.loadModule('DeviceView').show();
            },
            nav_devicemotion: function(options) {
                GlueJS.loadModule('DeviceMotionView').show();
            },
            nav_deviceorientation: function(options) {
                GlueJS.loadModule('DeviceOrientationView').show();
            },
            nav_dialogs: function(options) {
                GlueJS.loadModule('DialogsView').show();
            },
            nav_file: function(options) {
                GlueJS.loadModule('FileView').show();
            },
            nav_geolocation: function(options) {
                GlueJS.loadModule('GeolocationView').show();
            },
            nav_globalization: function(options) {
                GlueJS.loadModule('GlobalizationView').show();
            },
            nav_inappbrowser: function(options) {
                GlueJS.loadModule('InappBrowserView').show();
            },
            nav_media: function(options) {
                GlueJS.loadModule('MediaView').show();
            },
            nav_mediacapture: function(options) {
                GlueJS.loadModule('MediaCaptureView').show();
            },
            nav_networkinformation: function(options) {
                GlueJS.loadModule('NetworkInformationView').show();
            },
            nav_splashscreen: function(options) {
                GlueJS.loadModule('SplashScreenView').show();
            },
            nav_statusbar: function(options) {
                GlueJS.loadModule('StatusBarView').show();
            },
            nav_vibration: function(options) {
                GlueJS.loadModule('VibrationView').show();
            },
            nav_sim: function(options) {
                GlueJS.loadModule('SimView').show();
            },
            nav_stt: function(options) {
                if(device.platform == 'Android') {
                    GlueJS.loadModule('STTView').show();
                } else {
                    alert('Android만 지원합니다.');
                }
            },
            nav_scan: function(options) {
                if(device.platform == 'Android') {
                    GlueJS.loadModule('ScanView').show();
                } else {
                    alert('Android만 지원합니다.');
                }
            },
            nav_nfc: function(options) {
                if(device.platform == 'Android') {
                    GlueJS.loadModule('NFCView').show();
                } else {
                    alert('Android만 지원합니다.');
                }
            },
            nav_mocklocation: function(options) {
                if(device.platform == 'Android') {
                    GlueJS.loadModule('MocklocationView').show();
                } else {
                    alert('Android만 지원합니다.');
                }
            },
            nav_gcm: function(options) {
                if(device.platform == 'Android') {
                    GlueJS.loadModule('GCMView').show();
                } else {
                    alert('Android만 지원합니다.');
                }
            },
            nav_default: function(options) {
                if (options == null) {
                    GlueJS.AppRouter.navigate(this.init_navigate, {
                        trigger: true,
                        replace: true
                    });
                }
            },
            /*
                appEvents 정의 functions
            */
        });
        return HelloWorldController;
    }
);
