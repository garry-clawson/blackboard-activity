


let lives, maxLives, letterFound, history, allLetters, ourLetters, word, rnd;
let words = [['hexagon', 'Capital of Italy']];
let letterLines = document.querySelector('#word-lines');

//Choose random word-hint pair, create lines for the letters
let randomNumber = () => {
    rnd = Math.floor(Math.random() * Math.floor(words.length));
    return rnd;
}

let random = (words) => {
    randomNumber();
    let currentWord = words[rnd][0];
    for (let i = 0; i<currentWord.length; i++) {
        var div = document.createElement('div');
        letterLines.appendChild(div);
        div.classList.add('line');
    }
    return currentWord;
};

word = random(words);

//Validate input field (only one letter), get input (Guess - event listener), compare with currentWord's letters
const input = document.querySelector('#input-field');
const guess = document.querySelector('#button-guess');

lives = document.querySelector('#lives');
maxLives = 10;
lives.textContent = `You have ${maxLives} lives.`;
history = '';
allLetters = word.length;
ourLetters = null;
let showLetter = document.querySelectorAll('.line');

guess.addEventListener('click', game);
input.addEventListener('keyup', ent);

function ent(e) {
    if (e.keyCode === 13) {
        game();
    }
};

function game() {
    let letters = /^[A-Za-z]+$/;
    history.split('');
    let correct = [];

    if (history.indexOf(input.value.toUpperCase())==-1) {
        if (input.value.match(letters)) {
            for (let i = 0; i < word.length; i++) {
                if (input.value.toUpperCase() == word[i].toUpperCase()) {
                    // Print letter to the screen
                    let letterContainer = document.createElement('div');
                    let myLetter = document.createTextNode(input.value.toUpperCase());
                    
                    if (showLetter[i].firstChild == undefined) {
                       showLetter[i].appendChild(letterContainer);
                        letterContainer.appendChild(myLetter);
                        letterContainer.classList.add('container');
                    }
                    letterFound = true;
                    correct.push(input.value.toUpperCase());
                } else if (correct.length <= 0){
                    letterFound = false;
                }
            };
        } else {
            alert('Enter a valid letter!');
        }
    
       if (letterFound == false) {
            document.querySelector('.wrong').textContent += input.value.toUpperCase();
            maxLives--;
            if (maxLives == 0) {
                alert('You ran out of lives!');
                guess.removeEventListener('click', game);
                input.removeEventListener('keyup', ent);
            }
            lives.textContent = `You have ${maxLives} lives.`;
        } else {
            ourLetters++;
            if (ourLetters == allLetters) {
                document.getElementById("results").innerHTML = "QUESTION: How many different help sheet areas are there within the Student help and Support tab?";
                guess.removeEventListener('click', game);
            }
        }
    }
    history += input.value.toUpperCase();
    input.value = '';
};

//Show hint
const hint = document.querySelector('#button-hint');
hint.addEventListener('click', function(){
    document.querySelector('.hint').textContent = words[rnd][1];
});

//New game
const newGame = document.querySelector('#button-new');
newGame.addEventListener('click', function(){
    document.location.reload(true);
});




function score_quiz()
{
		var answer = "6"; 

  var myVar;
  var x = document.getElementById("answer3");

  if(x.value != answer){
        document.getElementById('answer3').style.backgroundColor = "red"; //when answer is incorrcet turn red
        return false;
    }else{
        document.getElementById('answer3').style.backgroundColor = "green"; //when answer is correct turn green

        var wellDone; //sets the variable for the text output
        wellDone = "Well Done! You completed the task!.";
        document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID eleme
        localStorage.setItem("rm1task4", "complete"); 
  
  
}} 
	






// Check answer to challange

// var answer = "1"; 

// function getAnswer() {
  // var x = document.getElementById("answer");

  // if(x.value != answer){
        // document.getElementById('answer').style.backgroundColor = "red"; //when answer is incorrcet turn red
        // return false;
    // }else{
        // document.getElementById('answer').style.backgroundColor = "green"; //when answer is correct turn green

        // var wellDone; //sets the variable for the text output
        // wellDone = "Congratulations you've completed this task!";
        // document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID element

        // localStorage.setItem("room3", "complete");
    // };
// }


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
