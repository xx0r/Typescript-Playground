import { ArrayService } from "./services/array.service";

(() =>
{
    let arrayService = new ArrayService();

    let array = [[1, 2, [3]], 4];

    console.info(array);
    console.info(arrayService.flatten(array));
})();