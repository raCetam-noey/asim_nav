sap.ui.define(
    [
        "apppad/ext/BaseController",
        "sap/ui/model/json/JSONModel",
        'sap/ui/base/ManagedObject',
        'sap/fe/core/controllerextensions/Routing',
        "sap/fe/core/controllerextensions/InternalEditFlow",
        "sap/fe/core/controllerextensions/SideEffects"
    ],
    function (BaseController, JSONModel, ManagedObject, Routing, InternalEditFlow, SideEffects) {
        'use strict';
        let _this

        
        return BaseController.extend('apppad.ext.view.App001', {
            routing: Routing,
            _editFlow: InternalEditFlow,
            sideEffects: SideEffects,
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf apppad.ext.view.App001
             */
            onInit: function () {
                var oComponent = this.getAppComponent();
                var oUIModel = new JSONModel({
                    // fixes for sap.fe flow
                    "isEditable": true,     
                    "editMode": "Editable"
                });
                this.getView().setModel(oUIModel, "ui");

              
            },

           
            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf apppad.ext.view.App001
             */
             onBeforeRendering: function() {
            
             },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf apppad.ext.view.App001
             */
             onAfterRendering: function() {
            
             },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf apppad.ext.view.App001
             */
             onExit: function() {
            
             },

            handlers: {

                navRead: function (oEvent) {
                    console.log("Press!")
                    var oContext = oEvent.getSource().getBindingContext();
                    // oContext().
                    oContext.sPath = '/Head'
                    // this.onNav(oContext);
                    // let oRounte = new Routing.navigate(oContext)
                    // console.log(oRounte)

                    // Routing().navigate(oContext);
                    // oContext.sPath = '?query:'
                    // console.log(oContext)
                    // var oModel = this.getView().getModel();
                    // var e = new sap.ui.model.Context(oModel , "Head(...)");
                    this.routing.navigate(oContext);
                    // this.routing.navigateToRoute("HeadList")
                    // this.navRead(oEvent);
                }
            }
        });
    }
);
