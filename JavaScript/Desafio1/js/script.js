const maxTapas = 5;
let resp;
let position;
let numTapas = 2;

function main(){  
    askNumTapas();
    drawGame();

    setTimeout(() => {
        startGame();
    }, 1000);
}

function  clearScreen(){
    let i;

    for(i = 1; i <= maxTapas ; i++)
    {
        document.getElementById("tapa"+i).style.display = "none";
        document.getElementById("ball"+i).style.display = "none";
    }

    document.getElementById("startGame").style.display = "inline";
    document.getElementById("restartGame").style.display = "none";
}

function askNumTapas(){
    do{
        numTapas  = prompt ("Ingrese numero de tapas: (min-2 / max-"+maxTapas+")");
        if(isNaN(numTapas)){
            alert("Debes ingresar un número. XD");
            numTapas = 0;
        }
    }while(numTapas<2 || numTapas>5);
}

function drawGame(){
    let i;

    document.getElementById("startGame").style.display = "none";

    do{
        position = parseInt(Math.random() * 10);    
    } while(position > numTapas || position <= 0);

    for(i = 1; i <= numTapas ; i++)
    {
        document.getElementById("tapa"+i).style.display = "inline";
    }

    document.getElementById("ball"+position).style.display = "inline";

}

function startGame(){
    let i;
    
    for(i = 1; i <= maxTapas ; i++)
    {
        document.getElementById("tapa"+i).style.background = "rgb(156, 61, 10)";
        document.getElementById("ball"+i).style.display = "none";
    }

    do{
        position = parseInt(Math.random() * 10);    
    } while(position > numTapas || position <= 0);

    //console.log("startGame::position ["+ position +"]");

}

function showResult(inNum){
    let i;

    for(i = 1; i <= maxTapas ; i++)
    {
        document.getElementById("tapa"+i).style.background = "radial-gradient(farthest-corner at 60% 70%,rgb(5, 5, 5),rgb(59, 59, 59),rgb(14, 13, 13),rgb(156, 61, 10),rgb(250, 183, 147))";
    
    }

    document.getElementById("ball"+position).style.display = "inline";
    
    if(inNum === position){
        alert("¡¡ GANASTE !! =D")
    }
    else {
        alert("¡¡ PERDISTE !! =(")
    }

    document.getElementById("restartGame").style.display = "inline";
}

