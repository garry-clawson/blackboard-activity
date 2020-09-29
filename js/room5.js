// Code for room


var positionA; //A-G store value assigned to positions in sum
var positionB;
var positionC;
var positionD;
var positionE; //F doesn't exist because = is hard wired for F.
var positionG;
var choice; //Stores value of button last pressed by user
var bPlus = true; //Switch to false if user selects minus for B
var dPlus = true; //Switch to false if user selects minus for D
var sumTotal; //Stores correct sum for comparison with final position

//Messages:
function invalidMessage() {
  document.getElementById("math-puzzle-message").innerHTML =
    "Sorry, your choice is invalid!";
}

function fullMessage() {
  document.getElementById("math-puzzle-message").innerHTML =
    "Sorry, there are no more positions to fill!";
}

function solvedMessage() {
  document.getElementById("math-puzzle-message").innerHTML =
    "Well done! CLUE: S_b___t m_d__e y__r! ";
}

function wrongMessage() {
  document.getElementById("math-puzzle-message").innerHTML =
    "Oh no, you got it wrong, better try again!";
}

function resetMathPuzzle() {
  positionA = void 0;
  positionB = void 0;
  positionC = void 0;
  positionD = void 0;
  positionE = void 0;
  positionG = void 0;
  document.getElementById("math-puzzle-a").innerHTML = "Number";
  document.getElementById("math-puzzle-b").innerHTML = "Sign";
  document.getElementById("math-puzzle-c").innerHTML = "Number";
  document.getElementById("math-puzzle-d").innerHTML = "Sign";
  document.getElementById("math-puzzle-e").innerHTML = "Number";
  document.getElementById("math-puzzle-g").innerHTML = "Number";
}

function checkNumber(x) {
  //Returns true if x is a number 0 ≥ x ≤ 9
  for (var i = 0; i < 10; i++) {
    if (x == i) {
      var y = true;
      i = 10; //To stop loop
    } else {
      var y = false;
    }
  }
  return y;
}

function checkSign(x) {
  //Returns true if x is '+' or '-'
  if (x == "+" || x == "-") {
    var y = true;
  } else {
    var y = false;
  }
  return y;
}

//The assignPosition functions assign the user's choice to the position's var, after checking for validity.

function assignPositionA() {
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionA = choice;
    document.getElementById("math-puzzle-a").innerHTML = choice;
  } else {
    invalidMessage();
  }
}

function assignPositionB() {
  isChoiceValid = checkSign(choice);
  if (isChoiceValid == true) {
    positionB = choice;
    document.getElementById("math-puzzle-b").innerHTML = choice;
    if (choice == "-") {
      bPlus = false;
      //console.log(bPlus);
    }
  } else {
    invalidMessage();
  }
}

function assignPositionC() {
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionC = choice;
    document.getElementById("math-puzzle-c").innerHTML = choice;
  } else {
    invalidMessage();
  }
}

function assignPositionD() {
  isChoiceValid = checkSign(choice);
  if (isChoiceValid == true) {
    positionD = choice;
    document.getElementById("math-puzzle-d").innerHTML = choice;
    if (choice == "-") {
      dPlus = false;
      //console.log(dPlus);
    }
  } else {
    invalidMessage();
  }
}

function assignPositionE() {
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionE = choice;
    document.getElementById("math-puzzle-e").innerHTML = choice;
  } else {
    invalidMessage();
  }
}

function assignPositionG() {
  //Also calls calculate function
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionG = choice;
    document.getElementById("math-puzzle-g").innerHTML = choice;
    calculateSumTotal();
  } else {
    invalidMessage();
  }
}

function findEmptyPosition() {
  //Finds the first unfilled position
  if (positionA == undefined) {
    assignPositionA();
  } else if (positionB == undefined) {
    assignPositionB();
  } else if (positionC == undefined) {
    assignPositionC();
  } else if (positionD == undefined) {
    assignPositionD();
  } else if (positionE == undefined) {
    assignPositionE();
  } else if (positionG == undefined) {
    assignPositionG();
  } else {
    fullMessage();
  }
}

//The clicked functions record button presses by user

function oneClicked() {
  choice = 1;
  findEmptyPosition();
}

function twoClicked() {
  choice = 2;
  findEmptyPosition();
}

function threeClicked() {
  choice = 3;
  findEmptyPosition();
}

function fourClicked() {
  choice = 4;
  findEmptyPosition();
}

function fiveClicked() {
  choice = 5;
  findEmptyPosition();
}

