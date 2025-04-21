let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let msg = document.querySelector(".msg");
let para = document.querySelector("p");
let newbtn = document.querySelector(".Newgame");
let playerO = true;
let wining=[[0,1,2],[0,3,6],[0,4,8],[1,4,6],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerText="O";
            playerO=false;
        }
        else{
            box.innerText="X"
            playerO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const drawMatch=()=>{
    para.innerText=`Match Draw! Start New game`;
    msg.classList.remove("hidden");
}
const showWinner = (winner)=>{
    para.innerText=`Congratulations! ${winner}`;
    msg.classList.remove("hidden");
    
};
const checkWinner=()=>{
    for(let pattern of wining){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes();
                showWinner(pos1);
                
            }
            else if(pos1 != pos2 || pos2 != pos3){
                disableBoxes();
                drawMatch(pos1);
            }
        }

    }
};

resetGame =()=>{
    playerO = true;
    enableBoxes();
    msg.classList.add("hidden");
}
NewGame =()=>{
    playerO = true;
    enableBoxes();
    msg.classList.add("hidden");
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",NewGame);
