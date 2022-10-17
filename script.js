function validateName(){

let firstname = document.forms["forma"]["firstname"].value;
let Surname = document.forms["forma"]["Surname"].value;
let Subject = document.forms["forma"]["Subject"].value;

if (firstname.length < 3 ){

    document.getElementById ("msg_error").innerHTML="Το ονομα πρεπει να είναι τουλάχιστον 3 γράμματα";
    document.getElementById ("msg_error").style.color="red";

}


else if (Surname.length <3){
    document.getElementById ("msg_error").innerHTML="Το επίθετο πρεπει να είναι τουλάχιστον 3 γράμματα";
    document.getElementById ("msg_error").style.color="red";

}
else if (Subject.length <3){
    document.getElementById ("msg_error").innerHTML="Το Subject πρεπει να είναι τουλάχιστον 3 γράμματα";
    document.getElementById ("msg_error").style.color="red";



}


else{
    document.getElementById ("msg_error").innerHTML=" ";

}
}

function validateFees (){

let Fees =document.forms["forma"]["Fees"].value;

if (Fees <0){

    document.getElementById ("msg_errorFees").innerHTML="Τα Fees δεν μπορούν να είναι αρνητικός αριθμός";
    document.getElementById ("msg_errorFees").style.color="red";
    
}

}

function validateAssignValues(){

let Title = document.forms["forma"]["Title"].value;
let Description =document.forms["forma"]["Description"].value;


if (Title.length < 5){
    document.getElementById ("msg_errorAss").innerHTML="Ο τίτλος πρέπει να είναι τουλάχιστον 5 γράμματα";
    document.getElementById ("msg_errorAss").style.color="red";


}

else if (Description.length <5){
    document.getElementById ("msg_errorAss").innerHTML="Το Description πρέπει να είναι τουλάχιστον 5 γράμματα";
    document.getElementById ("msg_errorAss").style.color="red";



}
else{
    document.getElementById ("msg_errorAss").innerHTML=" ";


}
}

function validateMark (){

    let OralMark =document.forms["forma"]["OralMark"].value;
    let TotalMark =document.forms["forma"]["TotalMark"].value;

    
    if (OralMark <0 ||TotalMark<0){
    
        document.getElementById ("msg_errorMark").innerHTML="Τα Marks δεν μπορούν να είναι αρνητικός αριθμός";
        document.getElementById ("msg_errorMark").style.color="red";
        
    }

    

    else{

        document.getElementById ("msg_errorMark").innerHTML=" ";

    }
    
    }