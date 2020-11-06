enum Environments {
    Local = 'local',
    Dev = 'dev',
    Prod = 'prod',
    QA = 'qa'
}

class Environment {
    private environment: string;

    constructor(environment: string) {
        this.environment = environment;
    }

    getPort(): number {
        if (this.environment === Environments.Prod) {
            return 8080;
        } else if (this.environment === Environments.Dev) {
            return 8070;
        } else if (this.environment === Environments.QA) {
            return 8095;
        } else {
            return 3000;
        }
    }

    getDBName(): string {
        if (this.environment === Environments.Prod) {
            return 'db_test_prod';
        } else if (this.environment === Environments.Dev) {
            return 'db_test_dev';
        } else if (this.environment === Environments.QA) {
            return 'db_test_pre';
        } else {
            return 'db_test_local';
        }
    }
}

export default new Environment(Environments.Local);
