import { ArrayService } from "./array.service";

// interfaces for testing purposes
interface IPerson
{
    age: number;
    name: string;
}

interface INinja
{
    rank: number;
    person: IPerson;
}


// Test suites

describe("Array flattening testing suite",
    () =>
    {
        let arrayService = new ArrayService();

        let array = [[1, 2, [3]], 4];
        let flatArray = [1, 2, 3, 4];

        it("should flatten the array",
            () =>
            {
                expect(arrayService.flatten(array))
                    .toEqual(flatArray);
            });

        it("should work with an empty array",
            () =>
            {
                expect(arrayService.flatten([]))
                    .toEqual([]);
            });

        it("should work with a deep array",
            () =>
            {
                let deepArray: any[] = [];
                let resultArray: any[] = [];

                let element = deepArray;

                for (var i = 0; i < 1000; i++)
                {
                    element.push([], i);
                    resultArray.unshift(i);

                    element = element[0];
                }

                //console.log(deepArray);
                //console.log(resultArray);

                expect(arrayService.flatten(deepArray))
                    .toEqual(resultArray);
            });

        it("should not fail on undefined",
            () =>
            {
                expect(arrayService.flatten(undefined))
                    .toEqual(undefined);
            });

        it("should not fail on undefined element",
            () =>
            {
                expect(arrayService.flatten(array.concat(undefined)))
                    .toEqual(flatArray.concat(undefined));
            });
    });


describe("Sorting test suite",
    () =>
    {
        let service = new ArrayService();

        let array: IPerson[] =
            [
                { age: 21, name: "John" },
                { age: 46, name: "James" },
                { age: 31, name: "Jim" },
                { age: Infinity, name: "Doe" },
                { age: 29, name: "Jackie" }
            ];

        let sortedArray: IPerson[] =
            [
                { age: 21, name: "John" },
                { age: 29, name: "Jackie" },
                { age: 31, name: "Jim" },
                { age: 46, name: "James" },
                { age: Infinity, name: "Doe" }
            ];

        let descendingSortedArray: IPerson[] =
            [
                { age: Infinity, name: "Doe" },
                { age: 46, name: "James" },
                { age: 31, name: "Jim" },
                { age: 29, name: "Jackie" },
                { age: 21, name: "John" }
            ];

        let arrayWithDeepProperties: INinja[] = array.map((element, index) => <INinja>{ rank: index, person: element });

        let sortedArrayWithDeepProperties: INinja[] =
            [
                { rank: 0, person: { age: 21, name: "John" } },
                { rank: 4, person: { age: 29, name: "Jackie" } },
                { rank: 2, person: { age: 31, name: "Jim" } },
                { rank: 1, person: { age: 46, name: "James" } },
                { rank: 3, person: { age: Infinity, name: "Doe" } }
            ];

        it("should pass", () =>
        {
            expect(true).toBe(true);
        });

        it("should be sorted by age",
            () =>
            {
                expect(service.sortByNumber(array, (element) => element.age)).toEqual(sortedArray);
            });

        it("should be sorted descending by age",
            () =>
            {
                expect(service.sortByNumber(array, (element) => element.age, false)).toEqual(descendingSortedArray);
            });

        it("should sort an array with deep property",
            () =>
            {
                expect(service.sortByNumber(arrayWithDeepProperties, (element) => element.person.age)).toEqual(sortedArrayWithDeepProperties);
            });
    });