import { checkForName } from "../nameChecker";

describe("Testing input name", ()=>{
    test("Testing checkForName()", ()=>{
        const input = "Kirk";
        const badInput = "John";
        global.alert = jest.fn();
        expect(checkForName(input)).toBe(console.log("Welcome, Captain!"));
        expect(checkForName(badInput)).toBeUndefined();
    });
});