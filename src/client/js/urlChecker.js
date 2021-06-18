export function urlValidate(url){
    if (url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
        return alert("Valid URL")
    }
    else{
        return alert("URL not valid, try again")
    }
}