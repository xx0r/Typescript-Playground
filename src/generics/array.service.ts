export class ArrayService
{
    constructor()
    {
        // polyfill when no native support is available
        Array.isArray = Array.isArray || ((obj: any): obj is any[] => Object.prototype.toString.call(obj) === '[object Array]');
    }

    /**
     * Flattens an array into a new array
     * @param array Array to be flattened
     * @returns A new flattened array instance
     */
    public flatten<T>(array: T[]): T[]
    {
        // populate the resulting array, so the input array would not be modified
        let result: T[];

        // recursion would be elegant,
        // but let's loop instead to prevent stack overflow
        for (let isFlat=false; array && !isFlat; )
        {
            isFlat = true;
            let flatResult: T[] = [];

            // enumerate the (partial) result or the array in case the result is not populated yet
            for (let element of result || array)
            {
                if (Array.isArray(element))
                {
                    isFlat = false; // array is not yet flat, we need another iteration
                    (<T[]>element).forEach(e => flatResult.push(e));
                }
                else
                {
                    flatResult.push(element);
                }
            }

            // save the partial result
            result = flatResult;
        }

        return result;
    }

    /**
    * Sorts an array by a property of number type
    * @param array Array to be sorted
    * @param propertySelector Function that selects a property of an array element by which the array should be sorted
    * @param ascending True if the array should be sorted in ascending order, false for descending
    * @returns Sorted array
    */
    public sortByNumber<T>(array: T[], propertySelectorFn: (element: T) => number, ascending: boolean = true): T[]
    {
        return array && array.sort((a: T, b: T) =>
        {
            let propertyA = propertySelectorFn(a);
            let propertyB = propertySelectorFn(b);

            let diff = propertyA - propertyB;
            let comparison = isFinite(diff) ? diff : isFinite(propertyA) ? -1 : 1;  // let non-finite numbers and NaNs bubble to the end of the array

            return ascending ? comparison : -comparison;
        });
    }
}