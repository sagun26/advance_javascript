const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
let task = JSON.parse(localStorage.getItem("task"));
 console.log(task)
//render tasks

function renderTask(){
    taskList.innerHTML=task.map((task,index)=>{
        const{completed,text,date}=task;
     return`
     <li>
        <input type="checkbox"${completed?"checked":""}
         onchange="toggleTask(${index})" />
        <span> ${text} (${date})</span>
         <button onclick="deleteTask(${index})">Delete</button>
    </li>

     `
    })
}
function toggleTask(index)
{
    task=task.map((item,i)=>{
        if(index==i)
        {
            return{
                ...item,
                completed:!item.completed
            };
        }
        return item;
    })
    saveTask();
    renderTask();
}

//delete task
function deleteTask(index)
{
    task=task.filter((item,i)=>{
        return i!=index;
    })
    saveTask();
    renderTask();
}

//add task
addBtn.addEventListener("click",function(){
    const newTask={
        text:taskInput.value,
        date:new Date().toLocaleString(),
        completed:false
    }
    task.push(newTask);
    taskInput.value="";
   
    saveTask();
    renderTask()
})
function saveTask(){
    localStorage.setItem("task",JSON.stringify(task));
}

renderTask()