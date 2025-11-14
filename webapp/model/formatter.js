sap.ui.define([
], () => {
    "use strict";

    return {
        image_encode(code) {
            if (!code) return "";
            //data.d.Picture.substr(104)
            var s = "data:image/png;base64," + code; 
            console.log(s);
            return s;
            //return base64;
        }
    };
});