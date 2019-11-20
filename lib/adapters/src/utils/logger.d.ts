import IConfig from "~src/interfaces/config";
import ILogger from "~src/interfaces/logger";
declare class Logger implements ILogger {
    private logger;
    constructor(config: IConfig);
    error: (msg: string) => ILogger;
    warn: (msg: string) => ILogger;
    info: (msg: string) => ILogger;
    debug: (msg: string) => ILogger;
}
export default Logger;
