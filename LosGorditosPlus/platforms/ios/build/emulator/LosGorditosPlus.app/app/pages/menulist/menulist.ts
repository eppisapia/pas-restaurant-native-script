import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import tabViewModule = require("ui/tab-view");

let vm = new Observable({ selectedTab: 0 });

class MenuListPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }
    
}
export = new MenuListPage();
