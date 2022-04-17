
const dashBoard = document.getElementById("gameTable");
const startButton =  document.querySelector('#start');
const restartButton = document.querySelector("#restart");
const stRows = document.getElementById("rows");
const stCols = document.getElementById("columns");
const alertP1 = document.getElementById("alerta1");
const alertP2 = document.getElementById("alerta2");
const divMsg  = document.getElementById("resultMsg");
const msgP = document.getElementById("msgP");



let inRows = parseInt(stRows.value);
let inCols = parseInt(stCols.value);

function checkRowsCols(){

    inRows = parseInt(stRows.value);
    inCols = parseInt(stCols.value);

    if(inRows >= 3 && inCols >= 3){
        startButton.disabled = false;

        alertP1.textContent = "";
        alertP2.textContent = "";
    }
    else{
        startButton.disabled = true;
        if(inRows < 3){
            alertP1.textContent = "INGRESA AL MENOS 3 FILAS";
        }
        else{
            alertP1.textContent = "";
        }


        if(inCols < 3){
            alertP2.textContent = "INGRESA AL MENOS 3 COLUMNAS";
        }
        else{
            alertP2.textContent = "";
        }

    }
}

function StartGame(){
    DrawGame(inRows,inCols);
}

function DrawGame(inRows,inCols){
    let i;
    let j;
    let inValue;
    let button;
    let div;
    
    stCols.disabled = true;
    stRows.disabled = true;
    restartButton.style.display = "inline";
    startButton.style.display = "none";

    for(i=0;i<inRows;i++){
        div = document.createElement("div");
        div.className = "row";
        dashBoard.appendChild(div);
        for(j=0;j<inCols;j++){
            button = document.createElement("button");
            inValue = Math.floor((Math.random()*11)/2);
            button.classList.add("gameCell");
            button.value = inValue;
            button.textContent = inValue;
            button.id = "btn" + (i+1) + "-" + (j+1);
            div.appendChild(button);           

        }
    }

    dashBoard.addEventListener("click",(event)=>{
        if(event.target.matches("button")){
            presionado(event.target);
        }
    });
 
}

const presionado = (item)=> {
    
    item.classList.add("press");
    
    if(item.value === "5"){
        item.classList.add("bomb");
    }
    if(item.value === "0"){
        item.classList.add("win");
    }

    if(item.value === "0" || item.value === "5"){
        ShowResult(item.value);
    }

    
}

function RestartGame(){
    stCols.value = "";
    stRows.value = "";
    stCols.disabled = false;
    stRows.disabled = false;

    dashBoard.innerHTML = "";
    dashBoard.disabled = false;
    restartButton.style.display = "none";
    startButton.style.display = "inline";
    startButton.disabled  = true;
    divMsg.style.display = "none";
    msgP.textContent = "";
}

const ShowResult = (value)=>{

    let msg;
    let cont = 0;

    divMsg.style.display = "inline";

    if(value === "0"){
        msg  = "FELICIDADES!! HAS GANADO!! =)";
        msgP.style.color = "rgb(32, 167, 32)";
    }
    
    if(value === "5"){
        msg = "LASTIMA HAS PERDIDO, INTENTA DE NUEVO =(";
        msgP.style.color = "rgb(185, 24, 24)";
    }

    msgP.textContent  = msg;

    dashBoard.innerHTML = "";

}