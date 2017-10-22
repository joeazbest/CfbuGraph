module MainApp {
    declare var cfbuGraphModule: ng.IModule;

    cfbuGraphModule = angular.module('mainApp', []);

    cfbuGraphModule.controller("FirstController", Controllers.FirstController);
}