"use strict";
var array_service_1 = require("./generics/array.service");
var typescript_node_module_1 = require("typescript-node-module");
(function (global) {
    var controller = new typescript_node_module_1.SampleController();
    controller.process();
    var arrayService = new array_service_1.ArrayService();
    var array = [[1, 2, [3]], 4];
    console.info(array);
    console.info(arrayService.flatten(array));
})(this);
//# sourceMappingURL=main.js.map