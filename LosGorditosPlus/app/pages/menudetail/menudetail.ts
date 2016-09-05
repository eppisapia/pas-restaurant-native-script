import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import segmentedBarModule = require("ui/segmented-bar");
import {screen} from "platform"
import {Page} from "ui/page";
import buttonModule = require("ui/button");

let vm = new Observable({ 
    name: "default",
    price: "",
    img: "",
    rank: "",
    description:"",
    width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs
 });

class MenuDetailPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }
    
    onNavigatingTo(args) {
    	var page = args.object;
        var gotData=page.navigationContext;
        vm.set("name", gotData.name);
        vm.set("price", gotData.price);
        vm.set("img", gotData.img);
        vm.set("rank", gotData.rank);
        vm.set("description", gotData.description);
	}

}
export = new MenuDetailPage();
