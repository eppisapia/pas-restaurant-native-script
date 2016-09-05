"use strict";
var BasePage_1 = require("../../shared/BasePage");
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    groceryList: ([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48", rank: "~/images/Recursos/componente-02", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49", rank: "~/images/Recursos/componente-04", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "eggs", img: "~/images/7_Others/recursos-48", rank: "~/images/Recursos/componente-03", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." }
    ]),
    active: 0,
    titleTab: "",
    width: platform_1.screen.mainScreen.widthDIPs,
    height: platform_1.screen.mainScreen.heightDIPs
});
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
    MenuListPage.prototype.onNavigatingTo = function (args) {
        var page = args.object;
        var gotData = page.navigationContext;
        vm.set("titleTab", gotData.title);
        vm.set("active", gotData.tab);
    };
    MenuListPage.prototype.tabChange = function (args) {
        var tab = args.view.id.toLowerCase();
        var tabActive;
        var tabTitle;
        switch (tab) {
            case 'favoritos':
                tabActive = 0;
                tabTitle = 'favoritos';
                break;
            case 'principales':
                tabActive = 1;
                tabTitle = 'principales';
                break;
            case 'ensaladas':
                tabActive = 2;
                tabTitle = 'ensaladas';
                break;
            case 'postres':
                tabActive = 3;
                tabTitle = 'postres';
                break;
            case 'bebidas':
                tabActive = 4;
                tabTitle = 'bebidas';
                break;
            default:
                tabActive = 0;
                tabTitle = 'favoritos';
        }
        vm.set("active", tabActive);
        vm.set("titleTab", tabTitle);
    };
    MenuListPage.prototype.changeToDetail = function (args) {
        var dish_img = args.view.img;
        var dish_rank = args.view.rank;
        var dish_description = args.view.description;
        var dish_price = args.view.price;
        var dish_name = args.view.name;
        var navigationOptions = {
            moduleName: 'pages/menudetail/menudetail',
            context: {
                name: dish_name,
                img: dish_img,
                rank: dish_rank,
                price: dish_price,
                description: dish_description
            }
        };
        frame_1.topmost().navigate(navigationOptions);
    };
    return MenuListPage;
}(BasePage_1.BasePage));
module.exports = new MenuListPage();
//# sourceMappingURL=menulist.js.map