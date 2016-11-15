/// <reference path="../../typings/index.d.ts" />

import { SortService } from "./sort.service";

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

describe("Sorting test suite",
    () =>
    {
        let service = new SortService();

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