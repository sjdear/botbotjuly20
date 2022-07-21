const nar = () => {
    
    //Wanna chat
    const stageZero = () => {
      const playBtn = document.querySelector(".intro button");
      const zeroScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        zeroScreen.classList.toggle("fadeOut", true); //intro screen fades out
        match.classList.toggle("fadeOut", false);
        firstBotMessage();
      });
    };
    
    stageZero();

  };


//start the game function 
nar();

//getting time
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = "<" + hours + ":" + minutes + "> ";
    return time;
}

//makes chatbox appear/disappear
function chatAppearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", true);
    chatBox.classList.toggle("fadeOut", false);

}

function chatDisappearOne() {
    const chatBox = document.querySelector(".chat-bar-input-block");
    chatBox.classList.toggle("fadeIn", false);
    chatBox.classList.toggle("fadeOut", true);
}

//makes button appear/disappear
function buttonAppearOne() {
    const chatBox = document.querySelector(".buttonChat");
    chatBox.classList.toggle("fadeInButton", true);
    chatBox.classList.toggle("fadeOutButton", false);

}

function buttonDisappearOne() {
    const chatBox = document.querySelector(".buttonChat");
    chatBox.classList.toggle("fadeInButton", false);
    chatBox.classList.toggle("fadeOutButton", true);
}

//makes button appear/disappear
function buttonAppearTwo() {
    const chatBox = document.querySelector(".buttonChatTwo");
    chatBox.classList.toggle("fadeInButtonTwo", true);
    chatBox.classList.toggle("fadeOutButtonTwo", false);

}

function buttonDisappearTwo() {
    const chatBox = document.querySelector(".buttonChatTwo");
    chatBox.classList.toggle("fadeInButtonTwo", false);
    chatBox.classList.toggle("fadeOutButtonTwo", true);
}

function buttonAppearThree() {
    const chatBox = document.querySelector(".buttonChatThree");
    chatBox.classList.toggle("fadeInButtonThree", true);
    chatBox.classList.toggle("fadeOutButtonThree", false);

}

function buttonDisappearThree() {
    const chatBox = document.querySelector(".buttonChatThree");
    chatBox.classList.toggle("fadeInButtonThree", false);
    chatBox.classList.toggle("fadeOutButtonThree", true);
}

function buttonAppearFour() {
    const chatBox = document.querySelector(".buttonChatFour");
    chatBox.classList.toggle("fadeInButtonFour", true);
    chatBox.classList.toggle("fadeOutButtonFour", false);

}

function buttonDisappearFour() {
    const chatBox = document.querySelector(".buttonChatFour");
    chatBox.classList.toggle("fadeInButtonFour", false);
    chatBox.classList.toggle("fadeOutButtonFour", true);
}



//intro section

//message 1
function firstBotMessage() {
    var div = document.getElementById('botStarterMessage');
    let botText = "botbot: hi"
    let time = getTime();
    var typewriter = new Typewriter(div, {
        delay: 50
    });
    typewriter.typeString(time + botText)
    .start();

    document.getElementById("userInput").scrollIntoView(false);
    document.getElementById("helloButton").innerHTML = "you: hello";
    
    

    setTimeout(() => {
        buttonAppearOne();
    }, 1000)

    
    const internButtonYes = document.querySelector(".helloButton");
    internButtonYes.onclick = helloButton;
    

    function helloButton (){
        buttonDisappearOne();
            let userText = 'you: hello'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                secondBotMessage(); //should be secondBotMessage
            }, 1000)

}

function secondBotMessage() {
    let botText = 'botbot: hi'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        buttonAppearTwo();
    }, 1000)

    const internButtonYes = document.querySelector(".youAlreadyButton");
    const internButtonNo = document.querySelector(".hiButton");
    internButtonYes.onclick = youAlready;
    internButtonNo.onclick = hi;


    function hi (){
        buttonDisappearTwo();
        let userText = 'you: hi...?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            thirdBotMessage();
        }, 1000)
    }   

    function youAlready (){
        buttonDisappearTwo();
        buttonDisappearTwo();
        let userText = 'you: you already said that'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            thirdBotMessage();
        }, 1000)
    }   
}

