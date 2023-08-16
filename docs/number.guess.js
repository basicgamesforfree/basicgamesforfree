let computer_number;

document.getElementById("confirm").disabled = true;

document.getElementById("text_box").addEventListener("input", function () {
    let input = this.value;
    let isValid = /^[0-9]{1,2}$/.test(input);

    document.getElementById("confirm").disabled = !isValid;
});


document.getElementById("confirm").onclick = function(){
    let user_number = document.getElementById("text_box").value;
    user_number = Number(user_number)
    computer_number = Math.floor(Math.random() * 100) 
    computer_number = Number(computer_number)
    if(user_number == computer_number){
        document.getElementById("result").innerHTML = computer_number;
        document.getElementById("conclusion").innerHTML = "You win! The correct number was:"
    }
    else{
        document.getElementById("result").innerHTML = computer_number;
        document.getElementById("conclusion").innerHTML = "You lose! The correct number was:"
    }
}
