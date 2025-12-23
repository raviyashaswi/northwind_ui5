sap.ui.define([
],
    function () {
        "use strict";

        return {
            imageFormatter() {
                if (!hex) return "";
                hex = hex.replace(/^0x/, "");
                var bytes = new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
                var base64 = btoa(String.fromCharCode.apply(null, bytes));

                return "data:image/png;base64," + base64;
            }
        }
    });