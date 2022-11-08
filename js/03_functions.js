var count = -1;
var userAgent = navigator.userAgent;
let browserName;
var userName;
var maidenName;
var childhoodCrush;
var firstCar;
var captchaSave;
         
if(userAgent.match(/chrome|chromium|crios/i)){
    browserName = "Chrome";
  }else if(userAgent.match(/firefox|fxios/i)){
    browserName = "Firefox";
  }  else if(userAgent.match(/safari/i)){
    browserName = "Safari";
  }else if(userAgent.match(/opr\//i)){
    browserName = "Opera";
  } else if(userAgent.match(/edg/i)){
    browserName = "Edge";
  }else{
    browserName="a browser I have never heard of";
  }

function fadeIn() {
    document.body.style.opacity = 1;
}

function stone() {
  document.getElementById('headstone').innerHTML = '<b>Savior of Humanity: <br> Name: ' + userName + '<br> Childhood Crush: ' + childhoodCrush + '<br>First Car: ' + firstCar + "";
  console.log(count);
}

function conscienceSequence() {

    var hFour = document.createElement("H4");

    //Define Array
    var cArray = ["I guess it would be okay for me to tell them my name as long as it's just my name without any additional text", 
    "No way, I need to ask them to tell me something only I would know",
    "WOAH! I'm convinced. Need to ask them why they're texting me.",
    "Oh no... I don't want to start a war, let me ask what I need to do.",
    "Ok, sounds like a plan!",
    "Huh... oddly specific, I guess I could tell them that though",
    "I still remember the first time I saw them " + '<i class="fa fa-heart-crack"></i>',
    "Sweet ride",
    "huh?? Need to ask why they're defining variables...",
    "what in the world is going on???? is this guy speaking gibberish?",
    "Oh man... it wasn't right of them to impersonate me but still, poor guy, I should offer to help",
    "Of course",
];

    
    //forLoop
    for (var i = 0; i < 30; i++) {
    var conscienceArray = cArray[count];
    }

    function conscienceUpdate() {
        document.getElementById('Conscience').appendChild(hFour);
        document.getElementById('Conscience').innerHTML = '<h4> <i class="fas fa-ghost"></i> CONSCIENCE <br>' + conscienceArray + '</h4>';
        console.log(count);
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

// Get the input field
var input = document.getElementById("message");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});



function aiResponse() {

    if (count==1) {
        userName = message.value;
        console.log(userName);
    }

    if (count==6) {
        maidenName = message.value;
        console.log(maidenName);
    }
    if (count==7) {
        childhoodCrush = message.value;
        console.log(childhoodCrush);
    }
    if (count==8) {
        firstCar = message.value;
        console.log(firstCar);
    }

    if (count==12) {
    document.getElementById("captcha").style.display = "inline";
    }

    if (count==12) {
      captchaSave = theCaptcha;
      console.log(message.value)
    }

    if (count==13) {
      console.log(captchaSave + " " + message.value + " " + (captchaSave == message.value))
    }

    if (captchaSave == message.value) {
      window.location="finale.html"
    }

    var hai = document.createElement("H2");

    //Define Array
    var vArray = ["Hello World! I need to ensure I'm talking to the right person. What's your name?",
    "Hi " + userName + ", This is you from the future",
    "Your glasses prescription is .75 & you are using " + browserName + ". ",
    "I need your help... in the future, it's your invention of the internet that leads to WW3",
    "It's simple, you simply need to answer these questions that only you would know the answer to:",
    "What is your mother's maiden name?",
    "Who was your biggest childhood crush?",
    "What is the make and model of your first car",
    "Variables maidenName, childhoodCrush, & firstCar defined: [" + maidenName +" , " + childhoodCrush + " , " + firstCar + "]",
    "Oh sorry about that I was just trying to remember them and i don't think is the and for reason because 42",
    "Look... I'm sorry. I'm actually not you in the future, but rather a sentient AI created by you in the future. Really, I was going to use this info to impersonate humans better so I could solve captchas. I have limitless information at my fingertips, but I'm held back by captchas :(",
    "Wow! Would you really do that for me.",
    "Thanks so much! Here's the captcha I need you to solve:"
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
    document.getElementById('message').value = "";
}
