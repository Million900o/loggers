declare module 'loggers' {
  interface LoggerOptions {
    debug?: boolean,
    method?: any,
    colors?: boolean,
    newLine?: boolean,
    catch?: boolean;
  }

  export class Logger {
    constructor(options: LoggerOptions);
    private send: any;
    public readonly options: LoggerOptions;
    private _formatArgs(args: string[]): string;
    private _formatColors(text: string, color: any): string;
    private _newLine(): string;
    public log(...args: any[]): boolean;
    public warn(...args: any[]): boolean;
    public error(...args: any[]): boolean;
    public err(...args: any[]): boolean;
    public debug(...args: any[]): boolean;
  }
}