const inputBox = document.querySelector("#inputBox");
const ListSection = document.querySelector("#listSection");

function AddTask(){
    if(inputBox.value.trim() === ''){
        alert("Right someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        ListSection.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span) ;
        
    }
    inputBox.value= "";
}
