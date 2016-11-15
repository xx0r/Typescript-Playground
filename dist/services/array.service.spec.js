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
//# sourceMappingURL=array.service.spec.js.map