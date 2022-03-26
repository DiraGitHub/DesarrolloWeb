let inPares = [];
let inImpares = [];
let button = document.getElementById("restart");

let ParImpar = (n) => {
    let modul;

    modul = n % 2;
    if(modul == 0)
        inPares.push(n);
    else
        inImpares.push(n);
}


main();


function main(){
    let auxNum;
    let cont = 0;

    inPares = [];
    inImpares = [];
    button.style.display = "none";

    alert("Introduce al menos 5 números e ingresa 0 para terminar.");
    while(1){
        auxNum  = parseInt(prompt("Numero [" + (cont+1) + "] = "));
        if(isNaN(auxNum)){
            alert("Introduce un numero.");
            continue;
        }

        if(auxNum === 0 ){
            if(cont >= 5){
                 break;
            }
            else{
                alert("Introduce numeros distintos de 0.");
            }
        }
        else{
            ParImpar(auxNum);
            cont++;
        }
    }

    drawTables();

    
}

function drawTables(){
    let i;
    let tablesContainer;
    let htmlText = "";
    
    inPares.sort((a,b)=>a-b);
    inImpares.sort((a,b)=>a-b);

    tablesContainer = document.getElementById("tablesContainer");

    if(inPares.length > 0 ){
        htmlText = "<table><tr><th>NUMERO PAR</th><tr>";    
        for(i = 0 ; i < inPares.length ; i++){
            htmlText = htmlText + "<tr><td>"+inPares[i]+"</td><tr>"
        }
        htmlText = htmlText + "</table>";
    }

    if(inImpares.length > 0 ){
        htmlText = htmlText + "<table><tr><th>NUMERO IMPAR</th><tr>";
        for(i = 0 ; i < inImpares.length ; i++){
            htmlText = htmlText + "<tr><td>"+inImpares[i]+"</td><tr>";
        }
    
        htmlText = htmlText + "</table>";
    }
    
    console.log(htmlText);
    tablesContainer.innerHTML = htmlText;

    button.style.display = "inline";
    button.onclick = ()=>{
            tablesContainer.innerHTML = "";
            main();
        }
    

}