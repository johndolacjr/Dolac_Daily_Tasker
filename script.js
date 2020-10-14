$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var displayHour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

for (var i=0; i < hour.length; i++) {
    $(".container").append(
        `<div id="hour-${hour[i]}" class="row time-block">
            <div class="col-md-1 hour"> ${displayHour[i]}</div>
            <textarea class="col-md-10 description"/>
            <button class="button saveBtn col-md-1">Save</button>
        </div>
        `
    )
    
    if (moment().format("H") > hour[i]) {
        $(`#hour-${hour[i]}`).addClass("past")
    } 
    
    else if (moment().format("H") == hour[i]) {
        $(`#hour-${hour[i]}`).removeClass("past"); 
        $(`#hour-${hour[i]}`).addClass("present"); 
    } 
    else {
        $(this).removeClass("past"); 
        $(this).removeClass("present"); 
        $(this).addClass("future");
    }    
}; 

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, value)
})

for (var i=9; i <= 17; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

//class and if statements 











// // // selectors
// // const todoInput = document.querySelector(".todo-input");
// // const todoButton = document.querySelector(".todo-button");
// // const todoList = document.querySelector(".todo-list");


// // //Listeners
// // todoButton.addEventListener("click", addTodo);


// // //functions
// // fuction addTodo (Event) {
// //     Event.preventDefault(); 

// // //Create ToDo Div 
// // const todoDiv = document.createElement("div");
// // todoDiv.classList.add("todo");

// // //create LI
// // const newTodo = document.createElement("li");
// // newTodo.innerText = "hey"; 
// // newTodo.classList.add("todo-item"); 
// // todoDiv.appendChild(newTodo);

// // //Save Button
// // const saveButton = document.createEleemnt("button");
// // saveButton.innerHTML = "<i class="fas fa-save"></i>"
// // saveButton.classList.add("save-btn");
// // todoDiv.appendChild(saveButton);

// // //Trash Button 
// // const trashButton = document.createEleemnt("button");
// // trashButton.innerHTML = "<i class="fas fa-trash-alt"></i>"; 
// // trashButton.classList.add("trash-btn");
// // todoDiv.appendChild(trashButton);

// // //Append to list
// // todoList.appendChild(todoDiv);
// }
