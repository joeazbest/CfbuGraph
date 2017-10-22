var MainApp;
(function (MainApp) {
    var Consts;
    (function (Consts) {
        class NgNames {
        }
        NgNames.scope = "$scope";
        NgNames.rootScope = "$rootScope";
        Consts.NgNames = NgNames;
    })(Consts = MainApp.Consts || (MainApp.Consts = {}));
})(MainApp || (MainApp = {}));
var MainApp;
(function (MainApp) {
    var Consts;
    (function (Consts) {
        class ConstNames {
        }
        ConstNames.appRootConst = "APPLICATION_ROOT";
        Consts.ConstNames = ConstNames;
    })(Consts = MainApp.Consts || (MainApp.Consts = {}));
})(MainApp || (MainApp = {}));
var MainApp;
(function (MainApp) {
    var Controllers;
    (function (Controllers) {
        class FirstController {
            constructor(scope) {
                this.scope = scope;
                this.value = "hello world";
                console.log("inside controller");
                this.value = "neco";
            }
            $onInit() { }
        }
        FirstController.$inject = [
            MainApp.Consts.NgNames.scope
        ];
        Controllers.FirstController = FirstController;
    })(Controllers = MainApp.Controllers || (MainApp.Controllers = {}));
})(MainApp || (MainApp = {}));
var MainApp;
(function (MainApp) {
    cfbuGraphModule = angular.module('mainApp', []);
    cfbuGraphModule.controller("FirstController", MainApp.Controllers.FirstController);
})(MainApp || (MainApp = {}));
//# sourceMappingURL=mainApp.js.map