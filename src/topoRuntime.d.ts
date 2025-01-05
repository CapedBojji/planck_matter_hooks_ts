
interface TopoRuntime {
    start: (node: unknown, fn: (...args: unknown[]) => unknown) => void;
    useHookState: <T extends unknown[]>(discriminator: unknown, cleanup: (...args: T) => void) => T;
    useFrameState: () => unknown;
    useCurrentSystem: () => unknown;
    withinTopoContext: () => boolean;
}

declare const topoRuntime: TopoRuntime;
export = topoRuntime;