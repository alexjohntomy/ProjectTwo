var count = -1;

function fadeIn() {
    document.body.style.opacity = 1;
}

function conscienceSequence() {

    var hFour = document.createElement("H4");

    //Define Array
    var cArray = ["I guess it would be okay for me to tell him my name as long as it's just my name without any additional text", 
    "No way, I need to ask him to tell me something only I would know",
    "WOAH, I'm convinced. Need to ask him why he's texting me."];
    
    //forLoop
    for (var i = 0; i < 30; i++) {
    var conscienceArray = cArray[count];
    }

    function conscienceUpdate() {
        document.getElementById('Conscience').appendChild(hFour);
        document.getElementById('Conscience').innerHTML = '<h4> ༼∵༽ CONSCIENCE <br>' + conscienceArray + '</h4>';
        document.getElementById('Conscience').style.color = "magenta";


    }


    setTimeout(conscienceUpdate, 800);

}



function sendMessage() { 
    //document.getElementById("Messages").style.opacity = 1;
    var h = document.createElement("H3");
    var t = document.createTextNode(message.value);
    h.appendChild(t);
    var DivGet = document.getElementById("Messages");
    DivGet.appendChild(h);
    count++;
    setTimeout(aiResponse, 500);

}

function aiResponse() {

    if (count==1) {
        var name = message.value;
        console.log(name);
    }

    var hai = document.createElement("H2");

    //Define Array
    var vArray = ["Hello World! I need to ensure I'm talking to the right person. What's your name?",
    "Hi " + name + ", This is you from the future",
    "Your glasses prescription is .75",
    "I need your help... in the future, it's your invention of the internet that leads to WW3"
    ];
    
    //forLoop
    for (var i = 0; i < 30; i++) {
    var arrayElement = vArray[count];
    }

    //var tai = document.createTextNode(vArray[i]);
    var tai = document.createTextNode(arrayElement);
    hai.appendChild(tai);
    var DivGet = document.getElementById("Messages");
    DivGet.appendChild(hai);
}
