let i;
let inNum;
let stName;
let stType;
let inValid = 0;

do{
    inNum = prompt("Ingrese numero de visitantes:");
    if(isNaN(inNum)){
        alert("Debe ingresar un valor numérico.");
    }
    else
        break;
} while(1);


document.write("<table><tr><th>ID</th><th>NOMBRE</th><th>TIPO</th></tr>");

for(i = 1; i <= inNum ; i++){
    stName = prompt("Ingrese nombre visitante " + i + ":");
    stName = stName.toLocaleUpperCase();

    do{
        stType = prompt("Ingrese tipo visitante " + i + ": (G-General / P-Preferente / V-VIP)");
        console.log("stType1 ["+stType+"]");
        stType = stType.toLocaleUpperCase();
        console.log("stType2 ["+stType+"]");
        if(stType === "G" || stType === "GENERAL") {
            inValid = 1;
            stType  = "GENERAL";
        }
        else if(stType === "P" || stType === "PREFERENTE") {
            inValid = 1;
            stType  = "PREFERENTE";
        }
        else if(stType === "V" || stType === "VIP") {
            inValid = 1;
            stType  = "VIP";
        }
        else{
            alert("Debe ingresar un tipo de visitante válido");
        }
            
    } while(inValid != 1);

    document.write("<tr><td>"+i+"</td><td>"+stName+"</td><td>"+stType+"</td></tr>");
}

document.write("</table>");
