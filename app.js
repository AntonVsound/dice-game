
var wallet = localStorage.getItem("wallet");
var num = rollDice();

document.getElementById("myForm").addEventListener("click", function(event){
  localStorage.clear();
  var amount = document.getElementById("deposit").value;
  localStorage.setItem("wallet", amount); 
  document.getElementById("wallet").innerHTML = amount;
  event.preventDefault()
});

document.getElementById("diceNum").innerHTML = "Dice number is : " + num;



function rollDice(){
  return  Math.floor(Math.random()*6 + 1)
}



function Wallet(num){
  if (num % 2 == 0){ 
      newWallet = parseFloat(wallet) + 1; 
      document.getElementById("wallet").innerHTML = newWallet;
      localStorage.setItem("wallet", newWallet); 
    } else {
      newWallet = parseFloat(wallet) - 0.5; 
      document.getElementById("wallet").innerHTML = newWallet;
      localStorage.setItem("wallet", newWallet);  
    }
  }


 Wallet(num);


  





