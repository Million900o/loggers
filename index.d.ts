declare module 'loggers' {
  interface LoggerOptions {
    debug: boolean,
    method: any,
    colors: boolean,
    newLine: boolean,
    catch: boolean;
  }

  export class Logger {
    constructor(options: LoggerOptions);
    private send: any;
    public readonly options: LoggerOptions;
    private _formatArgs(): string;
    private _formatColors(): string;
    private _newLine(): string;
    public log(): boolean;
    public warn(): boolean;
    public error(): boolean;
    public err(): boolean;
    public debug(): boolean;
  }
}