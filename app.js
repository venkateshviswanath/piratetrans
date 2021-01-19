var input=document.querySelector("#input-txt");
var btn=document.querySelector("#trans-btn")
var output=document.querySelector("#output-txt");
var url="https://api.funtranslations.com/translate/pirate.json";
var text;
function translate(text){
    return url+"?"+"text="+text;
}
function handleerror(error){
    alert("Something is wrong with server! Please try again later.")
}
function takeinput(){
    text=input.value;
    if(text===""){alert("Please Enter Some Text!");return;}
    console.log(text);
    fetch(translate(text))
    .then(response=>response.json())
    .then(json=>{
        var newtext=json.contents.translated;
        console.log(newtext);
        output.innerText=newtext;
    }).catch(handleerror);
}
btn.addEventListener("click",takeinput);
