import IConfig from "~src/interfaces/config";
import ILogger from "~src/interfaces/logger";
declare class Logger implements ILogger {
    private logger;
    constructor(config: IConfig);
    error: (msg: string) => any;
    warn: (msg: string) => any;
    info: (msg: string) => any;
    debug: (msg: string) => any;
}
export default Logger;
