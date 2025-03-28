/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ic/phoron/servicerepairordertimefeedback/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
