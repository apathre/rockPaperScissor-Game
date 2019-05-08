
var userC, compC;
var userS=0, compS=0,round=0;

function rockChoice(){
  getWinner("r");
}

function paperChoice(){
  getWinner("p");
}

function scissorChoice(){
  getWinner("s");
}

function getWinner(userC){
  compC=computerChoice();
  let eval=userC+compC;
  
  switch(eval){
    case 'rs':
    case 'pr':
    case 'sp':
     userS++;
     round++;
     updateUserScore();
     break;
    case 'rr':
    case 'pp':
    case 'ss':
     round++;
     console.log('result:',"draw");
     updateDraw();
     break;
    default: 
    compS++;
    round++
    updateCompScore();
    break;
  }
}

function updateUserScore(){
  document.getElementById('userScore').innerHTML=userS;
  roundinfo();
  whoWins('User');
}

function updateCompScore(){
  document.getElementById('computerScore').innerHTML=compS;
  roundinfo();
  whoWins("Computer");
}

function updateDraw(){
  roundinfo();
  whoWins("Draw");
}

function roundinfo(){
document.getElementById('elementStatus').innerHTML="Round: "+round;
}

function whoWins(who){
  if(who!=='Draw'){
  document.getElementById('whoWins').innerHTML=`${who}`+" wins";
  }
  else{
    document.getElementById('whoWins').innerHTML=`${who}`;
  }
}

function computerChoice(){
  let compChoice=Math.floor(Math.random()*3);
  switch(compChoice){
    case 0: return("r");
            break;
    case 1: return("p");
            break;
    case 2: return("s");
            break;
  }
  return compChoice;
}


window.onload=function(){
document.getElementById('r').addEventListener("click",rockChoice);
document.getElementById('p').addEventListener("click",paperChoice);
document.getElementById('s').addEventListener("click",scissorChoice);
}
