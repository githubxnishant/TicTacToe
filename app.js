function redirectToPlay() {
    window.location.href = "play.html";
};

function redirectToHome() {
    window.location.href = "index.html";
};

function redirectToRules() {
    window.location.href = "rules.html";
};

function redirectToDisclaimer() {
    window.location.href = " disclaimer.html";
};

const boxes = document.querySelectorAll(".box");
let turn = 0;
/* let xInitial = document.querySelector("#xPoints");
let oInitial = document.querySelector("#oPoints"); 
 */

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn%2 == 0) {
            box.innerHTML = "<b>X</b>";
        }
        else {
            box.innerHTML = "<b>O</b>";
        }
        turn++;
        box.disabled = true;
        checkWinner()
    });
})

let win = 1;


const showWinner = (winner) => {
    /* if (winner === x) {
        xInitial.innerText += win;
    }else{
        oInitial.innerText += win;
    }  */
    alert(`${winner} is winner`);
    window.location.href = "play.html" 
}

const checkWinner = () => {
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
};
