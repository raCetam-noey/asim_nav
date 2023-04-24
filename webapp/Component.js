sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (AppComponent) {
        "use strict";

        return AppComponent.extend("apppad.Component", {
            metadata: {
                manifest: "json"
            },

            init : function (params) {
                        // call the init function of the parent
                AppComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();
                console.log('init router');
                console.log('AppComponent Load')
                
            }
        });
    }
);