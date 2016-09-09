import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";
import {topmost} from "ui/frame";
import {screen} from "platform";
import {Page} from "ui/page";

let vm = new Observable({
  nombre: 'Nombre',
  email: 'email',
  msg: 'Mensaje ...',
	width: screen.mainScreen.widthDIPs,
  height: screen.mainScreen.heightDIPs}
);

class ContactDetailPage extends BasePage{
    mainContentLoaded(args:EventData){
        //set the bindingContext for the AboutPage content here
        let view = <View>args.object;
        view.bindingContext = vm;
    }
}

export = new ContactDetailPage();
