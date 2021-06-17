export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formName = document.getElementById("name").value;
    const inputURL = document.getElementById("url").value;
    //VALIDATION
    Client.checkForName(formName);
    Client.urlValidate(inputURL);
    
    const formText = document.getElementById("text-fld").value;
    const formLang = document.getElementById("lang-fld").value;

    console.log("::: Form Submitted :::");

    const formData = new FormData();
    formData.append("key", "");
    formData.append("txt", formText);
    formData.append("lang", formLang);

    const requestOption = {
        method: "POST",
        body: formData,
        redirect: "follow"
    }  

    fetch("/apiKey")
    .then(res => res.text())
    .then(key => {
        formData.set("key", key);
        fetch("https://api.meaningcloud.com/sentiment-2.1", requestOption)
        .then(res=>{
            const data= res.json();
            console.log(data);
            return data;
        })
        .then(data => {
            const apiData = {
                sub: data.subjectivity.toLowerCase(),
                agreement: data.agreement.toLowerCase(),
                irony: data.irony.toLowerCase(),
                confidence: data.confidence
            };
            document.getElementById("subjectivity").innerHTML="Subjectivity: "+apiData.sub;
            document.getElementById("agreement").innerHTML="Agreement: "+apiData.agreement;
            document.getElementById("irony").innerHTML="Irony: "+apiData.irony;
            document.getElementById("confidence").innerHTML="Analysis confidence: "+apiData.confidence+"%";
        })
    })
    .catch((error)=>{console.log("Error:",error);});
}