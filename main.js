var time = document.getElementsByTagName("h1")[0];
var second = 0, minute = 0, hour = 0, centisecon= 0;
var timer;  
var ol = document.getElementsByTagName('ol')[0];

// Start time 
function watch() {
    centisecon++;
    if (centisecon > 99) {
        centisecon = 0;
        second++;
        if (second > 59) {
            second = 0;
            minute++;
            if (minute > 59) {
                minute = 0;
                hour++;
            }
        }
    }

    var s = second > 9 ? second : "0" + second;
    var m = minute > 9 ? minute : "0" + minute;
    var h = hour > 9 ? hour : "0" + hour;
    var c = centisecon > 9 ? centisecon : "0" + centisecon;

    time.innerText = h + ":" + m + ":" + s + ":" + c;
}

function start() {  
        timer = setInterval(watch, 10);
    
}


function stop() {
    clearInterval(timer);
}

function restart() {
    second = 0;
    minute = 0;
    hour = 0;
    centisecon=0;
    time.innerText = "00:00:00:00";
    ol.innerText = ""

    clearInterval(timer);  
}
function lap(){
    var li= document.createElement('li');
    li.innerText= time.innerText; 
    console.log(li)
   // tagname append('tagname ');  append -->tag dotor oor tag nemeh 
   ol.append(li)
}
alert("This is the stopwatch")
