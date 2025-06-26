let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dbtn=document.createElement("button");
    dbtn.innerText="Delete";
    dbtn.classList.add("delete");
    item.appendChild(dbtn);
    ul.appendChild(item);
    inp.value = "";  
    // dbtn.addEventListener("click",function (){
    // ul.removeChild(item);
    // })
});
ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});


