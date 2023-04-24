sap.ui.define(
    [
        'apppad/ext/BaseController',
        'sap/fe/core/AppComponent'
    ],
    function(PageController,
        AppComponent,
        UIComponent) {
        'use strict';

        return PageController.extend('apppad.ext.view.Page1', {
            UIComponent : AppComponent.UIComponent,
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf apppad.ext.view.Page1
             */
            onInit: function () {

                this.initializeEntitySetModel;
        
            },

            initializeEntitySetModel: function (p, o) {
                let _this = this;
                var oModel = this.getAppComponent().getModel();
                var oEntitySet = oModel.oMetadata._getEntityTypeByPath(p);
                var oEntitySetModel = new JSONModel(oEntitySet);
                this.getView().setModel(oEntitySetModel, o);
    
                // Read entity set OData
                oModel.read(p, {
                    success: function (oData, oResponse) {
                        var oResult = oData.results;
                        oEntitySetModel.setData(oResult);
                    }
                });
            },

            _onRouteMatched: function (oEvent) {
                
            }

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf apppad.ext.view.Page1
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf apppad.ext.view.Page1
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf apppad.ext.view.Page1
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
