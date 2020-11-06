"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["Local"] = "local";
    Environments["Dev"] = "dev";
    Environments["Prod"] = "prod";
    Environments["QA"] = "qa";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.Prod) {
            return 8080;
        }
        else if (this.environment === Environments.Dev) {
            return 8070;
        }
        else if (this.environment === Environments.QA) {
            return 8095;
        }
        else {
            return 3000;
        }
    }
    getDBName() {
        if (this.environment === Environments.Prod) {
            return 'db_test_prod';
        }
        else if (this.environment === Environments.Dev) {
            return 'db_test_dev';
        }
        else if (this.environment === Environments.QA) {
            return 'db_test_pre';
        }
        else {
            return 'db_test_local';
        }
    }
}
exports.default = new Environment(Environments.Local);
