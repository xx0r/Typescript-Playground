export class SortService
{
    /**
     * Sorts an array by a property of number type
     * @param array Array to be sorted
     * @param propertySelector Function that selects a property of an array element by which the array should be sorted
     * @param ascending True if the array should be sorted in ascending order, false for descending
     * @returns Sorted array
     */
    public sortByNumber<T>(array: T[], propertySelectorFn: (element: T) => number, ascending:boolean = true): T[]
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