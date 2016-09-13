import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {topmost} from "ui/frame";
import {screen} from "platform";
import {Page} from "ui/page";
var mapsModule = require("nativescript-google-maps-sdk");

let vm = new Observable({ 
    width: screen.mainScreen.widthDIPs,
    height: screen.mainScreen.heightDIPs,
    marks:([
        { 
            latitude: 10.498086655450642,
            longitude: -66.85348734185897,
            title: "Caracas",
            snip: "Venezuela",
            dir: "Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital",
            gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
            },
        { 
            latitude: 10.50,
            longitude: -66.86,
            title: "Los Jardines",
            snip:"Distrito Capital",
            dir: "Los Jardines,Avenida Los Samám, Caracas, Distrito Capital",
            gerente: "Ali Suarez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
            },
        { 
            latitude: 10.347091,
            longitude: -66.992912,
            title: "Los Teques",
            snip: "Carrizal",
            dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
            gerente: "Alexander Ramirez",
            fijo: "0212-1234567",
            movil: "0414-1112233",
        }
    ]),
 });


class LocationPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }

  OnMapReady(args) {
    var mapView = args.object;
    console.log("Setting a marker...");
    let marcas=vm.get("marks");
    for (let i=0; i<marcas.length; i++){
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(marcas[i].latitude, marcas[i].longitude);
        marker.userData = { index : i+1};
        marker.data=marcas[i];
        mapView.addMarker(marker);
    }
  }
   
  onMarkerSelect(args) {
    console.log("Clicked on " +args.marker.data.dir);
    let inf=args.marker.data;
    var navigationOptions={
        moduleName:'pages/locationdetail/locationdetail',
        context:{
            mark: inf
        }
      }
    topmost().navigate(navigationOptions);
  }
   

}
export = new LocationPage();
