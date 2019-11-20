import { injectable, inject } from "inversify";
import winston, { Logger as IWinstonLogger } from "winston";
import { CONFIG } from "~src/container/identifiers";
import IConfig from "~src/interfaces/config";
import ILogger from "~src/interfaces/logger";

@injectable()
class Logger implements ILogger {
  private logger: IWinstonLogger;

  constructor(@inject(CONFIG) config: IConfig) {
    const options: winston.LoggerOptions = {
      transports: [
        new winston.transports.Console({
          level: config.app.IS_PRODUCTION_MODE ? "error" : "debug",
        }),
      ],
    };

    this.logger = winston.createLogger(options);
  }

  error = (msg: string): ILogger => this.logger.error(msg);

  warn = (msg: string): ILogger => this.logger.warn(msg);

  info = (msg: string): ILogger => this.logger.info(msg);

  debug = (msg: string): ILogger => this.logger.debug(msg);
}

export default Logger;
