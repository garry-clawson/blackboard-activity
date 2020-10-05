
window.onload = roomsComplete;

function roomsComplete() {
           
            var task1 = localStorage.getItem("rm3_task1");
            var task2 = localStorage.getItem("rm3_task2");
            var task3 = localStorage.getItem("rm3_task3");
            var task4 = localStorage.getItem("rm3_task4");
            var task5 = localStorage.getItem("rm3_task5");
    
            //localStorage.removeItem("room5");

            if(task1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
                localStorage.setItem("room3", "complete");
            }

            if(task2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(task3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(task4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

            if(task5 == 'complete')
            {
                document.getElementById("imglock5").src = "assets/unlock.png";
            }


        
            // //Shows trophy if all tasks have been completed
            if(task1 == 'complete'){
                document.getElementById("trophy").style.visibility = "visible";
                document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"
            }

            if(task1 == 'complete')
            {
                localStorage.setItem("room3", "complete");
            }

            //Test to show how the end results works
            // if(task1 == 'complete' && room3 == 'complete'){
            //     document.getElementById("trophy").style.visibility = "visible";
            //     document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"
            // }

        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("rm3_task1");
localStorage.removeItem("rm3_task2");
localStorage.removeItem("rm3_task3");
localStorage.removeItem("rm3_task4");
localStorage.removeItem("rm3_task5");
localStorage.removeItem("room3");

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



//Useful links to activties
function displayName() {

    document.getElementById("results").textContent = "Puzzle 1: Announcements - lecturers release updates about their module!"

}

function displaytabs() {

    document.getElementById("results").textContent = "Puzzle 2: About this module - a module overview outlining the syllabus! "

}

function displaymyuni() {

    document.getElementById("results").textContent = "Puzzle 3: Staff details - staff email and office hours!"

}


function displayfrequentlinks() {

    document.getElementById("results").textContent = "Puzzle 4: Study materials - week by week breakdown of lecture materials!"

}

function displaymysite() {

    document.getElementById("results").textContent = "Puzzle 5: Asessments - download the assessment brief and upload into turnitin!"
    document.getElementById("results").textContent = "Puzzle 5: Asessments - download the assessment brief and upload into turnitin!"

}

function displaysupport() {

    document.getElementById("results").textContent = "Puzzle 6: Panopto allows you to re-watch part or all of your lectures you attended!"

}

function displaywidgets() {

    document.getElementById("results").textContent = "Task 7: Add clue"

}

function displayBin() {

    document.getElementById("results").textContent = "WARNING: Clicking this will restart the game"
}


function displayTrophy() {

    document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"

}



// Links for interest with no activities
// function displayFloor() {

    // document.getElementById("results").textContent = "Add hint or tip 1"

// }

// function displayFlatBook() {

    // document.getElementById("results").textContent = "Add hint or tip 2"

// }

// function displayKnob1() {

    // document.getElementById("results").textContent = "Add hint or tip 3"

// }

// function displayKnob2() {

    // document.getElementById("results").textContent = "Add hint or tip 4"
// }

// function displayBin() {

    // document.getElementById("results").textContent = "WARNING: Clicking this bin will restart the game"
// }
