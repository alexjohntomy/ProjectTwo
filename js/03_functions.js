function sendMessage() { 
    //document.getElementById("Messages").style.opacity = 1;
    var h = document.createElement("H3");
    var t = document.createTextNode(message.value);
    h.appendChild(t);
    var DivGet = document.getElementById("Messages");
    DivGet.appendChild(h);
    var nextTurn = true;
    setTimeout(aiResponse, 500);

}


function aiResponse() {
    //document.getElementById("Messages").style.opacity = 1;
    var hai = document.createElement("H2");


    //Define Array
    var vArray = ["response1","response2","response3"];
    
    //forLoop
    for (var i = 0; i < 3; i++) {
    var arrayElement = vArray[i];
    console.log(arrayElement);
    }

    //var tai = document.createTextNode(vArray[i]);
    var tai = document.createTextNode(arrayElement);
    hai.appendChild(tai);
    var DivGet = document.getElementById("Messages");
    DivGet.appendChild(hai);
    nextTurn = false;
}


//Might use to set width of message boxes
//var str = "Hello, world 123!";
//var regex = /[a-zA-Z0-9]/g;
//console.log(str.match(regex).length);
