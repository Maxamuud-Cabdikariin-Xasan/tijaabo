// vote program Js code
function voteProgram() {
    baseAge = 18;
    unBorn = 0;
    let age = prompt("Enter your Age: ");
    document.getElementById("vote-program-title").style.margin="11px";
    isNaN(age)?alert("Enter a valid Number")
    :age > baseAge?document.getElementById("voteResult").innerHTML="You can vote"
    :age <=unBorn?document.getElementById("voteResult").innerHTML="This person is not born yet!!"
    :document.getElementById("voteResult").innerHTML="Sorry! you can't vote";

}

function numCheck() {
    number = prompt("Enter a Number: ");
    document.getElementById("num-checker-title").style.margin="11px";
    isNaN(number)?alert("Enter a valid Number")
    :number %2==0?document.getElementById("numResult").innerHTML="Even Number"
    :document.getElementById("numResult").innerHTML="Odd Number"

}

function inc$Statement() {
    cost$ = prompt("Enter Your Cost:");
    expense$ = prompt("Enter Your Expense:");
    document.getElementById("income-statement-title").style.margin="11px";
    isNaN(cost$)?alert("Enter a valid Number")
    :isNaN(expense$)?alert("Enter a valid Number")
    :cost$ > expense$ ?document.getElementById("profitResult").innerHTML="You Profit"
    :cost$==expense$ ?document.getElementById("profitResult").innerHTML="Ther is no profit or loss"
    :document.getElementById("profitResult").innerHTML="Your Loss"
}