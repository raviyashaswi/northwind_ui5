/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["northwind/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
