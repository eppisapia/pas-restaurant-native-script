import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {screen} from "platform";
import {Page} from "ui/page";
import {topmost} from "ui/frame";

let vm = new Observable({
	header_resena: 0,
	header_location: 0,
	ubicaciones:([
        { zona: "Altamira",
          mensaje: "Abierto hasta las 9:00pm",
          data: ([ {latitude: 10.498086655450642,
          			      longitude: -66.85348734185897,
          			      title: "Caracas",
          			      snip: "Venezuela",
          			      dir: "Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital",
          			      gerente: "Alexander Ramirez",
          			      fijo: "0212-1234567",
          			      movil: "0414-1112233"}]),
	    },
	    { 	zona: "Carrizal",
	 	  	mensaje: "Abierto hasta las 9:00pm",
	 	  	data: ([
	 	  			{latitude: 10.347091,
	 	  	        longitude: -66.992912,
	 	  	        title: "Los Teques",
	 	  	        snip: "Carrizal",
	 	  	        dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
	 	  	        gerente: "Alexander Ramirez",
	 	  	        fijo: "0212-1234567",
	 	  	        movil: "0414-1112233"}]),
	 	   },
	    { 	zona: "La Castellana",
	  	  	mensaje: "Abierto hasta las 9:00pm",
	  	  	data: ([
  	  		  	    {latitude: 10.50,
  	  	            longitude: -66.86,
  	  	            title: "Los Jardines",
  	  	            snip:"Distrito Capital",
  	  	            dir: "Los Jardines,Avenida Los Samám, Caracas, Distrito Capital",
  	  	            gerente: "Ali Suarez",
  	  	            fijo: "0212-1234567",
  	  	            movil: "0414-1112233"}]),
	  	}
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

    Sede_Location(args){
    	let inf=args.data;
    	console.log("Clicked on " +args.data);

    }

}

export = new AboutPage();
