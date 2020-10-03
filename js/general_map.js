
window.onload = roomsComplete;

function roomsComplete() {
           
            var timetable_room1 = localStorage.getItem("timetable_room1");
            var timetable_room2 = localStorage.getItem("timetable_room2");
            var timetable_room3 = localStorage.getItem("timetable_room3");
            var timetable_room4 = localStorage.getItem("timetable_room4");

            if(timetable_room1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(timetable_room2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(timetable_room3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(timetable_room4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

            // //Shows room lock as green if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){
            if(timetable_room1 == 'complete'){
                localStorage.setItem("timetable", "complete");
            }
        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("timetable_room1");
localStorage.removeItem("timetable_room2");
localStorage.removeItem("timetable_room3");
localStorage.removeItem("timetable_room4");
localStorage.removeItem("timetable");

location.reload();
return false;
}



//opens and closes pops ups
$(".container .trophy").click(function(){
    $(".completedOverlay").delay(100).fadeIn(100,function(){
        console.log('animation complete')
        }
        );
});
$(".closeBtn").click(function(){
    $(".completedOverlay").fadeOut(100 );
});



//Links for activities
function displayClock() {

    document.getElementById("results").textContent = "Task 2: Always check me!"
}

function displayCalendar() {

    document.getElementById("results").textContent = "Task 3: You'll need this!"
}

function displayTable() {

    document.getElementById("results").textContent = "Task 4: Table Hint:"
}

function displayCupboard() {

    document.getElementById("results").textContent = "Task 1: You'll need to look closely!"
}

function displayBin() {

    document.getElementById("results").textContent = "WARNING: Clicking this will restart the game"
}
