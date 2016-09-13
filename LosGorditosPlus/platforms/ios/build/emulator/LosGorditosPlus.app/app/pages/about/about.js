"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    header_resena: 0,
    header_location: 0,
    ubicaciones: ([
        { zona: "Altamira",
            mensaje: "Abierto hasta las 9:00pm",
            data: ([{ latitude: 10.498086655450642,
                    longitude: -66.85348734185897,
                    title: "Caracas",
                    snip: "Venezuela",
                    dir: "Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital",
                    gerente: "Alexander Ramirez",
                    fijo: "0212-1234567",
                    movil: "0414-1112233" }]),
        },
        { zona: "Carrizal",
            mensaje: "Abierto hasta las 9:00pm",
            data: ([
                { latitude: 10.347091,
                    longitude: -66.992912,
                    title: "Los Teques",
                    snip: "Carrizal",
                    dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
                    gerente: "Alexander Ramirez",
                    fijo: "0212-1234567",
                    movil: "0414-1112233" }]),
        },
        { zona: "La Castellana",
            mensaje: "Abierto hasta las 9:00pm",
            data: ([
                { latitude: 10.50,
                    longitude: -66.86,
                    title: "Los Jardines",
                    snip: "Distrito Capital",
                    dir: "Los Jardines,Avenida Los Samám, Caracas, Distrito Capital",
                    gerente: "Ali Suarez",
                    fijo: "0212-1234567",
                    movil: "0414-1112233" }]),
        }
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
    AboutPage.prototype.Sede_Location = function (args) {
        var inf = args.data;
        console.log("Clicked on " + args.data);
    };
    return AboutPage;
}(BasePage_1.BasePage));
module.exports = new AboutPage();
//# sourceMappingURL=about.js.map