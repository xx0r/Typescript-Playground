"use strict";
var array_service_1 = require("./services/array.service");
(function () {
    var arrayService = new array_service_1.ArrayService();
    var array = [[1, 2, [3]], 4];
    console.info(array);
    console.info(arrayService.flatten(array));
})();
//# sourceMappingURL=main.js.map