function sixClicked() {
  choice = 6;
  findEmptyPosition();
}

function sevenClicked() {
  choice = 7;
  findEmptyPosition();
}

function eightClicked() {
  choice = 8;
  findEmptyPosition();
}

function nineClicked() {
  choice = 9;
  findEmptyPosition();
}

function zeroClicked() {
  choice = 0;
  findEmptyPosition();
}

function plusClicked() {
  choice = "+";
  findEmptyPosition();
}

function minusClicked() {
  choice = "-";
  findEmptyPosition();
}

function calculateSumTotal() {
  //Calculates correct total
  if (bPlus == true && dPlus == true) {
    sumTotal = positionA + positionC + positionE;
  } else if (bPlus == true && dPlus == false) {
    sumTotal = positionA + positionC - positionE;
  } else if (bPlus == false && dPlus == true) {
    sumTotal = positionA - positionC + positionE;
  } else if (bPlus == false && dPlus == false) {
    sumTotal = positionA - positionC - positionE;
  }
  endGame();
}

function endGame() {
  //Checks whether user is correct
  if (sumTotal == positionG) {
    solvedMessage();
    mathPuzzleSolved = true; // Global var
    //unlock 2nd lock
    // checkPadlocks('padlock1',mathPuzzleSolved);
    // document.querySelector('.unlocked').setAttribute('fill', "#cb0c59");
    document.querySelector("#padlock1 .locked").style.opacity = "0";
    document.querySelector("#padlock1 .unlocked").style.opacity = "1";
  } else {
    wrongMessage();
    resetMathPuzzle();
  }
}

//Tests for checkNumber
//var output = checkNumber(0);
//console.log(output); //true
//output = checkNumber(-1);
//console.log(output); //false
//output = checkNumber(9);
//console.log(output); //true
//output = checkNumber(10);
//console.log(output); //false
//output = checkNumber('+');
//console.log(output); //false

//Tests for checkSign:
//var output = checkSign('+');
//console.log(output); //true
//output = checkSign('-');
//console.log(output); //true
//output = checkSign(8);
//console.log(output); //false

//Tests for assignPosition functions:

//choice = 5;
//assignPositionA();
//assignPositionB(); //invalid
//assignPositionC();
//assignPositionD(); //invalid
//assignPositionE();
//assignPositionG();

//choice = '+';
//assignPositionA(); //invalid
//assignPositionB();
//assignPositionC(); //invalid
//assignPositionD();
//assignPositionE(); //invalid
//assignPositionG(); //invalid

//Tests for calculateSumTotal:
//bPlus = true;
//dPlus = true;
//positionA = 1;
//positionC = 2;
//positionE = 4;
//calculateSumTotal();
//console.log(sumTotal) //7

//bPlus = true;
//dPlus = false;
//positionA = 4;
//positionC = 2;
//positionE = 6;
//calculateSumTotal();
//console.log(sumTotal) //0

//bPlus = false;
//dPlus = true;
//positionA = 1;
//positionC = 2;
//positionE = 4;
//calculateSumTotal();
//console.log(sumTotal) //3

//bPlus = false;
//dPlus = false;
//positionA = 1;
//positionC = 1;
//positionE = 1;
//calculateSumTotal();
//console.log(sumTotal) //-1

//Tests for endGame:
//sumTotal = 9;
//positionG = 9;
//endGame(); //You win!
//sumTotal = 0;
//positionG = 9;
//endGame(); //Oh no, you're wrong!

document
  .getElementById("math-puzzle-one")
  .addEventListener("click", oneClicked, false);
document
  .getElementById("math-puzzle-two")
  .addEventListener("click", twoClicked, false);
document
  .getElementById("math-puzzle-three")
  .addEventListener("click", threeClicked, false);
document
  .getElementById("math-puzzle-four")
  .addEventListener("click", fourClicked, false);
document
  .getElementById("math-puzzle-five")
  .addEventListener("click", fiveClicked, false);
document
  .getElementById("math-puzzle-six")
  .addEventListener("click", sixClicked, false);
document
  .getElementById("math-puzzle-seven")
  .addEventListener("click", sevenClicked, false);
document
  .getElementById("math-puzzle-eight")
  .addEventListener("click", eightClicked, false);
document
  .getElementById("math-puzzle-nine")
  .addEventListener("click", nineClicked, false);
document
  .getElementById("math-puzzle-zero")
  .addEventListener("click", zeroClicked, false);
document
  .getElementById("math-puzzle-plus")
  .addEventListener("click", plusClicked, false);
