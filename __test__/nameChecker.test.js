// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"
describe(checkForName, () => {
    test("checkForName is defined", () => {
        expect(checkForName).toBeDefined
    });
});