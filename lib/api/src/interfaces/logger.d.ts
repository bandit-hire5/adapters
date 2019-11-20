export interface LogMethod {
    (msg: string): Logger;
}
export default interface Logger {
    error: LogMethod;
    warn: LogMethod;
    info: LogMethod;
    debug: LogMethod;
}
