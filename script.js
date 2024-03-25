
let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const body=document.querySelector("body");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="draw try again";
    msg.style.backgroundColor="rgb(200, 48, 152)";

}
const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("u win");
        msg.innerText="congrats you win!";
        msg.style.backgroundColor="green";
       

    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose");
        msg.innerText=" you lost try again";
        msg.style.backgroundColor="red";

    }
};
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin = compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
           userWin = compChoice==="scissor"?false:true;

        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})