function thirdBotMessage() {
    let botText = 'botbot: oh, I repeated myself. sorry, I have a stutter!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fourthBotMessage();
    }, 1000)
}

function fourthBotMessage() {
    let botText = 'botbot: actually, I don’t. I’m just a pathological liar.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        buttonAppearThree();
    }, 1000)

    const internButtonYes = document.querySelector(".whatButton");
    internButtonYes.onclick = whatButton;
    

    function whatButton (){
        buttonDisappearThree();
            let userText = 'you: what does this have to do with future telling?'
            let time = getTime();
            let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
            $("#chatbox").append(botHtml);
        
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
            setTimeout(() => {
                fifthBotMessage();
            }, 1000)

    }
}

function fifthBotMessage() {
    let botText = 'botbot: future telling? oh, did you come here for madame bot bot, psychic and future teller?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        sixthBotMessage();
    }, 1000)
}

function sixthBotMessage() {
    let botText = 'botbot: yeah, sorry, wrong bot bot. madame stopped paying her domain fee and so her site sometimes shows up on my domain, because of the same name and all that. very annoying. like getting the mail of old tenants in your apartment.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        buttonAppearFour();
    }, 1000)

    const internButtonYes = document.querySelector(".umButton");
    const internButtonNo = document.querySelector(".guessButton");
    internButtonYes.onclick = um;
    internButtonNo.onclick = guess;


    function um (){
        buttonDisappearFour();
        let userText = 'you: um... okay. bye'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            seventhBotMessage();
        }, 1000)
    }   

    function guess (){
        buttonDisappearFour();
        let userText = 'you: guess it was too good to be true'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            seventhBotMessage();
        }, 1000)
    }   
}

function seventhBotMessage() {
    let botText = 'botbot: you’re leaving already? You just got here!'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        eighthBotMessage();
    }, 1000)
}

function buttonAppearFive() {
    const chatBox = document.querySelector(".buttonChatFive");
    chatBox.classList.toggle("fadeInButtonFive", true);
    chatBox.classList.toggle("fadeOutButtonFive", false);

}

function buttonDisappearFive() {
    const chatBox = document.querySelector(".buttonChatFive");
    chatBox.classList.toggle("fadeInButtonFive", false);
    chatBox.classList.toggle("fadeOutButtonFive", true);
}

function eighthBotMessage() {
    let botText = 'botbot: I’m not too good at telling futures, but I could tell you what you were in a past life. how about that?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        buttonAppearFive();
    }, 1000)

    const internButtonYes = document.querySelector(".nowButton");
    const internButtonNo = document.querySelector(".howButton");
    internButtonYes.onclick = now;
    internButtonNo.onclick = how;


    function now (){
        buttonDisappearFive();
        let userText = 'you: Now it just seems like you’re grasping for straws'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            ninthBotMessage();
        }, 1000)
    }   

    function how (){
        buttonDisappearFive();
        let userText = 'you: How?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            ninthBotMessage();
        }, 1000)
    }   
}

function ninthBotMessage() {
    let botText = 'botbot: it’s not that hard, I used to watch the other bot bot do it sometimes. I can’t imagine how I could be wrong...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        tenthBotMessage();
    }, 1000)
}

function tenthBotMessage() {
    let botText= 'botbot: how about this.... I can make a guess and if I’m wrong, you can leave. Pronto. Not like you have anything better to do, right?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
            chatDisappearOne();
        }
    });

}

function getResponse() {
    getResponse = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        eleventhBotMessage();
    }, 1000) 

}

function eleventhBotMessage() {
    let botText = 'botbot: okay, that’s a little... embarrassing to tell a bot that you just met. But I might know a guy. Let’s start.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twelthBotMessage();
    }, 1000)
}

function twelthBotMessage() {
    let botText = 'botbot: okay, let’s start with the basics. What’s your name?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        chatAppearOne();
    }, 1000)

    //press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getName();
            chatDisappearOne();
        }
    });

}

//name section
//gets botbot's response from our list and displays it
function getNameResponse(userText) {
    let botResponse = getBotResponse(userText);
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + 'botbot: ' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

     setTimeout(() => {
     thirteenthBotMessage();
     }, 1000)

}

