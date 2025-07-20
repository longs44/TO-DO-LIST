const inputbox = document.getElmentbById("input-box");
const listcontainer = document.getElmentbById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alart("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendchild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputbox.value = "";
    function saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        function save Data();
    }
    else if{e.target.tagName === "SPAN"}{
        e.target.parentElement.remove();
        function save Data();
    }
},  false;)

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();