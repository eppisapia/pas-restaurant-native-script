"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var mapsModule = require("nativescript-google-maps-sdk");
var vm = new observable_1.Observable({
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs,
    mark: null
});
var LocationDetailPage = (function (_super) {
    __extends(LocationDetailPage, _super);
    function LocationDetailPage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    LocationDetailPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    LocationDetailPage.prototype.OnMapReady = function (args) {
        var mapView = args.object;
        var marca = vm.get("mark");
        console.log("VALUES :", marca.latitude);
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(marca.latitude, marca.longitude);
        marker.userData = { index: 1 };
        mapView.addMarker(marker);
    };
    LocationDetailPage.prototype.onMarkerSelect = function (args) {
        console.log("Clicked on " + args.marker.data.dir);
    };
    LocationDetailPage.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera));
    };
    LocationDetailPage.prototype.onNavigatingTo = function (args) {
        var page = args.object;
        var gotData = page.navigationContext;
        vm.set("mark", gotData.mark);
    };
    return LocationDetailPage;
}(BasePage_1.BasePage));
module.exports = new LocationDetailPage();
//# sourceMappingURL=locationdetail.js.map