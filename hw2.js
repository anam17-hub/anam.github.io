/*
 Program Name:patient-form.html
Author:Anam Amir
Date Created:9/17/2025
Date last edited:9/26/2025
Version:1.0
Description: Homework 1 learning and creating a JS form
*/

//dynamic dare js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};

// dob validation js code
function validateDob(){
    dob=document.getElementById("dob");
    let date= new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);


    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML=
        "Date cannot be in the future."
        dob.value="";
        return false;
     } else if (date< new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML=
        "Date cannot be more than 120 years ago."
        dob.value="";
        return false;
     } else {
        document.getElementById("dob-error").innerHTML="";
        return true
     }
}  
// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    // regex for ssn pattern thing 

    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML=
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML="";
        return true;
    }
}
// address 1 validation js code
function validateAddressline1(){
    var ad1 = document.getElementById("addressline1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length<2) {
        document.getElementById("addressline1-error").innerHTML=
        "Please enter something on the address line";
         return false;
    } else {
        document.getElementById("addressline1-error").innerHTML="";
        return true;
    }
}
//zip code validation js code 
function validateZcode() {
    const zipInput= document.getElementById("zcode");
    let zip= zipInput.value.replace(/[^\d-]/g, "") // removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML=
        "Zip code cannot be left blank.";
        return false;
     }
     if (zip.length >5) {
        zip= zip.slice(0,5); // removes all digits after first 5
     }

     zipInput.value= zip;
     document.getElementById("zcode-error").innerHTML="";
     return true;
}

// email validation js code 
function validateEmail() {
    email= document.getElementById("email").value;
        var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex pattern for email 

if (email=="") {
    document.getElementById("email-error").innerHTML= 
    "Email cannot be empty.";
    return false;
} else if (!email.match(emailR)) {
document.getElementById("email-error").innerHTML= "Please enter a valid email address."
return false;
} else {
    document.getElementById("email-error").innerHTML="";
    return true;
}
}
// mobile number validation js code 
function validateMobile(){
    const mobileInput = document.getElementById("mnumber");
    const mobile = mobileInput.value.replace(/\D/g,""); //removes all non-number characters 

    if (mobile.length ===0){
        document.getElementById("mnumber-error").innerHTML = "Mobile number cannot be left blank.";
        return false;

    }else if (mobile.length !== 10) {
        document.getElementById("mnumber-error").innerHTML=
        "Please enter a valid 10-digit mobile number.";
        return false;
    }

    const formattedMobile= 
    mobile.slice(0,3)+ "-" + mobile.slice(3,6)+ "-" + mobile.slice(6)
    mobileInput.value= formattedMobile;
    document.getElementById("mnumber-error").innerHTML = "";
    return true;
}

//username validation js code 
function validateUname() {
    uname= document.getElementById("uname").value;

    //converts username to lowercase 
    uname=unmae.toLowerCase();

    //display username in lowercase
    document.getElementById("uname").value= uname;

    if (uname.length=== 0) {
        document.getElementById("uname-error").innerHTML= 
        "Username field cannot be left blank.";
        return false;
    }
//checks that username does not start with a number
        if (!isNaN(uname.charAt(0))) {
            document.getElementById("uname-error").innerHTML=
            "Username cannot begin with a number.";
            return false;
        }
    //checks that username consists of only letters, numbers, or underscores 
    let regex= /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML=
        "Username can only contain letters, numbers, or underscores.";
        return false;
        
        }else if (uname,length <5) {
          document.getElementById("uname-error").innerHTML=
        "Username must be at least 5 characters.";
        return false;  
        }else if (uname.length>30) {// checks that username does not have more than 30 characters
        document.getElementById("uname-error").innerHTML=
        "Username cannot exceed 30 characters.";
        return false;
     }else { //if all of the above checks pass then username is valid
        document.getElementById("uname-error").innerHTML="";
        return true;
    }



}