document
  .getElementById("math-puzzle-minus")
  .addEventListener("click", minusClicked, false);






// Check answer to challange

var answer = "subject module year"; 

function getAnswer() {
  var x = document.getElementById("answer");

  if(x.value != answer){
        document.getElementById('answer').style.backgroundColor = "red"; //when answer is incorrcet turn red
        return false;
    }else{
        document.getElementById('answer').style.backgroundColor = "green"; //when answer is correct turn green

        var wellDone; //sets the variable for the text output
        wellDone = "Congratulations you've completed this puzzle!";
        document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID eleme
        
        localStorage.setItem("rm1_puzzle4", "complete");
    };
}


// SHA1 Function
// function SHA1 (msg) {

    // function rotate_left(n,s) {
        // var t4 = ( n<<s ) | (n>>>(32-s));
        // return t4;
    // };

    // function lsb_hex(val) {
        // var str="";
        // var i;
        // var vh;
        // var vl;

        // for( i=0; i<=6; i+=2 ) {
            // vh = (val>>>(i*4+4))&0x0f;
            // vl = (val>>>(i*4))&0x0f;
            // str += vh.toString(16) + vl.toString(16);
        // }
        // return str;
    // };

    // function cvt_hex(val) {
        // var str="";
        // var i;
        // var v;

        // for( i=7; i>=0; i-- ) {
            // v = (val>>>(i*4))&0x0f;
            // str += v.toString(16);
        // }
        // return str;
    // };

    // function Utf8Encode(string) {
        // string = string.replace(/\r\n/g,"\n");
        // var utftext = "";

        // for (var n = 0; n < string.length; n++) {
            // var c = string.charCodeAt(n);

            // if (c < 128) {
                // utftext += String.fromCharCode(c);
            // }
            // else if((c > 127) && (c < 2048)) {
                // utftext += String.fromCharCode((c >> 6) | 192);
                // utftext += String.fromCharCode((c & 63) | 128);
            // }
            // else {
                // utftext += String.fromCharCode((c >> 12) | 224);
                // utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                // utftext += String.fromCharCode((c & 63) | 128);
            // }
        // }
        // return utftext;
    // };

    // var blockstart;
    // var i, j;
    // var W = new Array(80);
    // var H0 = 0x67452301;
    // var H1 = 0xEFCDAB89;
    // var H2 = 0x98BADCFE;
    // var H3 = 0x10325476;
    // var H4 = 0xC3D2E1F0;
    // var A, B, C, D, E;
    // var temp;
    // msg = Utf8Encode(msg);
    // var msg_len = msg.length;
    // var word_array = new Array();

    // for( i=0; i<msg_len-3; i+=4 ) {
        // j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        // msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        // word_array.push( j );
    // }

    // switch( msg_len % 4 ) {

        // case 0:
            // i = 0x080000000;
            // break;
        // case 1:
            // i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
            // break;
        // case 2:
            // i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
            // break;
        // case 3:
            // i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
            // break;
    // }

    // word_array.push( i );

    // while( (word_array.length % 16) != 14 ) word_array.push( 0 );
      // word_array.push( msg_len>>>29 );
      // word_array.push( (msg_len<<3)&0x0ffffffff );

    // for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

        // for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        // for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

        // A = H0;
        // B = H1;
        // C = H2;
        // D = H3;
        // E = H4;

        // for( i= 0; i<=19; i++ ) {
            // temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            // E = D;
            // D = C;
            // C = rotate_left(B,30);
            // B = A;
            // A = temp;
        // }

        // for( i=20; i<=39; i++ ) {
            // temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            // E = D;
            // D = C;
            // C = rotate_left(B,30);
            // B = A;
            // A = temp;
        // }

        // for( i=40; i<=59; i++ ) {
            // temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            // E = D;
            // D = C;
            // C = rotate_left(B,30);
            // B = A;
            // A = temp;
        // }

        // for( i=60; i<=79; i++ ) {
            // temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            // E = D;
            // D = C;
            // C = rotate_left(B,30);
            // B = A;
            // A = temp;
        // }

        // H0 = (H0 + A) & 0x0ffffffff;
        // H1 = (H1 + B) & 0x0ffffffff;
        // H2 = (H2 + C) & 0x0ffffffff;
        // H3 = (H3 + D) & 0x0ffffffff;
        // H4 = (H4 + E) & 0x0ffffffff;
    // }

    // var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    // return temp.toLowerCase();
// }

// console.log('initialized');
