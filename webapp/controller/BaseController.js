sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("ic.phoron.servicerepairordertimefeedback.controller.BaseController", {

        /**
         * Navigiert zurück, oder wenn keine History vorhanden ist, zur definierten Route.
         * @param {string} [sFallbackRoute="RouteMain"]
         */
        navBackOrHome: function (sFallbackRoute = "RouteMain") {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo(sFallbackRoute, {}, undefined, true);
            }
        },

        /**
         * Gibt den Router der aktuellen Komponente zurück.
         * @returns {sap.ui.core.routing.Router} Router-Instanz
         */
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        /**
         * Gibt ein an die View gebundenes Model zurück.
         * Wenn kein Name angegeben ist, wird das Default-Model der View zurückgegeben.
         * 
         * @param {string} [sName] - Der Name des View-Models (optional)
         * @returns {sap.ui.model.Model} - Die Model-Instanz der View
         */
        getViewModel: function (sName) {
            return this.getView().getModel(sName);
        },

        /**
         * Gibt ein an die Komponente gebundenes (globales) Model zurück.
         * Wenn kein Name angegeben ist, wird das Default-Model der Komponente zurückgegeben.
         * 
         * @param {string} [sName] - Der Name des globalen Models (optional)
         * @returns {sap.ui.model.Model} - Die Model-Instanz der Komponente
         */
        getModel: function (sName) {
            return this.getOwnerComponent().getModel(sName);
        },

        /**
         * Setzt ein Model auf die aktuelle View.
         * @param {sap.ui.model.Model} oModel - Die Model-Instanz
         * @param {string} [sName] - Der Name des Models
         */
        setViewModel: function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },

        /**
         * Gibt das ResourceBundle für i18n zurück.
         * @returns {sap.base.i18n.ResourceBundle} i18n ResourceBundle
         */
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        }

    });
});