function pin(){
document.getElementById("click").addEventListener("click",()=>{

    const math = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
    document.getElementById("show").value= math;
});
}
pin();


const display = document.getElementById("typed-numbers");
function appendToDisplay(input){
    display.value += input;    /** input parameter er  modde '5','7' emon digit gulo pathiye disi */
}

function appendPop(){
    const typedNumberField = document.getElementById('typed-numbers'); /** digit gula access korlam */
const digits = typedNumberField.value.split(''); /** digit gulake split kore alada alada kore fellam */
digits.pop();  
typedNumberField.value = digits.join(''); /**join kore dey splitted digit  gula */
}


document.getElementById("verify-pin").addEventListener("click",()=>{
const displayTypedPin =document.getElementById("typed-numbers").value;
const displayGeneratedPin =document.getElementById("show").value;

const PinsuccessMsg = document.getElementById("pin-success");
const PinfailMsg =document.getElementById("pin-failure");

if(displayTypedPin === displayGeneratedPin){
    PinsuccessMsg.style.display= 'block';
    PinfailMsg.style.display='none';
    // window.alert("✅ Pin Matched...");
    Swal.fire({
        title: "Good job!✅",
        icon: "success"
      });
}
else{
    PinfailMsg.style.display = 'block';
    PinsuccessMsg.style.display = 'none';
    Swal.fire({
        icon: "error",
        title: "Oops,Pin Didn't Match",
      });
}

});
