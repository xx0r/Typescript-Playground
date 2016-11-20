"use strict";
var typescript_node_module_1 = require("typescript-node-module");
describe("web test suite", function () {
    it("should resolve external dependency", function () {
        expect(typescript_node_module_1.SampleController)
            .toBeDefined();
    });
});
//# sourceMappingURL=main.spec.js.map