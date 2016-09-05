"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable();
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
    return AboutPage;
}(BasePage_1.BasePage));
module.exports = new AboutPage();
//# sourceMappingURL=about.js.map