import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import segmentedBarModule = require("ui/segmented-bar");
import {screen} from "platform"
import {Page} from "ui/page";
import dialogs = require("ui/dialogs");

let vm = new Observable({ 
	groceryList:([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48", rank: "~/images/Recursos/componente-02", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso."},
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49", rank: "~/images/Recursos/componente-04", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." },
        { name: "eggs", img: "~/images/7_Others/recursos-48", rank: "~/images/Recursos/componente-03", price: "6.700 Bsf", description: "1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso." }
    ]),
    active: 0,
    titleTab: "",
    width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs
 });

class MenuListPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }
    
    onNavigatingTo(args) {
    	var page = args.object;
        var gotData=page.navigationContext;
        vm.set("titleTab", gotData.title);
        vm.set("active", gotData.tab);

	}

    tabChange(args){
        let tab = args.view.id.toLowerCase();
        let tabActive ;
        let tabTitle ;
        switch (tab) 
        { 
        case'favoritos': 
          tabActive=0;
          tabTitle='favoritos';
          break; 
        case'principales': 
          tabActive=1;
          tabTitle='principales'; 
          break; 
        case'ensaladas': 
          tabActive=2;
          tabTitle='ensaladas';
          break; 
        case'postres': 
          tabActive=3;
          tabTitle='postres';
          break; 
        case'bebidas': 
          tabActive=4;
          tabTitle='bebidas';
          break; 
        default: 
          tabActive=0;
          tabTitle='favoritos'; 
        } 
        vm.set("active", tabActive);
        vm.set("titleTab", tabTitle);
    }
    
     changeToDetail(args) {
      let dish_img = args.view.img;
      let dish_rank=  args.view.rank;
      let dish_description= args.view.description;
      let dish_price= args.view.price;
      let dish_name= args.view.name
      var navigationOptions={
          moduleName:'pages/menudetail/menudetail',
          context:{
                  name: dish_name,
                  img: dish_img,
                  rank: dish_rank,
                  price: dish_price,
                  description: dish_description
                  }
      }
      topmost().navigate(navigationOptions);
  }
}
export = new MenuListPage();