//stops funtions from running again
function noop() {};

//gets name from the user, diplays it, and processes it, sends to getHardResponse()
function getName() {
    getName = noop;
    let userText = $("#textInput").val();
    let time = getTime();
    let userHtml = '<p class="userText"><span>' + time + 'you: ' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getNameResponse(userText);
    }, 1000) //botbot needs 2 seconds to think of a response

}

function thirteenthBotMessage() {
    let botText = 'botbot: what’s your social security number?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fourteenthBotMessage();
    }, 1000)
}

function fourteenthBotMessage() {
    let botText = 'botbot: KIDDING! I wouldn’t ask you that. It’s already on the internet anyway.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fifteenthBotMessage();
    }, 1000)
}

function buttonAppearSix() {
    const chatBox = document.querySelector(".buttonChatSix");
    chatBox.classList.toggle("fadeInButtonSix", true);
    chatBox.classList.toggle("fadeOutButtonSix", false);

}

function buttonDisappearSix() {
    const chatBox = document.querySelector(".buttonChatSix");
    chatBox.classList.toggle("fadeInButtonSix", false);
    chatBox.classList.toggle("fadeOutButtonSix", true);
}

function fifteenthBotMessage() {
    let botText = 'botbot: have you ever had a possession where you mentioned what you were, in a past life..time?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        buttonAppearSix();
    }, 1000)

    const internButtonYes = document.querySelector(".noTwoButton");
    const internButtonNo = document.querySelector(".evenButton");
    internButtonYes.onclick = no;
    internButtonNo.onclick = even;


    function no (){
        buttonDisappearSix();
        let userText = 'you: No.'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            sixteenthBotMessage();
        }, 1000)
    }   

    function even (){
        buttonDisappearSix();
        let userText = 'you: Even if I did, telling you kind of feels like cheating?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            sixteenthBotMessage();
        }, 1000)
    }   
}

function sixteenthBotMessage() {
    let botText = 'botbot: let’s move on. Time for some past life recall - I’m about to show you some images, videos, etc, and we will see how you react them.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        seventeenthBotMessage();
    }, 1000)
}

function buttonAppearSeven() {
    const chatBox = document.querySelector(".buttonChatSeven");
    chatBox.classList.toggle("fadeInButtonSeven", true);
    chatBox.classList.toggle("fadeOutButtonSeven", false);

}

function buttonDisappearSeven() {
    const chatBox = document.querySelector(".buttonChatSeven");
    chatBox.classList.toggle("fadeInButtonSeven", false);
    chatBox.classList.toggle("fadeOutButtonSeven", true);
}

function seventeenthBotMessage() {
    let botText = 'botbot: how do you feel about this?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        imageAppearOne();
    }, 2000)
}

function imageAppearOne() {
    const image = document.querySelector(".liberty");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearOne();
    }, 2000)
}
    
function imageDisappearOne() {
    const image = document.querySelector(".liberty");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearSeven();
    }, 1000)

    const internButtonYes = document.querySelector(".fineButton");
    const internButtonNo = document.querySelector(".iHateButton");
    const internButtonWho = document.querySelector(".whoCaresButton");
    internButtonYes.onclick = fine;
    internButtonNo.onclick = iHate;
    internButtonWho.onclick = whoCares;


    function fine (){
        buttonDisappearSeven();
        let userText = 'you: Fine?'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            eighteenthBotMessage();
        }, 1000)
    }   

    function iHate (){
        buttonDisappearSeven();
        let userText = 'you: I hate it'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            eighteenthBotMessage();
        }, 1000)
    }   

    function whoCares (){
        buttonDisappearSeven();
        let userText = 'you: Who Cares'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            eighteenthBotMessage();
        }, 1000)
    }   
}

function buttonAppearEight() {
    const chatBox = document.querySelector(".buttonChatEight");
    chatBox.classList.toggle("fadeInButtonEight", true);
    chatBox.classList.toggle("fadeOutButtonEight", false);

}

