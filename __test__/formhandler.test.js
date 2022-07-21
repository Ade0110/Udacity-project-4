// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
describe(handleSubmit, () => {
    test("handleSubmit is defined", () => {
        expect(handleSubmit).toBeDefined
    });
});