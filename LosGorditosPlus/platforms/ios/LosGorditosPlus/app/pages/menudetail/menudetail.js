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
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs
});
var MenuDetailPage = (function (_super) {
    __extends(MenuDetailPage, _super);
    function MenuDetailPage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    MenuDetailPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    MenuDetailPage.prototype.onNavigatingTo = function (args) {
        var page = args.object;
        var gotData = page.navigationContext;
        vm.set("name", gotData.name);
        vm.set("price", gotData.price);
        vm.set("img", gotData.img);
        vm.set("rank", gotData.rank);
        vm.set("description", gotData.description);
    };
    return MenuDetailPage;
}(BasePage_1.BasePage));
module.exports = new MenuDetailPage();
//# sourceMappingURL=menudetail.js.map