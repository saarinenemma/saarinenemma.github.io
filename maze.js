currentRoom=document.getElementById("currentRoom");
var person = 
{firstName:"John",
lastName:"Doe",
upPosition:0,
rightPostion:0,
hasFlashlight:true,
hasMap:true,
changeFirstName: function(newFirstName){this.firstName=newFirstName; return "the mysterious adeventurer is named "+this.firstName},
changeLastName: function(newLastName){this.lastName=newLastName},
fullName : function() {
    return this.firstName + " " + this.lastName;},
moveUp: function(){this.upPosition+=1; return this.fullName() + " moves forward. "},
moveDown: function(){},
moveRight: function(){},
moveLeft: function(){},
flashlightStatus: function(){var chanceOfChange=Math.random();if(this.hasFlashlight&&chanceOfChange<.33){return this.dropFlashlight()}else if(chanceOfChange<.33){return this.pickUpFlashlight()}else{return ""}
},
pickUpFlashlight: function(){this.hasFlashlight=true; return this.fullName() + " found a flashight! "+this.fullName()+" can see the doors in the room now. "},
dropFlashlight: function(){this.hasFlashlight=false; return this.fullName()+ " remembered they had a deadly fear of flashlights and threw the one in their hand as far as they could. It is now too dark to see the doors in the room. "},
pickUpMap: function(){},
dropMap: function(){}
}
function firstRoom(){
    person.hasFlashlight=true;
person.hasMap=true;
person.upPosition=0;
person.rightPostion=0;
    document.getElementById("startMaze").hidden=true;
    document.getElementById("currentRoom").innerHTML= "A mysterious adventurer stands alone in a room. They are using a flashlight to look around the room. They are wearing a very funny hat, but nevertheless they look intrepid. Which way does "+person.fullName()+" go?";
    counted_choice = make_counted_choice(choice);
single_choice = make_missing_choice(counted_choice)
prompt = "which direction does "+person.fullName()+" go?";
choices = [["up",0,1], ["down",0,-1], ["left",-1,0],["right",1,0]];
single_choice(prompt,choices,createNextRoom);
}
function createNextRoom(text,xCoord,yCoord){
    person.rightPostion+=xCoord;
    person.upPosition+=yCoord;
    if (person.rightPostion<0 & person.upPosition<0){
        lost();
    }
    if (person.upPosition>=5 & person.rightPostion>=5){escapeMaze()}
    else{
simpleOutput(text);

}
}
function lost(){
document.getElementById("currentRoom").innerHTML+=person.fullName()+" is now further away from the exit than when they started. They recall that, fittingly, their name is Hope Leslie Lost";
person.changeFirstName("Hope Leslie");
person.changeLastName("Lost");
}
function escapeMaze(){
    document.getElementById("currentRoom").innerHTML+="<br>"+person.fullName() +" escaped the maze! "+person.fullName()+ " breathes in the outside air and observes the world. "+person.fullName()+" sees the mundanity and remembers why they went into a supposedly inescapable maze in the first place..."
    document.getElementById("startMaze").hidden=false;
}