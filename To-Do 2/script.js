const textfield = document.getElementsByClassName("textfield")[0];
const listcontainer = document.getElementsByClassName("list-container")[0];

function addTask() {
    if (textfield.value === '') {
        alert("Enter a task to plan");
    } else {
        let li = document.createElement("li");
        li.innerHTML = textfield.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="&times"
        let p= document.createElement("p")
        p.innerHTML="ScheduleTask"
        p.classList.add("Scheduler")
       
        li.appendChild(p);
        li.appendChild(span)
        textfield.value = '';  
        // p.innerHTML="you want to add date and time?"
        p.addEventListener("click",function(event){
             if (event.target.classList.contains("Scheduler")) 
                {
                var calendarInput = document.createElement("input");
                calendarInput.setAttribute("type", "date");
                calendarInput.setAttribute("name", "taskDate");
                event.target.parentNode.replaceChild(calendarInput, event.target);
        }})
    }
}
listcontainer.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)

