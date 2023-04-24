sap.ui.define([
    "sap/fe/core/rootView/NavContainer.controller",
    "sap/fe/core/AppComponent",
    "sap/ui/core/UIComponent",
	'sap/fe/core/controllerextensions/Routing',
	'sap/fe/core/controllerextensions/EditFlow'
], function (
    Controller,
    AppComponent,
    UIComponent,
	Routing,
	EditFlow

) {
    "use strict";

    return Controller.extend("apppad.ext.BaseController", {
		routing:Routing,
		editflow:EditFlow,
        onInit: function () {
			
            Controller.prototype.init.apply(this);
			console.log("========================BaseController Load==============================")
			
        },
 
      	/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter : function () {
			return AppComponent.getRouterFor(this);
		},

		onNav : function (e) {
			e.sPath = '/Head';
			this.routing.navigate(e);
		//  this.routing.navigate('/Head')
		},

       

        /**
         * Convenience method for getting the view model by name.
         * @public
         * @param {string} [sName] the model name
         * @returns {sap.ui.model.Model} the model instance
         */
        getModel: function (_sName) {
          
            return this.getView().getModel(_sName);
        },

        /**
		 * Convenience method for setting the view model.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel : function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},
         	/**
		 * Returns a promises which resolves with the resource bundle value of the given key <code>sI18nKey</code>
		 *
		 * @public
		 * @param {string} sI18nKey The key
		 * @param {sap.ui.model.resource.ResourceModel} oResourceModel The resource model
		 * @param {string[]} [aPlaceholderValues] The values which will repalce the placeholders in the i18n value
		 * @returns {Promise<string>} The promise
		 */
		getBundleTextByModel:  function(sI18nKey, oResourceModel, aPlaceholderValues){
		
			//wait for the resource model to be loaded and then return the text
			//required menifest async 
			return  oResourceModel.getResourceBundle().then(function(oBundle){
				return oBundle.getText(sI18nKey, aPlaceholderValues);
			});
		},

		navRead: function (oEvent) {
			console.log("Press!")
			var oContext = oEvent.getSource().getBindingContext();
			// oContext().
			oContext.sPath = '/Head'
			this.routing.navigate(oContext);
			oContext.sPath = '?query:'
			console.log(oContext)
			// var oModel = this.getView().getModel();
			// var e = new sap.ui.model.Context(oModel , "Head(...)");
			// this.routing.navigate(e)
			// this.routing.navigateToRoute("HeadList")

		}



    });
});