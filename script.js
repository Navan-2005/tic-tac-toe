let boxes=document.querySelectorAll('.box');
let resetbutton=document.querySelector('#reset');
let newgamebutton=document.querySelector('#newbutton');
let messageecontainer=document.querySelector('.message-hide')
let message=document.querySelector('#message')

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let turnX=true;
  let count=0;
  function resetgame()
  {
    turnX=true;
    count=0;
    enableboxes();
    messageecontainer.classList.add("hide");
  }

  // const resetgame=()=>{
  //   turnX=true;
  //   count=0;
  //   enableboxes();
  //   messageecontainer.classList.add("hide");
  // };

  boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turnX)
        {
            box.innerText='X';
            turnX=false;
        }
        else{
            box.innerText='O';
            turnX=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    })
    
  });
  function gamedraw(){
    message.innerText=`Game was a draw`;
    messageecontainer.classList.remove("hide");
    disableboxes();

  }
  function disableboxes(){
    for(let box of boxes){
        box.disabled=true;
        
    }
  }
  function enableboxes(){
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText='';
    }
  }
  function showWinner(winner)
  {
    message.innerText=`congrajulations winner is ${winner}`;
    messageecontainer.classList.remove("hide");
    disableboxes();
  }
  function checkwinner()
  {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
          }
        }
      }
  }
  

  newgamebutton.addEventListener('click',()=>{
    resetgame();
  })
  resetbutton.addEventListener('click',()=>{resetgame()})