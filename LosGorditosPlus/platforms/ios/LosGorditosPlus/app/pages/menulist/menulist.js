"use strict";
var BasePage_1 = require("../../shared/BasePage");
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var vm = new observable_1.Observable({
    groceryList: ([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48.png", rank: "~/images/Recursos/componente-02.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49.png", rank: "~/images/Recursos/componente-04.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "eggs", img: "~/images/7_Others/recursos-48.png", rank: "~/images/Recursos/componente-03.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." }
    ]),
    principalesList: ([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48.png", rank: "~/images/Recursos/componente-06.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49.png", rank: "~/images/Recursos/componente-06.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
    ]),
    favoritosList: ([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48.png", rank: "~/images/Recursos/componente-06.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49.png", rank: "~/images/Recursos/componente-06.png", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: 'Tiramisu', price: "1.500 Bsf", img: "~/images/Recursos/recursos-50.png", rank: "~/images/Recursos/componente-06.png", description: 'Capas de ponque mojado en cafe y separado por una crema a base de queso mascarpone con chips de chocolates' },
        { name: 'Ensalada Cesar con Camarones', price: "4.300 Bsf", img: "~/images/Recursos/recursos-52.png", rank: "~/images/Recursos/componente-06.png", description: 'Ingredientes: Lechuga, Queso Parmesano, Pollo, Camarones, Adereso Cesar' },
    ]),
    ensaladasList: ([
        { name: 'Ensalada Cesar con Camarones', price: "4.300 Bsf", img: "~/images/Recursos/recursos-52.png", rank: "~/images/Recursos/componente-06.png", description: 'Ingredientes: Lechuga, Queso Parmesano, Pollo, Camarones, Adereso Cesar' },
    ]),
    postresList: ([
        { name: 'Tiramisu', price: "1.500 Bsf", img: "~/images/Recursos/recursos-50.png", rank: "~/images/Recursos/componente-06.png", description: 'Capas de ponque mojado en cafe y separado por una crema a base de queso mascarpone con chips de chocolates' },
        { name: 'Profiteroles', price: "1.200 Bsf", img: "~/images/Recursos/recursos-51.png", rank: "~/images/Recursos/componente-04.png", description: 'Tres biscochos rellenos de crema pastelera bañados con un salsa de chocolate oscuro' },
    ]),
    bebidasList: ([
        { name: 'Coca-Cola', price: "500 Bsf", img: "~/images/Recursos/recursos-53.png", rank: "~/images/Recursos/componente-06.png", description: 'Coca-Cola' },
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
        switch (gotData.tab) {
            case 0:
                vm.set("groceryList", vm.get("favoritosList"));
                break;
            case 1:
                vm.set("groceryList", vm.get("principalesList"));
                break;
            case 2:
                vm.set("groceryList", vm.get("ensaladasList"));
                break;
            case 3:
                vm.set("groceryList", vm.get("postresList"));
                break;
            case 4:
                vm.set("groceryList", vm.get("bebidasList"));
                break;
            default:
                vm.set("groceryList", vm.get("bebidasList"));
        }
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
                vm.set("groceryList", vm.get("favoritosList"));
                break;
            case 'principales':
                tabActive = 1;
                tabTitle = 'principales';
                vm.set("groceryList", vm.get("principalesList"));
                break;
            case 'ensaladas':
                tabActive = 2;
                tabTitle = 'ensaladas';
                vm.set("groceryList", vm.get("ensaladasList"));
                break;
            case 'postres':
                tabActive = 3;
                tabTitle = 'postres';
                vm.set("groceryList", vm.get("postresList"));
                break;
            case 'bebidas':
                tabActive = 4;
                tabTitle = 'bebidas';
                vm.set("groceryList", vm.get("bebidasList"));
                break;
            default:
                tabActive = 0;
                tabTitle = 'favoritos';
                vm.set("groceryList", vm.get("favoritosList"));
                break;
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