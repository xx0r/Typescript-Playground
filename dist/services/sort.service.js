"use strict";
var SortService = (function () {
    function SortService() {
    }
    SortService.prototype.sortByNumber = function (array, propertySelectorFn, ascending) {
        if (ascending === void 0) { ascending = true; }
        return array && array.sort(function (a, b) {
            var propertyA = propertySelectorFn(a);
            var propertyB = propertySelectorFn(b);
            var diff = propertyA - propertyB;
            var comparison = isFinite(diff) ? diff : isFinite(propertyA) ? -1 : 1;
            return ascending ? comparison : -comparison;
        });
    };
    return SortService;
}());
exports.SortService = SortService;
//# sourceMappingURL=sort.service.js.map