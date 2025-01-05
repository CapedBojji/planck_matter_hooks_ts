import { Scheduler } from "./types";


declare class Plugin<T extends unknown[] = unknown[]> {
    constructor(module: ModuleScript)
    build(scheduler: Scheduler<T>): void;
}

export = Plugin;