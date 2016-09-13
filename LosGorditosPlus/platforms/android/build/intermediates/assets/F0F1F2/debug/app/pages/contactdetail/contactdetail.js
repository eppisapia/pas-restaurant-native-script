"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    nombre: 'Nombre',
    email: 'email',
    msg: 'Mensaje ...',
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs });
var ContactDetailPage = (function (_super) {
    __extends(ContactDetailPage, _super);
    function ContactDetailPage() {
        _super.apply(this, arguments);
    }
    ContactDetailPage.prototype.mainContentLoaded = function (args) {
        //set the bindingContext for the AboutPage content here
        var view = args.object;
        view.bindingContext = vm;
    };
    return ContactDetailPage;
}(BasePage_1.BasePage));
module.exports = new ContactDetailPage();
//# sourceMappingURL=contactdetail.js.map