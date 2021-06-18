import { toNamespacedPath } from "path/posix";
import { handleSubmit } from "../formHandler";

beforeAll(()=>{
    global.Client = jest.genMockFromModule("../../index.js");
});
beforeEach(()=>{
    fetch.resetMocks();
})

describe("Testing submit", ()=>{
    test("Testing handleSubmit()", () =>{
        const e = new CustomEvent("test-event", {preventDefault: jest.fn()});
        const data= {
            subjectivity: "subjective",
            agreement: "agreement",
            irony: "nonironic",
            confidence: 90
        };
        fetch
            .once("apikey")
            .once(JSON.stringify(data));
    
        document.body.innerHTML=
            "<form\>"+
                "<input id=\"name\" value=\"Picard\"\>"+
                "<input id=\"url\" value=\"https://www.google.com/\">"+
                "<input id=\"text-fld\" value=\"sample text\">"+
                "<input id=\"lang-fld\" value=\"en\">"+
            "</form>"+
            "<div id=\"results\"></div>"+
            "<ul>"+
                "<li id=\"subjectivity\"></li>"+
                "<li id=\"agreement\"></li>"+
                "<li id=\"irony\"></li>"+
                "<li id=\"confidence\"></li>"+
            "</ul>";

        expect(handleSubmit).toBeDefined();
        handleSubmit(e);
        expect(Client.checkForName).toHaveBeenCalledWith("Picard");
        expect(Client.urlValidate).toHaveBeenCalledWith("https://www.google.com/");
        expect(fetch).toHaveBeenCalledWith("/apiKey")       
    });
});