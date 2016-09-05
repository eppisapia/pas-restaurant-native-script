"use strict";
var BasePage_1 = require("../../shared/BasePage");
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable({ myText: 'This is the home page' });
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
    }
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    HomePage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    HomePage.prototype.fun = function () {
        var page = frame_1.topmost().currentPage;
        var logo = page.getViewById("logo");
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    };
    return HomePage;
}(BasePage_1.BasePage));
module.exports = new HomePage();
//# sourceMappingURL=home.js.map