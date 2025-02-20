// Write a JavaScript function that checks if a number is even or odd. The user should enter a number, and the 
// result should be displayed as "Even" or "Odd"

function checkEvenOdd(){
    const number =document.getElementById("numberInput").value;


 if (number % 2===0){
    document.getElementById("result").innerText = "Even";
 }
 else{
    document.getElementById("result").innerText = "Odd";
 }
}
