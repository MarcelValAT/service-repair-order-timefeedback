sap.ui.define([
    "ic/phoron/servicerepairordertimefeedback/controller/BaseController",
], (BaseController) => {
    "use strict";

    return BaseController.extend("ic.phoron.servicerepairordertimefeedback.controller.Main", {
        onInit() {
        },


        
        /******************************************************
         * Button Press Methoden
         ******************************************************/
        onPageNavButtonPress: function () {
            this.navBackOrHome();
        },
    });
});