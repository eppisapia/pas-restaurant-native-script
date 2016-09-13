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
        { mensaje: "Abierto hasta las 9:00pm",
          latitude: 10.498086655450642,
          longitude: -66.85348734185897,
          title: "Altamira",
	      snip: "Venezuela",
	      dir: "Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital",
	      gerente: "Alexander Ramirez",
	      fijo: "0212-1234567",
	      movil: "0414-1112233",
	    },
	    { 	mensaje: "Abierto hasta las 9:00pm",
			latitude: 10.347091,
	 	  	longitude: -66.992912,
  	        title: "Los Teques",
  	        snip: "Carrizal",
  	        dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
  	        gerente: "Alexander Ramirez",
  	        fijo: "0212-1234567",
  	        movil: "0414-1112233",
	 	   },
	    {  	mensaje: "Abierto hasta las 9:00pm",
  	  		latitude: 10.50,
            longitude: -66.86,
            title: "Los Jardines",
            snip:"Distrito Capital",
            dir: "Los Jardines,Avenida Los Samám, Caracas, Distrito Capital",
            gerente: "Ali Suarez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
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
    	
    	let arg_latitude=args.view.latitude;
    	let arg_longitude=args.view.longitude;
    	let arg_dir=args.view.dir;
    	let arg_gerente=args.view.gerente;
    	let arg_fijo= args.view.fijo;
    	let arg_movil= args.view.movil;
    	var navigationOptions={
	        moduleName:'pages/locationdetail/locationdetail',
	        context:{
	            mark: {
	            	latitude: arg_latitude,
	            	longitude: arg_longitude,
	            	dir: arg_dir,
	            	gerente: arg_gerente,
	            	fijo: arg_fijo,
	            	movil: arg_movil
	            }
	        }
	      }
    	topmost().navigate(navigationOptions);
    }

}

export = new AboutPage();
