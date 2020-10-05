
window.onload = roomsComplete;

function roomsComplete() {
           
            var rm2_task1 = localStorage.getItem("rm2_task1");
            var rm2_task2 = localStorage.getItem("rm2_task2");
            var rm2_task3 = localStorage.getItem("rm2_task3");
            var rm2_task4 = localStorage.getItem("rm2_task4");

            if(rm2_task1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(rm2_task2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(rm2_task3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(rm2_task4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }


            // //Shows room lock as green if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){
            if(rm2_task1 == 'complete'){
                localStorage.setItem("room2", "complete");
            }
        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("rm2_task1");
localStorage.removeItem("rm2_task2");
localStorage.removeItem("rm2_task3");
localStorage.removeItem("rm2_task4");
localStorage.removeItem("room2");

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

    document.getElementById("results").textContent = "Task 1: Remeber to check your timetable, as your lecturers & admin staff can alter it!"
}

function displayTask2() {

    document.getElementById("results").textContent = "Task 2: Emails are a great way to get in contact with your lecturers!"
}

function displayTask3() {

    document.getElementById("results").textContent = "Task 3: The library offers a variety of Learning Development Services for you to learn from!"
}

function displayTask4() {

    document.getElementById("results").textContent = "Task 4: By clicking on the charts you can find more about how your attendance is analysed! "
}

function displayTask5() {

    document.getElementById("results").textContent = "Task 5: Hint"
}

function displayBin() {

    document.getElementById("results").textContent = "WARNING: Clicking this will restart the game"
}
