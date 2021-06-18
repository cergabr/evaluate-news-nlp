import { urlValidate } from "../urlChecker";

describe("Testing input url validation", ()=>{
    test("Testing urlValidate()", ()=>{
        jest.spyOn(window, "alert").mockImplementation(()=>{});
        urlValidate("https://www.google.com/");
        expect(window.alert).toHaveBeenCalledWith("Valid URL");
        urlValidate("asfa/s/jkh.o");
        expect(window.alert).toHaveBeenCalledWith("URL not valid, try again");
    });
});