"use strict";
var array_service_1 = require("./array.service");
describe("Array flattening testing suite", function () {
    var arrayService = new array_service_1.ArrayService();
    var array = [[1, 2, [3]], 4];
    var flatArray = [1, 2, 3, 4];
    it("should flatten the array", function () {
        expect(arrayService.flatten(array))
            .toEqual(flatArray);
    });
    it("should work with an empty array", function () {
        expect(arrayService.flatten([]))
            .toEqual([]);
    });
    it("should work with a deep array", function () {
        var deepArray = [];
        var resultArray = [];
        var element = deepArray;
        for (var i = 0; i < 1000; i++) {
            element.push([], i);
            resultArray.unshift(i);
            element = element[0];
        }
        expect(arrayService.flatten(deepArray))
            .toEqual(resultArray);
    });
    it("should not fail on undefined", function () {
        expect(arrayService.flatten(undefined))
            .toEqual(undefined);
    });
    it("should not fail on undefined element", function () {
        expect(arrayService.flatten(array.concat(undefined)))
            .toEqual(flatArray.concat(undefined));
    });
});
describe("Sorting test suite", function () {
    var service = new array_service_1.ArrayService();
    var array = [
        { age: 21, name: "John" },
        { age: 46, name: "James" },
        { age: 31, name: "Jim" },
        { age: Infinity, name: "Doe" },
        { age: 29, name: "Jackie" }
    ];
    var sortedArray = [
        { age: 21, name: "John" },
        { age: 29, name: "Jackie" },
        { age: 31, name: "Jim" },
        { age: 46, name: "James" },
        { age: Infinity, name: "Doe" }
    ];
    var descendingSortedArray = [
        { age: Infinity, name: "Doe" },
        { age: 46, name: "James" },
        { age: 31, name: "Jim" },
        { age: 29, name: "Jackie" },
        { age: 21, name: "John" }
    ];
    var arrayWithDeepProperties = array.map(function (element, index) { return { rank: index, person: element }; });
    var sortedArrayWithDeepProperties = [
        { rank: 0, person: { age: 21, name: "John" } },
        { rank: 4, person: { age: 29, name: "Jackie" } },
        { rank: 2, person: { age: 31, name: "Jim" } },
        { rank: 1, person: { age: 46, name: "James" } },
        { rank: 3, person: { age: Infinity, name: "Doe" } }
    ];
    it("should pass", function () {
        expect(true).toBe(true);
    });
    it("should be sorted by age", function () {
        expect(service.sortByNumber(array, function (element) { return element.age; })).toEqual(sortedArray);
    });
    it("should be sorted descending by age", function () {
        expect(service.sortByNumber(array, function (element) { return element.age; }, false)).toEqual(descendingSortedArray);
    });
    it("should sort an array with deep property", function () {
        expect(service.sortByNumber(arrayWithDeepProperties, function (element) { return element.person.age; })).toEqual(sortedArrayWithDeepProperties);
    });
});
//# sourceMappingURL=array.service.spec.js.map