export function handleSubmit(event) {
    event.preventDefault();
    
    const formText = document.getElementById("text-fld").value;
    const formLang = document.getElementById("lang-fld").value.toLowerCase();

    const txt={target:{id:"text-fld",value:formText}};
    const lang={target:{id:"lang-fld",value:formLang}}

    if(Client.inputValidate(txt) && Client.inputValidate(lang)){    

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
            //formData.set("key", key);
            fetch("https://api.meaningcloud.com/sentiment-2.1", requestOption)
            .then(res=>{
                const data= res.json();
                return data;
            })
            .then(data => {
                console.log(data)
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

                setTimeout(()=>{
                    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
                },300)
            })
        })
        .catch((error)=>{console.log("Error:",error);});


        for (let span of document.querySelectorAll("span")){
            if (span.innerHTML!==""){
                span.innerHTML="";
                span.previousElementSibling.value="";
                span.previousElementSibling.classList.remove("error");
            }
        }
    }
}