// Code for room



var answer = "orchard"; 

function getAnswer() {
  var x = document.getElementById("answer");

  if(x.value != answer){
        document.getElementById('answer').style.backgroundColor = "red"; //when answer is incorrcet turn red
        return false;
    }else{
        document.getElementById('answer').style.backgroundColor = "green"; //when answer is correct turn green

        var wellDone; //sets the variable for the text output
        wellDone = "Well done! You've completed this task!";
        document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID eleme
        
        localStorage.setItem("rm3_task3", "complete");
    };
}


