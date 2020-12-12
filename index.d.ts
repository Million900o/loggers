declare module 'logger' {
  interface Options {
    debug: boolean,
    method: function,
    colors: boolean,
    newLine: boolean,
    catch: boolean;
  }

  export class Logger {
    constructor(options: Options);
    private send: function;
    public readonly options: Options;
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