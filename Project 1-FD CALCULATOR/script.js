// console.log("Hello");
const btn = document.querySelector('#calculateBtn');
   btn.addEventListener("click",function(){
    const principle =parseFloat(document.querySelector('#principle').value);
    const interest =parseFloat(document.querySelector('#interestRate').value);
    const tenure =parseFloat(document.querySelector('#tenure').value);
    const result = document.querySelector('#result');
    const res = principle+(principle*interest*tenure)/100;
        console.log(result.innerText)
        console.log(document.querySelector('#principle').value)
       result.innerHTML="Maturity Amount : " + res.toFixed(3);
   })