let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");


button.addEventListener("click",function (){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    let btn=document.createElement("button");
    btn.innerText="Delete Task";
    btn.classList.add("Delete-Task");
    item.appendChild(btn);
    ul.appendChild(item);
    input.value="";
    
    btn.addEventListener("click", function () {
        item.remove();
    })

    
})