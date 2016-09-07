import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {topmost} from "ui/frame";
import {screen} from "platform";
import {Page} from "ui/page";
import frame = require("ui/frame");
import { GestureTypes, GestureEventData } from "ui/gestures";
import labelModule = require("ui/label");



let vm = new Observable({
	header_principal: 0,
	header_sede: 0,
  sede: "Selección de sede",
  lszonas: 0,
  infzona: 0,
  sel_gerente: "",
  sel_fijo: "",
  sel_movil: "",
	contact:([
        { gerente: "Alexander Ramirez",
          fijo: "0212-1234567",
          movil: "0414-1112233",
          zona: "Altamira"},
	    { gerente: "Ali Suarez",
          fijo: "0212-1234567",
          movil: "0414-1112233",
          zona: "Chacao"},
	    { gerente: "Alexander Ramirez",
          fijo: "0212-1234567",
          movil: "0414-1112233",
          zona: "Carrizal"}
    ]),
	width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs}
);

class ContactPage extends BasePage{
    mainContentLoaded(args:EventData){
        //set the bindingContext for the AboutPage content here
        let view = <View>args.object;
        view.bindingContext = vm;
    }

    Principal() {
	    if (vm.get("header_principal") == 0){
	    	vm.set("header_principal",1);
	    	vm.set("header_sede",0);
        vm.set("lszonas",0);
        vm.set("infzona",0);
	   	} else {
			vm.set("header_principal",0);
	   	}
    }

    Sede() {
    	if (vm.get("header_sede") == 0){
	    	vm.set("header_sede",1);
	    	vm.set("header_principal",0);
        vm.set("lszonas",1);
	   	} else {
			vm.set("header_sede",0);
      vm.set("lszonas",0);
      vm.set("infzona",0);
	   	}
    }

    Zonas() {
      vm.set("infzona",0);
      vm.set("sede", "Selección de sede");
      vm.set("lszonas",1);
    }

    changeZona(args) {
      let zona = args.view.text;
      vm.set("sede", zona);
      let ger = args.view.ger;
      vm.set("sel_gerente", ger);
      let fijo = args.view.fijo;
      vm.set("sel_fijo", fijo);
      let movil = args.view.movil;
      vm.set("sel_movil", movil);
      vm.set("lszonas",0);
      vm.set("infzona",1);
    }
}

export = new ContactPage();
