log = console.log

function simpleOutput(text){
    document.getElementById("currentRoom").innerHTML += "<p>" + person.fullName()+" went " + text + "." + "</p>";
    document.getElementById("currentRoom").innerHTML+=person.flashlightStatus();
    
    prompt = "which direction does"+person.fullName() +" go?";
    choices = [["up",0,1], ["down",0,-1], ["left",-1,0],["right",1,0]];
    current_room=make_missing_choice(choice);
    if(!person.hasFlashlight){prompt=person.fullName()+" cant see anything. They fumble along the wall until they find a door";
    current_room=make_blind_choice(current_room); 
    }
    else if(person.hasMap){
        prompt=person.fullName()+" is at "+person.rightPostion+", "+person.upPosition+". Reach 5, 5 to get out.";
        current_room=make_mapped_choice(current_room);
    }
    
    current_room(prompt,choices,createNextRoom);


}
function nextPrompt(text){
    document.getElementById("currentRoom").innerHTML += "<p>" + text + "</p>";
}

function choice(prompt, choices, callback_function){
    nextPrompt(prompt);
    choice_div = document.getElementById("choices");
    choice_div.innerHTML = "";
    choices.forEach((choice)=>{
        document.getElementById("choices").innerHTML += "<button id='"+ choice[0] +"'>" + choice[0] + "</button>";
    })
    choices.forEach((choice)=>{
        document.getElementById(choice[0]).onclick=()=>{choice_div.innerHTML="";callback_function(choice[0],choice[1],choice[2]);};
    })
}

function make_counted_choice(wrapped_choice_func){
    let count = 0;
    function counted_choice(prompt, choices, callback){
        count += 1;
        if(count > 1){
            nextPrompt(person.fullName+" encounters the room for the " + count + "th time.")
        }
        wrapped_choice_func(prompt, choices, callback);
    }
    return counted_choice;
}

function make_missing_choice(wrapped_choice_func){
    function missing_choice(prompt, choices, callback) {
        limited_choices=make_limited_choices(choices);
        
        wrapped_choice_func(prompt, limited_choices, callback);
    }
    return missing_choice;
}
function make_limited_choices(choices){
    start=Math.floor(Math.random()*choices.length);
    limited_choices=[];
    num_missing_choice=Math.floor(Math.random()*(choices.length-1));
    for (i = 0; i < (choices.length-num_missing_choice); i++){
    limited_choices.push(choices[(start+i)%(choices.length)]);
    }
    return limited_choices
}

function make_blind_choice(wrapped_choice_func){
    function blind_choice(prompt, choices, callback) {
        limited_choices=[["Move in the dark",Math.floor(Math.random()*3-1),Math.floor(Math.random()*3-1)]]
        
        wrapped_choice_func(prompt, limited_choices, callback);
    }
    return blind_choice;
}

function make_mapped_choice(wrapped_choice_func){
    function mapped_choice(prompt, choices, callback) {
        
        
        wrapped_choice_func(prompt, choices, callback);
    }
    return mapped_choice;
}

function make_infinite_room(wrapped_choice_func, prompt, choices){
    function infinite_room(){
        wrapped_choice_func(prompt, choices, ()=>{infinite_room()});
    }
    return infinite_room;
}

counted_choice = make_counted_choice(choice);
single_choice = make_missing_choice(counted_choice)
real_counted_choice=make_counted_choice(single_choice)
prompt = "which direction does"+person.fullName()+" go?";
choices = ["up", "down", "left","right"];
infinite_room = make_infinite_room(single_choice, prompt, choices);
//single_choice(prompt,choices,simpleOutput);
//infinite_room();

/*questions for Sam:
if i dont infinite it doesnt count but if i do infinite it doesnt do anything else....
two conflicting wrappers (map and blind)
*/