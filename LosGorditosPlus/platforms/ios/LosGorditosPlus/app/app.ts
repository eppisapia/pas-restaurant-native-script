import * as application from "application";
import GMSServiceKey = require('./GMSServiceKey');


if(application.ios) {
GMSServiceKey(); 
}
application.start({ moduleName: "pages/menu/menu" });
