"use strict";
var BasePage_1 = require("../../shared/BasePage");
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable({ myText: 'This is the menu page' });
var MenuPage = (function (_super) {
    __extends(MenuPage, _super);
    function MenuPage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    MenuPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    MenuPage.prototype.changeFavoritos = function () {
        var navigationOptions = {
            moduleName: 'pages/menulist/menulist',
            context: { tab: 0,
                title: "favoritos"
            }
        };
        frame_1.topmost().navigate(navigationOptions);
    };
    return MenuPage;
}(BasePage_1.BasePage));
module.exports = new MenuPage();
//# sourceMappingURL=menu.js.map