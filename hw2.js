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
function validateAddressline1(){
    var ad1 = document.getElementById("addressline1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length<2) {
        document.getElementById("addressline1-error").innerHTML="Please enter something on the address line";
         return false;
    } else {
        document.getElementById("addressline1-error").innerHTML="";
        return true;
    }
}
