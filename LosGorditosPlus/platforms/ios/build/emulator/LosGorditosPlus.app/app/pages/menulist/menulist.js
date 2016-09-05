"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable({ selectedTab: 0 });
var MenuListPage = (function (_super) {
    __extends(MenuListPage, _super);
    function MenuListPage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    MenuListPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    return MenuListPage;
}(BasePage_1.BasePage));
module.exports = new MenuListPage();
//# sourceMappingURL=menulist.js.map