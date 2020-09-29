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


window.onload = roomsComplete;

function roomsComplete() {
           
            var timetable = localStorage.getItem("timetable");
            // var room2 = localStorage.getItem("timetable_room2");
            // var room3 = localStorage.getItem("timetable_room3");
            // var room4 = localStorage.getItem("timetable_room4");

            if(timetable == 'complete')
            {
                document.getElementById("timetable_lock").src = "assets/closed.png";
            }

            // if(room2 == 'complete')
            // {
            //     document.getElementById("imglock2").src = "assets/unlock.png";
            // }

            // if(room3 == 'complete')
            // {
            //     document.getElementById("imglock3").src = "assets/unlock.png";
            // }

            // if(room4 == 'complete')
            // {
            //     document.getElementById("imglock4").src = "assets/unlock.png";
            // }

            // //Shows trophy if all tasks have been completed
            // if(room1 == 'complete' && room2 == 'complete' && room3 == 'complete' && room4 == 'complete'){

        }

