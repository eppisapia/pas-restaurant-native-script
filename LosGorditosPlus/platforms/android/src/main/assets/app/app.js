"use strict";
var application = require("application");
var GMSServiceKey = require('./GMSServiceKey');
if (application.ios) {
    GMSServiceKey();
}
application.start({ moduleName: "pages/menu/menu" });
//# sourceMappingURL=app.js.map