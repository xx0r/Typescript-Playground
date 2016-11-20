/// <reference path="../typings/index.d.ts" />

import { SampleController } from "typescript-node-module";

describe("web test suite",
    () =>
    {
        it("should resolve external node module",
            () =>
            {
                expect(SampleController)
                    .toBeDefined();
            });
    });