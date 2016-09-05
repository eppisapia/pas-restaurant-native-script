"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var vm = new observable_1.Observable({ blackBackground: false });
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage() {
        _super.apply(this, arguments);
    }
    SettingsPage.prototype.mainContentLoaded = function (args) {
        var view = args.object;
        view.bindingContext = vm;
    };
    return SettingsPage;
}(BasePage_1.BasePage));
;
module.exports = new SettingsPage();
//# sourceMappingURL=settings.js.map