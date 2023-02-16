var username = document.getElementById("exampleInputEmail1");
var usercorr = "admin";

function userval(){
    if(!username.value.match(usercorr)){
        return false;
    }
    else{
        return true;
    }
}

var password = document.getElementById("exampleInputPassword1");
var passcorr = "12345";

function passval(){
    if(!password.value.match(passcorr)){
        return false;
    }
    else{
        return true;
    }
}


function submitval(){
    if(userval() && passval()){
        return true;
    }
    else{
        return false;
    }
}


function submitt(){
    if(!submitval()){
        errorr.innerHTML="Invalid username or password"
        timeOut=setTimeout(displ,3000)
    }
}

var errorr = document.getElementById("errordisp")
function displ(){
    errorr.innerHTML=""
}