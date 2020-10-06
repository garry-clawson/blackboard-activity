//Almost pure css - js used only to detect the clicks!!!

$('body').on('click', '.door', function(e) {
  e.preventDefault();
  var timed = false;

  if (timed === false) {
    timed = true;
    $(this).addClass('open');
    setTimeout(function closeDoor() {
      $('.door').removeClass('open');
      timed = false;
    }, 3000);
  } else {
    null;
  }

});

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



window.onload = roomsComplete;

function roomsComplete() {
           
            var room1 = localStorage.getItem("room1");
            var room2 = localStorage.getItem("room2");
            var room3 = localStorage.getItem("room3");
            // var room4 = localStorage.getItem("timetable_room4");

            if(room1 == 'complete')
            {
                document.getElementById("room1_lock").src = "assets/closed.png";
            }

            if(room2 == 'complete')
            {
                document.getElementById("room2_lock").src = "assets/closed.png";
            }

            if(room3 == 'complete')
            {
                document.getElementById("room3_lock").src = "assets/closed.png";
            }

            // if(room4 == 'complete')
            // {
            //     document.getElementById("imglock4").src = "assets/unlock.png";
            // }

            // //Shows trophy if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){

            // //Shows trophy if all tasks have been completed
            if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete'){
                document.getElementById("trophy").style.visibility = "visible";
                document.getElementById("results").textContent = "Congrats! Click the trophy to reveal your prize!"
            }

        }

//clears the locks form local storage
function clearLocks() {

localStorage.removeItem("rm1_task1");
localStorage.removeItem("rm1_task2");
localStorage.removeItem("rm1_task3");
localStorage.removeItem("rm1_task4");
localStorage.removeItem("rm1_task5");
localStorage.removeItem("room1");

localStorage.removeItem("rm2_task1");
localStorage.removeItem("rm2_task2");
localStorage.removeItem("rm2_task3");
localStorage.removeItem("rm2_task4");
localStorage.removeItem("rm2_task5");
localStorage.removeItem("room2");

localStorage.removeItem("rm3_task1");
localStorage.removeItem("rm3_task2");
localStorage.removeItem("rm3_task3");
localStorage.removeItem("rm3_task4");
localStorage.removeItem("rm3_task5");
localStorage.removeItem("room3");

location.reload();
return false;
}