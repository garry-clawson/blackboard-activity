
window.onload = roomsComplete;

function roomsComplete() {
           
            var rm1_room1 = localStorage.getItem("rm1task1");
            var rm1_room2 = localStorage.getItem("rm1task2");
            var rm1_room3 = localStorage.getItem("rm1task3");
            var rm1_room4 = localStorage.getItem("rm1task4");

            if(rm1_room1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(rm1_room2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(rm1_room3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(rm1_room4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

            // //Shows room lock as green if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){
            if(rm1_room1 == 'complete'){
                localStorage.setItem("room1", "complete");
            }
        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("rm1task1");
localStorage.removeItem("rm1task2");
localStorage.removeItem("rm1task3");
localStorage.removeItem("rm1task4");
localStorage.removeItem("room1");

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

    document.getElementById("results").textContent = "Task 2: Eleven important widgets!"
}

function displayCalendar() {

    document.getElementById("results").textContent = "Task 3: A great area for sharing and collecting!"
}

function displayTable() {

    document.getElementById("results").textContent = "Task 4: Helpsheets galore!"
}

function displayCupboard() {

    document.getElementById("results").textContent = "Task 1: First time here?"
}

function displayBin() {

    document.getElementById("results").textContent = "WARNING: Clicking this will restart the game!"
}
