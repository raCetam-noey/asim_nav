sap.ui.define(
    [
        "apppad/ext/BaseController",
        'sap/m/ResponsivePopover',
        'sap/m/MessagePopover',
        'sap/m/ActionSheet',
        'sap/m/Button',
        'sap/m/Link',
        'sap/m/NotificationListItem',
        'sap/m/MessageItem',
        'sap/ui/core/CustomData',
        'sap/m/MessageToast',
        'sap/ui/Device',
        'sap/ui/core/syncStyleClass',
        'sap/m/library'
    ], function (BaseController, ResponsivePopover, MessagePopover, ActionSheet, Button, Link, NotificationListItem, MessageItem, CustomData, MessageToast, Device, syncStyleClass, mobileLibrary) 
        {
            'use strict';

            return BaseController.extend('apppad.ext.main.Main', {
                
                onInit: function () {
                    
                    _bExpanded : true,
                   
                    this.getView().addStyleClass('sapUiSizeCozy');
        
                    if (Device.resize.width <= 1024) {
                        this.onSideNavButtonPress();
                    }
        
                    Device.media.attachHandler(this._handleWindowResize, this);
                    this.getRouter().attachRouteMatched(this.onRouteChange.bind(this));

                },

                onExit: function() {
                    Device.media.detachHandler(this._handleWindowResize, this);
                },

                onRouteChange: function (oEvent) {
                    this.getModel('side').setProperty('/selectedKey', oEvent.getParameter('name'));
              
                    if (Device.system.phone) {
                      this.onSideNavButtonPress();
                    }
                  },
          
                  _handleWindowResize: function (oDevice) {
                    if ((oDevice.name === "Tablet" && this._bExpanded) || oDevice.name === "Desktop") {
                      this.onSideNavButtonPress();
                      // set the _bExpanded to false on tablet devices
                      // extending and collapsing of side navigation should be done when resizing from
                      // desktop to tablet screen sizes)
                      this._bExpanded = (oDevice.name === "Desktop");
                    }
                  },
          
          
                  onSideNavButtonPress: function () {
                      var oToolPage = this.byId("app");
                      var bSideExpanded = oToolPage.getSideExpanded();
                      this._setToggleButtonTooltip(bSideExpanded);
                      oToolPage.setSideExpanded(! oToolPage.getSideExpanded());
                  },
          
                  _setToggleButtonTooltip: function (bSideExpanded) {
                      var oToggleButton = this.byId('sideNavigationToggleButton');
                      this.getBundleText(bSideExpanded ? "expandMenuButtonText" : "collpaseMenuButtonText").then(function (sTooltipText) {
                          oToggleButton.setTooltip(sTooltipText);
                      });
                  },
          
                  /**
                 * Returns a promise which resolves with the resource bundle value of the given key <code>sI18nKey</code>
                 *
                 * @public
                 * @param {string} sI18nKey The key
                 * @param {string[]} [aPlaceholderValues] The values which will repalce the placeholders in the i18n value
                 * @returns {Promise<string>} The promise
                 */
                  getBundleText: function (sI18nKey, aPlaceholderValues) {
                      return this.getBundleTextByModel(sI18nKey, this.getModel("i18n"), aPlaceholderValues);
                  }
            });
        }
);
