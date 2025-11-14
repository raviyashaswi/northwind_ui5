sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "northwind/model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("northwind.controller.info", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Routeinfo").attachPatternMatched(this._onRouteIdMatched, this);
        },
        formatter: formatter,

        _onRouteIdMatched(oEvent) {
            const pID = oEvent.getParameter("arguments").id;
            console.log("Product ID:", pID)
            this.getView().bindElement({
                path: `/Products(${pID})`,
                parameters: {
                    expand: "Category,Order_Details,Supplier"
                },
                events: {
                    dataReceived: (oEvent) => {
                        console.log("Data loaded:", oEvent.getParameter("data"));
                    },
                    change: () => console.log("Element binding changed"),
                    error: (oError) => console.error("Error binding element:", oError)
                }
            });

            var oTable = this.byId("_IDGenTable1");
            // oTable.unbindItems(); // prevent duplicate rows
            const aFilters = [
                new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, pID)
            ];

            oTable.bindItems({
                path: "/Order_Details",
                filters: aFilters,
                template: oTable.getBindingInfo("items").template,
                events: {
                    dataReceived: (oEvent) => {
                        console.log(" Table Data loaded:", oEvent.getParameter("data"));
                    },
                    change: () => console.log("Element binding changed"),
                    error: (oError) => console.error("Error binding element:", oError)
                }
            });
        },
    });
});
