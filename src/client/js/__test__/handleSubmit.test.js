import { handleSubmit } from "../formHandler";

beforeAll(()=>{
    global.Client = jest.genMockFromModule("../../index.js");
});
beforeEach(()=>{
    fetch.resetMocks();
})

describe("Testing submit", ()=>{
    test("Testing handleSubmit()", ()=>{
        const e = new CustomEvent("test-event", {preventDefault: jest.fn()});
        fetch.mockResponseOnce(JSON.stringify({message: "this is a message"}));
    
        document.body.innerHTML=
            "<form\>"+
                "<input id=\"name\" value=\"Picard\"\>"+
            "</form>"+
            "<div id=\"results\"></div>";

        expect(handleSubmit).toBeDefined();
        handleSubmit(e);
        expect(Client.checkForName).toHaveBeenCalledWith("Picard");
        expect(fetch).toHaveBeenCalledWith("http://localhost:8000/test");
    });
});