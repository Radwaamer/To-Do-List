let input= document.querySelector(".todo form .text");

document.querySelector(".todo form .submit").onclick=(e)=>{
    e.preventDefault();
    submitMood();
}
input.addEventListener("keypress",(e)=>{
    if(e.code=="Enter"){
        submitMood();
    };
});

function submitMood(){
    addItemsToList();
    input.value="";
    input.focus();
}

let todoArray=[];
function addItemsToList(){
    input.value=input.value.trim();
    if(input.value!=""){
        let todo= {
            id: Date.now(),
            text: input.value,
            completed: false
        };
        todoArray.push(todo);
        // document.querySelector(".list").innerHTML="";
        // for(let i=0;i<todoArray.length;i++){
            let item=document.createElement("div");
            item.classList=`item ${todo.id}`;
            item.innerHTML=`<form>
            <input type="checkbox" id="${todo.id}">
            <label for="${todo.id}">${todo.text}</label>
        </form>
        <div class="icons">
            <div class="edit">
                <i class="fa-solid fa-pen"></i>
            </div>
            <div class="remove">
                <i class="fa-solid fa-trash"></i>
            </div>`;
            document.querySelector(".list").appendChild(item);
        // };

        checkedItem();
        if(todo.completed){
            item.classList.add("done");
            item.querySelector("form").classList.add("checked");
        };
    };
};

function checkedItem(){
    let inputs=document.querySelectorAll(".list .item form input");
    for(let i=0;i<inputs.length;i++){
        inputs[i].parentElement.addEventListener("click",()=>{
            inputs[i].classList.toggle("checked");
            inputs[i].parentElement.parentElement.classList.toggle("done");

            if(inputs[i].classList.contains("checked")){
                inputs[i].checked=true;
                todoArray[i].completed=true;
            }else{
                inputs[i].checked=false;
                todoArray[i].completed=false; 
            };
        });
    };
    // inputs.forEach(inp=>{
    //     inp.addEventListener("click",()=>{
    //         console.log(inputs.length);
    //     })
    // })
};
// function setItemsInLocal(){
//     if(window.localStorage.getItem("Items")){
//     };
// };