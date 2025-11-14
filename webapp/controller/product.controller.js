sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("northwind.controller.product", {
        onInit() {
        },
        onItemPress(oEvent) {
            const oListItem = oEvent.getSource();
            var oContext = oListItem.getBindingContext();
            var oProduct = oContext.getObject();
            console.log("Selected Request Code: " + oProduct.ProductID)
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Routeinfo", { id: oProduct.ProductID });
        }
    });
});