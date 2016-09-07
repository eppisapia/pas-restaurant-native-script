"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    name: "default",
    price: "",
    img: "",
    rank: "",
    description: "",
    show: 0,
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs
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
    return LocationPage;
}(BasePage_1.BasePage));
module.exports = new LocationPage();
//# sourceMappingURL=location.js.map