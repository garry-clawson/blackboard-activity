
window.onload = roomsComplete;

function roomsComplete() {
           
            var hunt_room1 = localStorage.getItem("hunt_room1");
            var hunt_room2 = localStorage.getItem("hunt_room2");
            var hunt_room3 = localStorage.getItem("hunt_room3");
            var hunt_room4 = localStorage.getItem("hunt_room4");
            var hunt_room5 = localStorage.getItem("hunt_room5");

            if(hunt_room1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(hunt_room2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(hunt_room3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(hunt_room4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

             if(hunt_room5 == 'complete')
            {
                document.getElementById("imglock5").src = "assets/unlock.png";
            }

            // //Shows room lock as green if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){
            if(hunt_room1 == 'complete'){
                localStorage.setItem("timetable", "complete");
            }
        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("hunt_room1");
localStorage.removeItem("hunt_room2");
localStorage.removeItem("hunt_room3");
localStorage.removeItem("hunt_room4");
localStorage.removeItem("hunt_room5");
localStorage.removeItem("hunt");

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
function displayTask1() {

    document.getElementById("results").textContent = "Task 1: Hint"
}

function displayTask2() {

    document.getElementById("results").textContent = "Task 2: Hint"
}

function displayTask3() {

    document.getElementById("results").textContent = "Task 3: Hint"
}

function displayTask4() {

    document.getElementById("results").textContent = "Task 4:Hint"
}

function displayTask5() {

    document.getElementById("results").textContent = "Task 5: Hint"
}

function displayBin() {

    document.getElementById("results").textContent = "WARNING: Clicking this will restart the game"
}
