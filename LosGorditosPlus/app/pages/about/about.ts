import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {screen} from "platform";
import {Page} from "ui/page";
import frame = require("ui/frame");
import { GestureTypes, GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");



let vm = new Observable({
	header_resena: 0,
	header_location: 0,
	ubicaciones:([
        { zona: "Altamira",
          mensaje: "Abierto hasta las 9:00pm"},
	    { zona: "Carrizal",
	 	  mensaje: "Abierto hasta las 9:00pm"},
	    { zona: "La Castellana",
	  	  mensaje: "Abierto hasta las 9:00pm"}
    ]),
	width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs}
);
class AboutPage extends BasePage{
    mainContentLoaded(args:EventData){
        //set the bindingContext for the AboutPage content here
        let view = <View>args.object;
        view.bindingContext = vm;
    }

    Resena() {
	    if (vm.get("header_resena") == 0){
	    	vm.set("header_resena",1);
	    	vm.set("header_location",0);
	   	} else {
			vm.set("header_resena",0);
	   	}
    }

    Ubicaciones() {
    	if (vm.get("header_location") == 0){
	    	vm.set("header_location",1);
	    	vm.set("header_resena",0);
	   	} else {
			vm.set("header_location",0);
	   	}
    }

}

export = new AboutPage();
