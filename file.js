const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
     if(inputBox.value === ''){
        alert("you must write something!");
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let editButton=document.createElement("button");
        editButton.innerHTML="Edit";
        editButton.classList.add("edit-btn");
        li.appendChild(editButton);
     }
     inputBox.value="";
     saveData();
 }  
 listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();
   }
   if(e.target.classList.contains("edit-btn")){
    let li=e.target.parentElement;
    let currentText=li.firstChild.textContent;
    let newText=prompt("Enter the new name for the todo:",currentText);
    if(newText!==null){
      li.firstChild.textContent=newText;
      saveData();
    }
   }
 },false);

 function saveData(){
   localStorage.setItem("data",listContainer.innerHTML);
 }
 function showTask(){
   listContainer.innerHTML=localStorage.getItem("data");
 }
 showTask(); 
 