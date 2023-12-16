const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");


calculateBtn.addEventListener("click",function(){
    const dob = new Date(dobInput.value);
    const ageInMs = Dte.now() - dob.getTime();
    const ageDate =new Date(ageInMs);
    const age = Math.abs(age.getUTCFullyear() - 1970);

    resultDiv.innerHTML = `Your Age is ${age} years.`;


})