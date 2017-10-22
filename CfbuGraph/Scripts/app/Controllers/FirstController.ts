module MainApp.Controllers {
    export class FirstController {
        value: string = "hello world";

        static $inject = [
            Consts.NgNames.scope];

        $onInit() { }

        constructor(
            private scope: ng.IScope
        ) {
            console.log("inside controller");
            this.value = "neco";
        }
    }
}