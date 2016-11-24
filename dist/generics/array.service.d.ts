export declare class ArrayService {
    constructor();
    flatten<T>(array: T[]): T[];
    sortByNumber<T>(array: T[], propertySelectorFn: (element: T) => number, ascending?: boolean): T[];
}
