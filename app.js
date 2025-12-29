let userscore = 0;
let computerscore = 0;


const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const lead = document.getElementById('lead');

const userscoreafter = document.getElementById('user-score');
const computerscoreafter = document.getElementById('Computer-score');


// computer choice
const gencomputerchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];


};


const drawGame = () =>{
 console.log("game was draw");   
 msg.innerHTML = "Game was draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwins,userchoice,computerchoice) =>{
    if(userwins){
        userscore++;
        userscoreafter.innerHTML = userscore;
        msg.innerHTML = `You win! Your ${userchoice} beats ${computerchoice} `;
        msg.style.backgroundColor = "green";
        
        //////////////////////////////////
        if(userscore >= computerscore){
            lead.innerHTML = "You are leading";
            lead.style.backgroundColor = "green";

        }
        else{
            lead.innerHTML = "Computer is leading";
            lead.style.backgroundColor = "red";
        }
       
    }
    else{
        computerscore++;
        computerscoreafter.innerHTML = computerscore;
        msg.innerHTML = `You lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
       
    }
};


const playgame = (userchoice) =>{
     console.log("user choice is =",userchoice);
     // computer choice
        const computerchoice = gencomputerchoice();
        console.log("computer choice is =",computerchoice);

        // check for draw
if(userchoice === computerchoice){
    drawGame();
}
else{
    let userwins = true;
    if(userchoice === "rock"){
        userwins = computerchoice === "paper" ? false : true;

    }else if(userchoice === "paper"){
        userwins = computerchoice === "scissors" ? false : true;

    }
    else{
        userwins = computerchoice === "rock" ? false : true;
    }
      showWinner(userwins, userchoice, computerchoice);
}

};




choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        const userchoice = choice.getAttribute('id');
         playgame(userchoice);
        });
    });