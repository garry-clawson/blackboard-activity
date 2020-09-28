// Code for room

$(function()
{
    var tileSize, i, blank, blankTile, par = $('#cover'), bTileIndex, neighbourTiles = [], nLen, ind, imgUrls = 
    ['assets/timetable/timetable_001.jpg',
    'assets/timetable/timetable_002.jpg',
    'assets/timetable/timetable_003.jpg',
    'assets/timetable/timetable_004.jpg',
    'assets/timetable/timetable_005.jpg',
    'assets/timetable/timetable_006.jpg',
    'assets/timetable/timetable_007.jpg',
    'assets/timetable/timetable_008.jpg',
    'assets/timetable/timetable_009.jpg',
    'assets/timetable/timetable_010.jpg',
    'assets/timetable/timetable_011.jpg',
    'assets/timetable/timetable_012.jpg',
    'assets/timetable/timetable_013.jpg',
    'assets/timetable/timetable_014.jpg',
    'assets/timetable/timetable_015.jpg',
    'assets/timetable/timetable_016.jpg'];

    function moveImage()
    {
        var blankTileIndex, clickedTileIndex, id = $(this).attr('id');

        blankTileIndex = $('.img').index(blankTile);
        clickedTileIndex = $('.img').index(this);

        if( (blankTileIndex == clickedTileIndex + 1) && (blankTileIndex %4 != 0 ) )
        {
            $('#'+id).before(blankTile);
        }
        else if( (blankTileIndex == clickedTileIndex - 1) && (clickedTileIndex %4 != 0 ) )
        {
            $('#'+id).after(blankTile);
        }
        else if( (blankTileIndex +4 == clickedTileIndex) || (blankTileIndex == clickedTileIndex+4) )
        {
            var prev1 = $('#'+id).prev(), prev2 = blankTile.prev();
            
            if( prev1.length == 0 )
                par.prepend(blankTile);    
            else
                $(prev1).after(blankTile);
            
            if( prev2.length == 0 )
                par.prepend($('#'+id));
            else
                $(prev2).after($('#'+id));
        }
    }

    function startApp()
    {
        par.html('');

        for(i=1; i<=16; i++)
        {
            par.append('<div class="img" id="img-'+i+'"><img src="'+imgUrls[i-1]+'"></div>');
            $('#img-'+i).on('click',moveImage);
        }

        blank = Math.floor((Math.random() * 16) + 1);
        $('#img-'+blank).html('').addClass('blank');
        
        blankTile = $('.blank');
        blankTile.off('click');

        tileSize = $('.img').outerWidth();

        shuffle();
    }

    function shuffle()
    {
        for(i=0; i<153; i++)
        {
            neighbourTiles = [];
            bTileIndex = $('.img').index(blankTile);
        
            if( (bTileIndex + 1 < 16) && ((bTileIndex + 1) % 4 != 0 ) )
                neighbourTiles.push(bTileIndex + 1);

            if( (bTileIndex - 1 > -1) && (bTileIndex % 4 != 0 ) )
                neighbourTiles.push(bTileIndex - 1);
            
            if( bTileIndex + 4 < 16 )
                neighbourTiles.push(bTileIndex + 4);

            if( bTileIndex - 4 > -1 )
                neighbourTiles.push(bTileIndex - 4);

            nLen = neighbourTiles.length;

            ind = Math.floor((Math.random() * nLen));
    
            $('#cover .img:eq('+neighbourTiles[ind]+')').trigger('click');
        }
    }

    startApp();
})





// Check answer to challange and store completion

var answer = "https://timetable.lincoln.ac.uk/studenttimetable/conductofcandidates"; //asign result of SHA1 function to answer: 8e7bfba9e19799a114779acb186357d7e4535d72
//console.log(answer);

function getAnswer() {
  var x = document.getElementById("answer");

  if(x.value != answer){
        document.getElementById('answer').style.backgroundColor = "red"; //when answer is incorrcet turn red
        return false;
    }else{
        document.getElementById('answer').style.backgroundColor = "green"; //when answer is correct turn green

        var wellDone; //sets the variable for the text output
        wellDone = "Congratulations you've completed this task!";
        document.getElementById("results").innerHTML = wellDone; //inserts 'text' into the yourscore ID eleme
        
        localStorage.setItem("room1", "complete");
    };
}


// SHA1 Function
function SHA1 (msg) {

    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };

    function lsb_hex(val) {
        var str="";
        var i;
        var vh;
        var vl;

        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };

    function cvt_hex(val) {
        var str="";
        var i;
        var v;

        for( i=7; i>=0; i-- ) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };

    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();

    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }

    switch( msg_len % 4 ) {

        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;
            break;
    }

    word_array.push( i );

    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
      word_array.push( msg_len>>>29 );
      word_array.push( (msg_len<<3)&0x0ffffffff );

    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for( i= 0; i<=19; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
}

