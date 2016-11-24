import { ArrayService } from "./generics/array.service";
import { SampleController } from "typescript-node-module";

((global: any) =>
{
    let controller = new SampleController();
    controller.process();

    let arrayService = new ArrayService();

    let array = [[1, 2, [3]], 4];

    console.info(array);
    console.info(arrayService.flatten(array));
})(this);