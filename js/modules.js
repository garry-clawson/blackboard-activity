
window.onload = roomsComplete;

function roomsComplete() {
           
            var room1 = localStorage.getItem("rm1_puzzle1");
            var room2 = localStorage.getItem("rm1_puzzle2");
            var room3 = localStorage.getItem("rm1_puzzle3");
            var room4 = localStorage.getItem("rm1_puzzle4");
            var room5 = localStorage.getItem("rm1_puzzle5");
            var room6 = localStorage.getItem("rm1_puzzle6");
    
            //localStorage.removeItem("room5");

            if(room1 == 'complete')
            {
                document.getElementById("imglock1").src = "assets/unlock.png";
            }

            if(room2 == 'complete')
            {
                document.getElementById("imglock2").src = "assets/unlock.png";
            }

            if(room3 == 'complete')
            {
                document.getElementById("imglock3").src = "assets/unlock.png";
            }

            if(room4 == 'complete')
            {
                document.getElementById("imglock4").src = "assets/unlock.png";
            }

            if(room5 == 'complete')
            {
                document.getElementById("imglock5").src = "assets/unlock.png";
            }

            if(room6 == 'complete')
            {
                document.getElementById("imglock6").src = "assets/unlock.png";
            }

        
            // //Shows trophy if all tasks have been completed
            if(rm1_puzzle1 == 'complete' && rm1_puzzle2 == 'complete' && rm1_puzzle3 == 'complete' && rm1_puzzle4 == 'complete' && rm1_puzzle5 == 'complete' && rm1_puzzle6 == 'complete'){
                document.getElementById("trophy").style.visibility = "visible";
                document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"
            }

            // //Test to show how the end results works
            // if(room6 == 'complete' && room3 == 'complete'){
            //     document.getElementById("trophy").style.visibility = "visible";
            //     document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"
            // }

        }


//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("rm1_puzzle1");
localStorage.removeItem("rm1_puzzle2");
localStorage.removeItem("rm1_puzzle3");
localStorage.removeItem("rm1_puzzle4");
localStorage.removeItem("rm1_puzzle5");
localStorage.removeItem("rm1_puzzle6");

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

    document.getElementById("results").textContent = "Puzzle 1: Tick tock Tick tock!"

}

function displaytabs() {

    document.getElementById("results").textContent = "Puzzle 2: When handing in submissions into Turnitin, please check that it is in .pdf format! "

}

function displaymyuni() {

    document.getElementById("results").textContent = "Puzzle 3: These tabs offer you support and will help you through your university career!"

}


function displayfrequentlinks() {

    document.getElementById("results").textContent = "Puzzle 4: Don't forget to check your emails each day, so you don't miss out on any opportunity!"

}

function displaymysite() {

    document.getElementById("results").textContent = "Puzzle 5: Within each module page, there is an About this Module tab, which outlines what you will be doing!"

}

function displaysupport() {

    document.getElementById("results").textContent = "Puzzle 6: Panopto allows you to re-watch part or all of your lectures you attended!"

}

function displaywidgets() {

    document.getElementById("results").textContent = "Task 7: Add clue"

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
