import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let vm = new Observable({ myText: 'This is the menu page' });

class MenuPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }

    changeFavoritos() {
	    var navigationOptions={
	        moduleName:'pages/menulist/menulist',
	        context:{tab: 0,
	                title: "favoritos"
	                }
	    }
	    topmost().navigate(navigationOptions);
	}
}
export = new MenuPage();
