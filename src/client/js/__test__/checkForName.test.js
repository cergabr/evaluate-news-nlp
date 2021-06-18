import { checkForName } from "../nameChecker";

describe("Testing input name validation", ()=>{
    test("Testing checkForName()", ()=>{
        jest.spyOn(window, "alert").mockImplementation(()=>{});
        checkForName("Kirk");
        expect(window.alert).toHaveBeenCalledWith("Welcome, Captain!");
        checkForName("John");
        expect(window.alert).toHaveBeenCalledWith("Wrong name, try again");
    });
});