import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import segmentedBarModule = require("ui/segmented-bar");
import {screen} from "platform"
import {Page} from "ui/page";

let vm = new Observable({ 
	groceryList:([
        { name: "Pizza con Peperoni", img: "~/images/7_Others/recursos-48", rank: "~/images/7_Others/componente-02", price: "6.700 Bsf", description: ""},
        { name: "Pasta a la Caprese", img: "~/images/7_Others/recursos-49", rank: "~/images/7_Others/componente-02", price: "6.700 Bsf", description: "" },
        { name: "eggs", img: "~/images/7_Others/recursos-48", rank: "~/images/7_Others/componente-02", price: "6.700 Bsf", description: "" }
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
    
}
export = new MenuListPage();
