"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    header_principal: 0,
    header_sede: 0,
    sede: "Selección de sede",
    lszonas: 0,
    infzona: 0,
    sel_gerente: "",
    sel_fijo: "",
    sel_movil: "",
    contact: ([
        { gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
            zona: "Altamira" },
        { gerente: "Ali Suarez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
            zona: "Chacao" },
        { gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
            zona: "Carrizal" }
    ]),
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs,
    latitude: -33.86,
    longitude: 151.20,
    zoom: 8,
    bearing: 0,
    tilt: 0,
    padding: 40,
});
var ContactPage = (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage() {
        _super.apply(this, arguments);
    }
    ContactPage.prototype.mainContentLoaded = function (args) {
        //set the bindingContext for the AboutPage content here
        var view = args.object;
        view.bindingContext = vm;
    };
    ContactPage.prototype.Principal = function () {
        if (vm.get("header_principal") == 0) {
            vm.set("header_principal", 1);
            vm.set("header_sede", 0);
            vm.set("lszonas", 0);
            vm.set("infzona", 0);
        }
        else {
            vm.set("header_principal", 0);
        }
    };
    ContactPage.prototype.Sede = function () {
        if (vm.get("header_sede") == 0) {
            vm.set("header_sede", 1);
            vm.set("header_principal", 0);
            vm.set("lszonas", 1);
        }
        else {
            vm.set("header_sede", 0);
            vm.set("lszonas", 0);
            vm.set("infzona", 0);
        }
    };
    ContactPage.prototype.Zonas = function () {
        vm.set("infzona", 0);
        vm.set("sede", "Selección de sede");
        vm.set("lszonas", 1);
    };
    ContactPage.prototype.changeZona = function (args) {
        var zona = args.view.text;
        vm.set("sede", zona);
        var ger = args.view.ger;
        vm.set("sel_gerente", ger);
        var fijo = args.view.fijo;
        vm.set("sel_fijo", fijo);
        var movil = args.view.movil;
        vm.set("sel_movil", movil);
        vm.set("lszonas", 0);
        vm.set("infzona", 1);
    };
    return ContactPage;
}(BasePage_1.BasePage));
module.exports = new ContactPage();
//# sourceMappingURL=contact.js.map