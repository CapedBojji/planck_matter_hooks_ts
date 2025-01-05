import { Plugin, Scheduler } from "@rbxts/planck/out/types";


declare class PlanckMatterHooksPlugin implements Plugin {
    constructor(module: ModuleScript)
    build<T extends unknown[]>(scheduler: Scheduler<T>): void;
}

export = PlanckMatterHooksPlugin;