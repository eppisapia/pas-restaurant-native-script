"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var platform_1 = require("platform");
var mapsModule = require("nativescript-google-maps-sdk");
var vm = new observable_1.Observable({
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs,
    marks: ([
        {
            latitude: 10.498086655450642,
            longitude: -66.85348734185897,
            title: "Caracas",
            snip: "Venezuela",
            dir: "Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital",
            gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
        },
        {
            latitude: 10.50,
            longitude: -66.86,
            title: "Los Jardines",
            snip: "Distrito Capital",
            dir: "Los Jardines,Avenida Los Samám, Caracas, Distrito Capital",
            gerente: "Ali Suarez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
        },
        {
            latitude: 10.347091,
            longitude: -66.992912,
            title: "Los Teques",
            snip: "Carrizal",
            dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
            gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
        }
    ]),
});
var LocationPage = (function (_super) {
    __extends(LocationPage, _super);
    function LocationPage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    LocationPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    LocationPage.prototype.OnMapReady = function (args) {
        var mapView = args.object;
        console.log("Setting a marker...");
        var marcas = vm.get("marks");
        for (var i = 0; i < marcas.length; i++) {
            var marker = new mapsModule.Marker();
            marker.position = mapsModule.Position.positionFromLatLng(marcas[i].latitude, marcas[i].longitude);
            marker.userData = { index: i + 1 };
            marker.data = marcas[i];
            mapView.addMarker(marker);
        }
    };
    LocationPage.prototype.onMarkerSelect = function (args) {
        console.log("Clicked on " + args.marker.data.dir);
        var inf = args.marker.data;
        var navigationOptions = {
            moduleName: 'pages/locationdetail/locationdetail',
            context: {
                mark: inf
            }
        };
        frame_1.topmost().navigate(navigationOptions);
    };
    return LocationPage;
}(BasePage_1.BasePage));
module.exports = new LocationPage();
//# sourceMappingURL=location.js.map