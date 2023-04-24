sap.ui.define([
    "apppad/ext/BaseController",
	'sap/fe/core/controllerextensions/Routing',
], function(
	BaseController,
	Routing
) {
	"use strict";

	return BaseController.extend("apppad.ext.main.MainPage", {
		routing: Routing
	});
});