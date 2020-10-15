$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var displayHour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

for (var i=0; i < hour.length; i++) {
    $(".container").append(
        `<div id="hour-${hour[i]}" class="row time-block">
            <div class="col-md-1 hour"> ${displayHour[i]}</div>
            <textarea class="col-md-10 description"/>
            <button class="button saveBtn col-md-1"><i class="fas fa-save"></i></button>
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

    else {(moment().format("H") < hour[i]);
        $(`#hour-${hour[i]}`).removeClass("past"); 
        $(`#hour-${hour[i]}`).removeClass("present"); 
        $(`#hour-${hour[i]}`).addClass("future"); 
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
