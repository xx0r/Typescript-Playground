/// <reference path="../../typings/index.d.ts" />

import { ArrayService } from "./array.service";

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