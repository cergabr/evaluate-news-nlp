export function inputValidate(e){
    const value=e.target.value.trim();
    const id=e.target.id;
    const elem=document.getElementById(id);

    if (value !== ""){
        let valid = false;
        //checking input by id with regex
        switch(id){
            case "name":
                if(value.match(/^Picard$|^Janeway$|^Kirk$|^Archer$|^Georgiou$/)){
                    valid=true;
                }
                break;
            case "url":
                if(value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
                    valid=true;
                }
                break;
            case "text-fld":
                if(value !== ""){
                    valid=true;
                }
                break;
            case "lang-fld":
                if(value.match(/^[a-z]{2}$/i)){
                    valid=true;
                }
                break;
            default:
        }
        //if the input is valid
        if(valid){
            elem.classList.add("valid");
            elem.classList.remove("error");
            document.querySelector("#"+id+" + span").innerHTML = "";
            return true;
        }
        //if input is invalid add error
        else{
            elem.classList.add("error");
            elem.classList.remove("valid");
            document.querySelector("#"+id+" + span").innerHTML = "Wrong "+id+"!";
            return false;
        }
    }
    else{
        if (id.endsWith("-fld")){
            elem.classList.add("error");
            elem.classList.remove("valid");
            document.querySelector("#"+id+" + span").innerHTML = "Empty field! Fill out to procede";
            return false;
        }
    }
}