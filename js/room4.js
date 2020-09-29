// Code for room
(function() {
  var checkEr, checkVictory, eventClick, makeVictory, noEnd, noStart, rebuild, size, _i, _ref, _results,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  size = 5;

  window.state = (function() {
    _results = [];
    for (var _i = 1, _ref = Math.pow(size, 2); 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this);

  makeVictory = function() {
    var j;
    document.getElementsByTagName("h1")[0].innerHTML = '';
    document.getElementsByTagName("h3")[0].innerHTML = "<p>Victory</p>";
    document.getElementById('grid').innerHTML = '';
    j = 0;
    state.forEach(function(item, i, ar) {
      var hr, span;
      span = document.createElement('span');
      span.setAttribute('value', item);
      span.setAttribute('id', i);
      document.getElementById('grid').appendChild(span);
      j++;
      if (j === size) {
        j = 0;
        hr = document.createElement('hr');
        return document.getElementById('grid').appendChild(hr);
      }
    });
    document.getElementById("count").innerHTML = '';
    return console.log("Victory");
  };

  checkVictory = function() {
    var a, b, c, ers, n, v;
    ers = document.querySelectorAll("div#grid span.er");
    a = document.querySelectorAll("div#grid span[value=A]");
    b = document.querySelectorAll("div#grid span[value=B]");
    c = parseInt(a.length) + parseInt(b.length);
    n = parseInt(c - ers.length);
    document.getElementById("count").innerHTML = "Number of sticks: " + n;
    if (n === 16) {
      v = true;
    }
    if (v === true) {
      makeVictory();
    }
    return v;
  };

  eventClick = function(id) {
    switch (state[id]) {
      case "A":
        return state[id] = "B";
      case "B":
        return state[id] = "C";
      default:
        return state[id] = "A";
    }
  };

  noEnd = function(id) {
    var arr, i, r, _j;
    arr = [];
    r = size;
    for (i = _j = 0; 0 <= size ? _j <= size : _j >= size; i = 0 <= size ? ++_j : --_j) {
      arr.push(r - 1);
      r = r + size;
    }
    return !(__indexOf.call(arr, id) >= 0);
  };

  noStart = function(id) {
    var arr, i, r, _j;
    arr = [];
    r = 0;
    for (i = _j = 0; 0 <= size ? _j <= size : _j >= size; i = 0 <= size ? ++_j : --_j) {
      arr.push(r);
      r = r + size;
    }
    return !(__indexOf.call(arr, id) >= 0);
  };

  checkEr = function(id) {
    switch (state[id]) {
      case "A":
        if ((state[id + (size - 1)] === "A" && noStart(id)) || (state[id - (size - 1)] === "A" && noEnd(id)) || (state[id + 1] === "B" && noEnd(id)) || (state[id - 1] === "B" && noStart(id)) || state[id - size] === "B" || state[id + size] === "B") {
          return true;
        }
        break;
      case "B":
        if ((state[id + (size + 1)] === "B" && noEnd(id)) || (state[id - (size + 1)] === "B" && noStart(id)) || (state[id + 1] === "A" && noEnd(id)) || (state[id - 1] === "A" && noStart(id)) || state[id - size] === "A" || state[id + size] === "A") {
          return true;
        }
    }
  };

  rebuild = function() {
    var j;
    document.getElementById("grid").innerHTML = '';
    j = 0;
    return state.forEach(function(item, i, ar) {
      var hr, span;
      span = document.createElement('span');
      span.setAttribute('value', item);
      span.setAttribute('id', i);
      if (checkEr(i)) {
        span.className = 'er';
      }
      span.onclick = function() {
        eventClick(i);
        rebuild();
        if (checkVictory()) {
          return false;
        }
      };
      document.getElementById('grid').appendChild(span);
      j++;
      if (j === size) {
        j = 0;
        hr = document.createElement('hr');
        return document.getElementById('grid').appendChild(hr);
      }
    });
  };

  rebuild();

}).call(this);

// Check answer to challange

// function score_quiz()
// {
   // var myVar;
  // answer4=document.quiz4.answer4.value;
  // if  (answer3=="maths and stats help"){
	  // document.getElementById("demo").innerHTML = "Well Done!" ;
	 // localStorage.setItem("rm1_puzzle3", "complete");
// }} 
	





var answer = "maths and stats help"; 

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
