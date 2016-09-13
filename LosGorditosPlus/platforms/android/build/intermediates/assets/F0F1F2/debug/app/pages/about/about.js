"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    header_resena: 0,
    header_location: 0,
    ubicaciones: ([
        { zona: "Altamira",
            mensaje: "Abierto hasta las 9:00pm" },
        { zona: "Carrizal",
            mensaje: "Abierto hasta las 9:00pm" },
        { zona: "La Castellana",
            mensaje: "Abierto hasta las 9:00pm" }
    ]),
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs });
var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        _super.apply(this, arguments);
    }
    AboutPage.prototype.mainContentLoaded = function (args) {
        //set the bindingContext for the AboutPage content here
        var view = args.object;
        view.bindingContext = vm;
    };
    AboutPage.prototype.Resena = function () {
        if (vm.get("header_resena") == 0) {
            vm.set("header_resena", 1);
            vm.set("header_location", 0);
        }
        else {
            vm.set("header_resena", 0);
        }
    };
    AboutPage.prototype.Ubicaciones = function () {
        if (vm.get("header_location") == 0) {
            vm.set("header_location", 1);
            vm.set("header_resena", 0);
        }
        else {
            vm.set("header_location", 0);
        }
    };
    return AboutPage;
}(BasePage_1.BasePage));
module.exports = new AboutPage();
//# sourceMappingURL=about.js.map