"use strict";
var sort_service_1 = require("./sort.service");
describe("Sorting test suite", function () {
    var service = new sort_service_1.SortService();
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
//# sourceMappingURL=sort.service.spec.js.map