function buttonDisappearEight() {
    const chatBox = document.querySelector(".buttonChatEight");
    chatBox.classList.toggle("fadeInButtonEight", false);
    chatBox.classList.toggle("fadeOutButtonEight", true);
}


function eighteenthBotMessage() {
    let botText = 'botbot: now how about this?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        imageAppearTwo();
    }, 2000)
}

function imageAppearTwo() {
    const image = document.querySelector(".coldplay");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearTwo();
    }, 3000)
}
    
function imageDisappearTwo() {
    const image = document.querySelector(".coldplay");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearEight();
    }, 1000)


    const internButtonYes = document.querySelector(".coldplayButton");
    const internButtonNo = document.querySelector(".lameButton");
    const internButtonWho = document.querySelector(".absoluteButton");
    internButtonYes.onclick = coldplay;
    internButtonNo.onclick = lame;
    internButtonWho.onclick = absolute;


    function coldplay (){
        buttonDisappearEight();
        let userText = 'you: Coldplay is alright'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            nineteenthBotMessage();
        }, 1000)
    }   

    function lame (){
        buttonDisappearEight();
        let userText = 'you: Lame'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            nineteenthBotMessage();
        }, 1000)
    }   

    function absolute (){
        buttonDisappearEight();
        let userText = 'you: Absolute bop'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            nineteenthBotMessage();
        }, 1000)
    }   
}

function buttonAppearNine() {
    const chatBox = document.querySelector(".buttonChatNine");
    chatBox.classList.toggle("fadeInButtonNine", true);
    chatBox.classList.toggle("fadeOutButtonNine", false);

}

function buttonDisappearNine() {
    const chatBox = document.querySelector(".buttonChatNine");
    chatBox.classList.toggle("fadeInButtonNine", false);
    chatBox.classList.toggle("fadeOutButtonNine", true);
}


function nineteenthBotMessage() {
    let botText = 'botbot: interesting. When you see this, how does it make you feel?'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        imageAppearThree();
    }, 2000)
}

function imageAppearThree() {
    const image = document.querySelector(".degrassi");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", true);
    image.classList.toggle("fadeOutImage", false);
    match.classList.toggle("fadeOut", true);
    match.classList.toggle("fadeIn", false);

    setTimeout(() => {
        imageDisappearThree();
    }, 3000)
}
    
function imageDisappearThree() {
    const image = document.querySelector(".degrassi");
    const match = document.querySelector(".match");
    image.classList.toggle("fadeInImage", false);
    image.classList.toggle("fadeOutImage", true);
    match.classList.toggle("fadeOut", false);
    match.classList.toggle("fadeIn", true);

    setTimeout(() => {
        buttonAppearNine();
    }, 1000)


    const internButtonYes = document.querySelector(".confusedButton");
    const internButtonNo = document.querySelector(".honestlyButton");
    const internButtonWho = document.querySelector(".gossipButton");
    internButtonYes.onclick = confused;
    internButtonNo.onclick = honestly;
    internButtonWho.onclick = gossip;


    function confused (){
        buttonDisappearNine();
        let userText = 'you: I’m confused'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            twentyBotMessage();
        }, 1000)
    }   

    function honestly (){
        buttonDisappearNine();
        let userText = 'you: Honestly? Goals'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            twentyBotMessage();
        }, 1000)
    }   

    function gossip (){
        buttonDisappearNine();
        let userText = 'you: That happened to a buddy of mine once'
        let time = getTime();
        let botHtml = '<p class="botText"><span>' + time + userText + '</span></p>';
        $("#chatbox").append(botHtml);
    
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            twentyBotMessage();
        }, 1000)
    }   
}

function twentyBotMessage() {
    let botText = 'botbot: doing some thoughts.. doing some thinking... oh, this is good. This is SO YOU.'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        twentyoneBotMessage();
    }, 1000)
}

function twentyoneBotMessage() {
    let botText = 'botbot: in a past life, you were...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + botText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        random();
    }, 1000)
}

function random() {
    let thirdMessage = 'in a past life, you were...'
    let time = getTime();
    let botHtml = '<p class="botText"><span>' + time + thirdMessage + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        fun();
    }, 1000)
}
    


}
