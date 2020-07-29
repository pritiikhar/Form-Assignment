const submit = document.getElementById("submit");
const error = document.getElementById("error");
const phoneNumber = document.getElementById('phoneNumber');
const name = document.getElementById('name');
//------------------------------------------------------------Key validators----------------------------------------------------------------------
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
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatName = (event) => {
    if(!isAlphabetInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};
//--------------------------------------------------------------------Mobile number validation----------------------------------------------------------------------------------
const formatToPhone = (event) => {
const target = event.target;
mobValue = target.value;
const input = target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
zip = input.substring(0,3);
middle = input.substring(3,6);
const last = input.substring(6,10);
let erroR = document.getElementById("erroR");
var logo = document.getElementById("comLogo");

if(isModifierKey(event)) {return;}
if(input.length >= 6){target.value = `(${zip})-${middle}-${last}`;
    
}
    else if(input.length >= 3){target.value = `(${zip}) - ${middle}`;
    
}
    else if(input.length > 0){target.value = `(${zip}`;}

mobOptr();
displayStateName();
   
(mobValue.length == 14)?((erroR.innerHTML = ""), (submit.disabled = false)): ((erroR.innerHTML = "Enter a valid 10 digit  mobile number"),(submit.disabled = true));



(620 <= zip && zip < 800)?((logo.style.display = "inline-block"),(logo.src = "jio.png"), (error.innerHTML = " ")):
(800 <= zip && zip <= 919)?((logo.style.display = "inline-block"),(logo.src = "idea.png"), (error.innerHTML = " ")):
(920 < zip && zip <= 1000)?((logo.style.display = "inline-block"),(logo.src = "vodafone.png"), (error.innerHTML = " ")):
(mobValue.length == 14)?((error.innerHTML = " "),(submit.disabled = false)):
((submit.disabled = true),(error.innerHTML = "*Enter a valid 10 digit  mobile number"),(logo.style.display = "none"));

};
//-----------------------------------------------------------Name Validation-----------------------------------------------------------------------------------------------------
const formatToName = (event) => {
    const nameEx = /^[a-zA-Z ]*$/;
    const target =  event.target;
    const value = target.value;
    word = value.split(" ");
    const nameError =  document.getElementById("NameError");
    const name_Error =  document.getElementById("NameError");
    var char = " ";
    var i;
  
 for(i = 0; i < word.length; i++){
char = word[i].length;
(word[i].length<4)?((nameError.innerHTML = "*Each word of name should cointain min 4 characters"),(submit.disabled = true)):
(word.length<2)?((nameError.innerHTML = "*Name should contain atleast two words"),(submit.disabled = true)):
(nameEx.test(name.value.toUpperCase()) == false )?((name_Error.innerHTML = "*Name should contain alphabets and spaces only"),(submit.disabled = true)):
((nameError.innerHTML = ""),(submit.disabled = false),(name_Error.innerHTML = ""));
} 
};
// ----------------------------------------------------Validates input fields on pressing or realising key------------------------------------------------------------

phoneNumber.addEventListener('keydown',formatMob);
phoneNumber.addEventListener('keyup',formatToPhone);

name.addEventListener('keydown',formatName);
name.addEventListener('keyup',formatToName);

//-------------------------------------------------Displays logo-----------------------------------------------------------------
function mobOptr(){
var logo = document.getElementById("comLogo");

(620 <= zip && zip < 800)?((logo.style.display = "inline-block"),(logo.src = "jio.png"), (error.innerHTML = " ")):
(800 <= zip && zip <= 919)?((logo.style.display = "inline-block"),(logo.src = "idea.png"), (error.innerHTML = " ")):
(920 < zip && zip <= 1000)?((logo.style.display = "inline-block"),(logo.src = "vodafone.png"), (error.innerHTML = " ")):
((submit.disabled = true),(error.innerHTML = "*Invalid Mobile Number"),(logo.style.display = "none"));

}

//----------------------------------------------Displays state name------------------------------------------------------------------------------------------------------------------
function displayStateName(){
let statename = document.getElementById("stateName");
let stateName = [];

stateName[100] = 'Andhra Pradesh', stateName[125] = 'Arunachal Pradesh', stateName[150] = 'Assam', stateName[175] = 'Bihar', stateName[200] = 'Chhattisgarh',
stateName[225] = 'Goa', stateName[250] = 'Gujarat', stateName[275] = 'Haryana', stateName[300] = 'Himachal Pradesh', stateName[325] = 'Jharkhand', stateName[350] = 'Karnataka', 
stateName[375] = 'Kerala', stateName[400] = 'Madhya Pradesh', stateName[425] = 'Maharashtra', stateName[450] = 'Manipur', stateName[475] = 'Meghalaya', stateName[500] = 'Mizoram', 
stateName[525] = 'Nagaland', stateName[550] = 'Odisha', stateName[575] = 'Punjab', stateName[600] = 'Rajasthan', stateName[625] = 'Sikkim', stateName[650] = 'Tamil Nadu', 
stateName[675] = 'Telangana', stateName[700] = 'Tripura', stateName[725] = 'Uttar Pradesh', stateName[750] = 'Uttarakhand', stateName[775] = 'West Bengal', 
stateName[800] = 'Andaman and Nicobar', stateName[825] = 'Chandigarh', stateName[850] = 'Daman and Diu & Dadar and Nagar Haveli', stateName[875] = 'Delhi', 
stateName[900] = 'Jammu and Kashmir', stateName[925] = 'Ladakh', stateName[950] = 'Lakshadweep', stateName[975] = 'Puducherry';

(stateName[middle] === undefined ) ? ((error.innerHTML = "*Invalid Mobile Number"),(submit.disabled = true), (statename.innerHTML = " ")):
((statename.innerHTML = stateName[middle]),(submit.disabled = false));

}

//---------------------------------------------------------------------Loop to check if any input field is empty-------------------------------------------------------------------------------------------------

setInterval(checkInput, 1);
function checkInput()
{
var nameF = document.getElementById("name");
var mobNum = document.getElementById("phoneNumber");
var email = document.getElementById("email");
let a;
(nameF.value.length == 0)?(submit.disabled = true):(mobNum.value.length == 0)?(submit.disabled = true):(email.value.length == 0)?(submit.disabled = true):(a = 0);
}
//--------------------------------------------------------------------------Takes action after submit button is pressed----------------------------------------------------------------------------------------------------------------
form.addEventListener('submit', (e) => {
var form = document.getElementById("form");
var otp = Math.floor(1000 + Math.random() * 9000);
document.getElementById("otp1").innerHTML ="OTP is" + " " + otp;
submit.disabled = true;
localStorage.setItem("firstName", word[0]);
localStorage.setItem("mobileNum", mobValue);
localStorage.setItem("otp", otp);
url = "validate.html";
window.open(url); 
e.preventDefault();

})
