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
    mark: null
 });


class LocationDetailPage extends BasePage{
    //use this function to populate the bindingContext specific to this page
    //make sure the root element of the main content is setting "mainContentLoaded" as its loaded event
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }

  OnMapReady(args) {
    var mapView = args.object;
    let marca=vm.get("mark");
        console.log("VALUES :", marca.latitude);
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(marca.latitude, marca.longitude);
    marker.userData = { index : 1};
    mapView.addMarker(marker);
  }
   
  onMarkerSelect(args) {
    console.log("Clicked on " +args.marker.data.dir);
  }
   
  onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera)); 
  }

  onNavigatingTo(args) {
    var page = args.object;
    var gotData=page.navigationContext;
    vm.set("mark", gotData.mark);
    }

}
export = new LocationDetailPage();
