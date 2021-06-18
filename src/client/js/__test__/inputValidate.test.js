import { inputValidate } from "../inputValidate";

describe("Testing input validation onblur", ()=>{
    test("Testing inputValidate()", () =>{
        document.body.innerHTML=
            "<input id=\"name\"\>"+
            "<span></span>"+
            "<input id=\"url\">"+
            "<span></span>";
        const e = {target: {id: "name",value:"Archer"}};

        expect(inputValidate(e)).toBe(true);
        expect(document.getElementById("name").classList.contains("valid"));   
        
        e.target.value="wrong";
        expect(inputValidate(e)).toBe(false);
        expect(document.getElementById("name").classList.contains("error"));
        expect(document.querySelector("#"+e.target.id+" + span").innerHTML).toBe("Wrong "+e.target.id+"!"); 
    });
});