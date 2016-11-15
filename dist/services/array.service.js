"use strict";
var ArrayService = (function () {
    function ArrayService() {
        Array.isArray = Array.isArray || (function (obj) { return Object.prototype.toString.call(obj) === '[object Array]'; });
    }
    ArrayService.prototype.flatten = function (array) {
        var result;
        var _loop_1 = function(isFlat) {
            isFlat = true;
            var flatResult = [];
            for (var _i = 0, _a = result || array; _i < _a.length; _i++) {
                var element = _a[_i];
                if (Array.isArray(element)) {
                    isFlat = false;
                    element.forEach(function (e) { return flatResult.push(e); });
                }
                else {
                    flatResult.push(element);
                }
            }
            result = flatResult;
            out_isFlat_1 = isFlat;
        };
        var out_isFlat_1;
        for (var isFlat = false; array && !isFlat;) {
            _loop_1(isFlat);
            isFlat = out_isFlat_1;
        }
        return result;
    };
    return ArrayService;
}());
exports.ArrayService = ArrayService;
//# sourceMappingURL=array.service.js.map