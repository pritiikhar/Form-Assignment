const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isAlphabetInput = (event) => {
    const key = event.keyCode;
    return ((key >= 65 && key <= 90) || // Allow number line
        (key == 32) // Allow space
    );
};

const isAlphabetInputPhone = (event) => {
    const key = event.keyCode;
    return ((key >= 29 && key <= 54) || // Allow number line
        (key == 62) // Allow space
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) // Allow left, up, right, down
       
};

const formatMob = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatName = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isAlphabetInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

//Mobile number validation
const formatToPhone = (event) => {

if(isModifierKey(event)) {return;}
    
    const target = event.target;
    value = target.value;
    const input = target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    zip = input.substring(0,3);
    middle = input.substring(3,6);
    last = input.substring(6,10);
    
   

    if(input.length >= 6){target.value = `(${zip})-${middle}-${last}`;
    stateNum();
}
    else if(input.length >= 3){target.value = `(${zip}) - ${middle}`;
    mobOptr();
}
    else if(input.length > 0){target.value = `(${zip}`;}
    
};

//Name Validation
const formatToName = (event) => {

    const target =  event.target;
    const value = target.value;
    word = value.split(" ");
    var char = " ";
    var i;
if (word.length<2) {
document.getElementById("NameError").innerHTML = "*Name should contain atleast two words";
document.getElementById("submit").disabled = true;
}
else
{
document.getElementById("NameError").style.display = "none";
document.getElementById("submit").disabled = false;
}

for(i = 0; i < word.length; i++){
char = word[i].length + "<br>";
if(word[i].length<4){
  document.getElementById("NameError").innerHTML = "*Each word of name should cointain min 4 characters ";
  document.getElementById("NameError").style.display = "block";
  document.getElementById("submit").disabled = true;
  }
}    
};



// ----------------------------------------------------------------------------------------------------------------


const phoneNumber = document.getElementById('phoneNumber');
phoneNumber.addEventListener('keydown',formatMob);
phoneNumber.addEventListener('keyup',formatToPhone);

const name = document.getElementById('name');
name.addEventListener('keydown',formatName);
name.addEventListener('keyup',formatToName);





//------------------------------------------------------------------------------------------------------------------

function mobOptr(){
if(620 < zip && zip < 800){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "jio.png";
 document.getElementById("submit").disabled = false;
 document.getElementById("error").style.display = "none";
}
else if(800 < zip && zip < 919){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "idea.png";
 document.getElementById("submit").disabled = false;
 document.getElementById("error").style.display = "none";
}
else if(920 < zip && zip < 1000){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "vodafone.png";
 document.getElementById("submit").disabled = false;
 document.getElementById("error").style.display = "none";
}
else {
document.getElementById("error").style.display = "block";
document.getElementById("error").innerHTML = "*Invalid Mobile Number";
document.getElementById("submit").disabled = true;
}
}

//------------------------------------------------------------------------------------------------------------------

function stateNum(){
if(middle == 100){
 document.getElementById("p").innerHTML = "Andhra Pradesh";
 document.getElementById("error").style.display = "none";
 document.getElementById("submit").disabled = false;
}
else if(middle == 125){
document.getElementById("p").innerHTML = "Arunachal Pradesh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 150){
document.getElementById("p").innerHTML = "Assam";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 175){
document.getElementById("p").innerHTML = "Bihar";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 200){
document.getElementById("p").innerHTML = "Chhattisgarh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 225){
document.getElementById("p").innerHTML = "Goa";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 250){
document.getElementById("p").innerHTML = "Gujrat";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 275){
document.getElementById("p").innerHTML = "Haryana";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 300){
document.getElementById("p").innerHTML = "Himachal Pradesh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 325){
document.getElementById("p").innerHTML = "Jharkhand";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 350){
document.getElementById("p").innerHTML = "Karnataka";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 375){
document.getElementById("p").innerHTML = "Kerala";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 400){
document.getElementById("p").innerHTML = "Madhya Pradesh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 425){
document.getElementById("p").innerHTML = "Maharashtra";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 450){
document.getElementById("p").innerHTML = "Manipur";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 475){
document.getElementById("p").innerHTML = "Meghalaya";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 500){
document.getElementById("p").innerHTML = "Mizoram";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 525){
document.getElementById("p").innerHTML = "Nagaland";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 550){
document.getElementById("p").innerHTML = "Odisha";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 575){
document.getElementById("p").innerHTML = "Punjab";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 600){
document.getElementById("p").innerHTML = "Rajasthan";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 625){
document.getElementById("p").innerHTML = "Sikkim";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 650){
document.getElementById("p").innerHTML = "Tamil Nadu";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 675){
document.getElementById("p").innerHTML = "Telangana";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 700){
document.getElementById("p").innerHTML = "Tripura";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 725){
document.getElementById("p").innerHTML = "Uttar Pradesh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 750){
document.getElementById("p").innerHTML = "Uttarakhand";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 775){
document.getElementById("p").innerHTML = "West Bengal";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 800){
document.getElementById("p").innerHTML = "Andaman and Nicobar Islands";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 825){
document.getElementById("p").innerHTML = "Chandigarh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 850){
document.getElementById("p").innerHTML = "Dadra and Nagar Haveli and Daman and Diu";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 875){
document.getElementById("p").innerHTML = "Delhi";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 900){
document.getElementById("p").innerHTML = "Jammu and Kashmir";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 925){
document.getElementById("p").innerHTML = "Ladakh";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 950){
document.getElementById("p").innerHTML = "Lakshadweep";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else if(middle == 975){
document.getElementById("p").innerHTML = "Puducherry";
document.getElementById("error").style.display = "none";
document.getElementById("submit").disabled = false;
}
else {
document.getElementById("error").innerHTML = "*Invalid Mobile Number";
document.getElementById("error").style.display = "block";
document.getElementById("submit").disabled = true;
}
}

var form = document.getElementById("form");

form.addEventListener('submit', (e) => {
var otp = Math.floor(1000 + Math.random() * 9000);
document.getElementById("otp1").innerHTML ="OTP is" + " " + otp;
document.getElementById("submit").disabled = true;
localStorage.setItem("firstName", word[0]);
localStorage.setItem("mobileNum", value);
localStorage.setItem("otp", otp);
url = "validate.html";
window.open(url); 
e.preventDefault();

})
