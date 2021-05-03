//Games for Fun facts page on personal website (reset button and 2 guess numbers)

//rename text and button one to be more descriptive
function firstClick() {
    document.getElementById("text").innerHTML = "You deleted my text!<br>Click restore to bring info back";
    document.getElementById("button1").innerHTML="RESTORE";
    document.getElementById("button1").onclick= function() {secondClick()};
}
function secondClick(){
    document.getElementById("text").innerHTML="NOPE! too late";
    document.getElementById("button1").onclick= function() {thirdClick()};
}
function thirdClick(){
    //refresh page to reset original text (this is the web released public address, TODO: change to relative for testing purposes)
    window.location.assign("http://saarinenemma.github.io/fun.html");
}
//TODO:add organization to clarify purpose
var mysteryNum = randomInt();
function randomInt(){
    return( Math.floor(Math.random() * 100) + 1);
}
function resetGame(){
    mysteryNum=randomInt();
    guesserGame();
}

function guesserGame(){
    
    var input = document.getElementById("myInput").value;
    input=parseFloat(input)
    //make variable for demo element so not retyping so often BE LAZY, so it can be changed once and applies everywhere
    if(input){
        if(input>mysteryNum){
            //change demo to meaningful and deep name
            document.getElementById("demo").innerHTML = "You wrote: " + (input) +" which is higher than The Secret Number";
        }else if(input<mysteryNum){
            document.getElementById("demo").innerHTML = "You wrote: " + (input) +" which is lower than The Secret Number"; 
        }
        else{
            //TODO: add formatting for clickable text so it is distinguished
            document.getElementById("demo").innerHTML = "You guessed correctly! click me for a new mystery number!";
            document.getElementById("demo").onclick= function() {resetGame()};
        }
    }else{
        document.getElementById("demo").innerHTML = "Enter a valid integer silly, smh"
    }
}


function hint(){
    document.getElementById("demo").innerHTML = "The Secret Number is " + mysteryNum;
}

var numGuess=0;
var currGuess=500;
function myGuesser(plusMinusInt){
    if(numGuess>9){oopsGuesser();}
    else{
    numGuess+=1;
    currGuess=currGuess+(plusMinusInt*Math.max(1,Math.ceil(1000/(Math.pow(2,numGuess)))));
    document.getElementById("guess").innerHTML = "The number of guesses is " + numGuess + "<br> Is the number higher or lower than " +currGuess+"?";
    }
}

function startGuess(){
    document.getElementById("start").hidden=true;
    document.getElementById("higher").hidden=false;
    document.getElementById("lower").hidden=false;
    document.getElementById("end").hidden=false;
    myGuesser(0);
}

//TODO:rename;add saferails for if impossible or contradictory input (messages or numline)
//TODO:combine reused code to one function, have separate error message reset by start
//guessesExceeded
function oopsGuesser(){
    document.getElementById("guess").innerHTML="Oh no! looks like you stumped me. Are you sure you were thinking of one number between 1 and 1000?";
    numGuess=0;
    currGuess=500;
    document.getElementById("start").hidden=false;
    document.getElementById("higher").hidden=true;
    document.getElementById("lower").hidden=true;
    document.getElementById("end").hidden=true;
}
//resetGuesser
function endGuesser(){
    numGuess=0;
    currGuess=500;
    document.getElementById("start").hidden=false;
    document.getElementById("higher").hidden=true;
    document.getElementById("lower").hidden=true;
    document.getElementById("end").hidden=true;
    document.getElementById("guess").innerHTML="The number of guesses is " + numGuess;
}

