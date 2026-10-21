// IF STATEMENTS = IF A CONDITION IS TRUE , EXECUTE SOME CODE 
//                    IF NOT , DO SOMETHING ELSE

let Age = -2;
if(Age >= 18){
    console.log(" you are old enough to enter this site");  
}
else if(Age < 0){
    console.log("your age cant be below zero");
}
else{
    console.log("you must be 18+ to enter this site");    
}

let time = 14; //24hr time
if(time < 12 ){
    console.log("Good morning");

}else{
    console.log("Good afternoon");
}

let isStudent = false;

if(isStudent){
    console.log("you are a student");
}else{
    console.log("you are not a studnet");
}

let age = 23;
let haslicense = false;

if( age >= 16 ){
    console.log( "you are old enough to drive");
    if(haslicense){
        console.log("you have your license!");
    }else{
        console.log("you do not have your license yet !");
    }
}else{
    console.log("you are not old enough to drive");
}

``