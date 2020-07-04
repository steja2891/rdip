/*-------TASK 1-----------*
 *                        *
 *                        *  
 -----Basic Calculator----*/
function Calculator(){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var optr = document.getElementById("optr").value;
  var error_message = document.getElementById("error_message");
  var resultDiv = document.getElementById("result");
  var text;
  error_message.innerHTML="";
  resultDiv.innerHTML="";
  if(optr=='|' || optr=='^'){
    if(num1==""){
      error_message.innerHTML="Please Select Number to perform operation";
      return;
    }
  }
  else{
    if(num1=="" || num2==""){
      error_message.innerHTML="Please select Numbers to perform operation";
      return;
    }
  }
  num1 = Number(num1);
  num2 = Number(num2);
  switch(optr){
    case '+': 
    {
      result = add(num1,num2);
      break;
    }
    case '-': 
    {
      result = subtract(num1,num2);
      break;
    }
    case '*': 
    {
      result = multiply(num1,num2);
      break;
    }
    case '/': 
    {
      result = divide(num1,num2);
      break;
    }
    case '%': 
    {
      result = percent(num1,num2);
      break;
    }
    case '|': 
    {
      result = absolute(num1);
      break;
    }
    case '^': 
    {
      result = squareroot(num1);
      break;
    }
  }
  resultDiv.innerHTML = "Result : "+result;

}

function showorhide(value){
  if(value=='|' || value=='^'){
    document.getElementById("second").style.display="none";
  }
  else{
    document.getElementById("second").style.display="";
  }
}

function add(num1,num2){
  return num1+num2;
}
function subtract(num1,num2){
  return num1-num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function divide(num1,num2){
  return num1/num2;
}
function percent(num1,num2){
  return (num1/100)*num2;
}
function absolute(num1){
  return Math.abs(num1);
}
function squareroot(num1){
  result = Math.sqrt(num1)
  if(Number.isInteger(result))
    return result;
  else
    return result.toFixed(3);
}
//===================================================================================================================================

/*-------TASK 2-----------*
 *                        *
 *                        *  
 *-----Form Validation----*/

function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  var text;
  error_message.style.padding = "10px";

  if(name.length == 0){
    text = "Please fill out Name field";
    error_message.innerHTML = text;
    return false;
  }
   if(!isNaN(name[0])){
    text = "Name should not start with number";
    error_message.innerHTML = text;
    return false;
  }
   if(!isNaN(name)){
    text = "Only Characters are allowed";
    error_message.innerHTML = text;
    return false;
  }
  if(name.length <=2){
    text = "Enter characters more than 2";
    error_message.innerHTML = text;
    return false;
  }
  if(email.length == 0){
    text = "Please fill out Email field";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6 || (/(\.\w{2,3})+$/.test(email) == false)){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(phone.length == 0){
    text = "Please fill out Phone Number field";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
//==================================================================================================================================

/*--------TASK 3-----------*
 *                         *
 *                         *  
 *-----String Functions----*/

function submitPal(){
    var user = document.getElementById("string").value;
    var view = document.getElementById("result");
    var result;
    if(user.length==0){
        alert('Please Enter Input');
        return;
    }
    if(user.match(/\s/)){
      alert('Enter string without spaces');
      return;
    }
    else{
      result = checkPalindrome(user);
    }
    if(result){
      view.innerHTML = user+" is a PALINDROME";
    }
    else{
      view.innerHTML = user+" is not a PALINDROME";
    }
  }

  function checkPalindrome(inputString){
    var len = inputString.length;
    var mid = Math.floor(len/2);
    inputString = inputString.toLowerCase();
    for ( var i = 0; i < mid; i++ ) {
        if (inputString[i] !== inputString[len-1-i]) {
            return false;
        }
    }
    return true;
  }  

  function submitAna(){
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    var view = document.getElementById("result2");
    var result;
    if(string1.length==0 || string2.length==0){
        alert('Please Enter Input');
        return;
    }
    else{
      result = checkAnagram(string1,string2);
    }
    if(result){
      view.innerHTML = string1+", "+string2+" are ANAGRAMS";
    }
    else{
      view.innerHTML = string1+", "+string2+" are not ANAGRAMS";
    }
  }

  function checkAnagram(string1,string2){
    string1=string1.toLowerCase().replace(/\s/g, '');
    string2=string2.toLowerCase().replace(/\s/g, '');
    if(string1.len!=string2.len){
      return false;
    }
    string1=string1.split('').sort().join('');
    string2=string2.split('').sort().join('');
    if(string1==string2){
      return true;
    }
  }

//====================================================================================================================================

/*-----------TASK 4-------------*
 *                              *
 *                              *  
 *-----Who Will Survive Game----*/


function survivor(){
  var array = [0,1,2];
  var view = document.getElementById("result");
  var result;
  var randomNum1 = array[Math.floor(Math.random() * array.length)];
  var randomNum2 = array[Math.floor(Math.random() * array.length)];
  document.getElementById("random1").value = randomNum1;
  document.getElementById("random2").value = randomNum2;
  if(randomNum1==0){
    if(randomNum2==0){
      result="TIE";
    }
    else if(randomNum2==1){
      result="Human Survives";
    }
    else{
      result="Nuclear Bomb Survives";
    }
  }
  else if(randomNum1==1){
    if(randomNum2==0){
      result="Human Survives";
    }
    else if(randomNum2==1){
      result="TIE";
    }
    else{
      result="Cockroach Survives";
    }
  }
  else{
    if(randomNum2==0){
      result="Nuclear Bomb Survives";
    }
    else if(randomNum2==1){
      result="Cockroach Survives";
    }
    else{
      result="TIE";
    }
  }
  view.innerHTML=result;
}
//==================================================================================================================================