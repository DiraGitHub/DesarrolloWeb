
let i;
let arrProducts  = [];
let container = document.getElementById("cardsContainer");


class productObj{
    idProduct;
    name;
    description;
    image;
    constructor(idProduct, name, description, image){
        this.idProduct = idProduct;
        this.name = name;
        this.description = description;
        this.image = image;
    };

}

/**********************/

//main();

function main(){

    addProducts();
    
}

function addProducts(){
    i = arrProducts.length+1;

    alert("Iniciando carga de productos. Ingrese 'ESC' para salir.");

    while(1){
        let product;
        let idProduct;
        let name;
        let description;
        let image;

        alert("DATOS PRODUCTO "+i+".")

        name = prompt("Ingrese nombre producto:");
        if(name == "ESC" || name=="esc") break;

        description = prompt("Ingrese descripción corta del producto:");
        if(description == "ESC" || description=="esc") break;

        image = prompt("Ingrese nombre de imagen:");
        if(image == "ESC" || image=="esc") break;
        
        idProduct = "product" + i;

        product  = new productObj(idProduct,name,description,image);
        arrProducts.push(product);

        i++;
    }

    console.table(arrProducts);

    drawProducts();
}

function drawProducts(){

    console.log("==>DRAW");

    let htmlText = "";

    if(arrProducts.length > 0){
        for(i=0;i<arrProducts.length;i++){
            htmlText = htmlText + "<div class='myCard' id='"+arrProducts[i].idProduct+"'><img src='./imgs/"+arrProducts[i].image+".jpg' alt='"+arrProducts[i].name+"'><hr><div class='cardText'><h3>"+arrProducts[i].name+"</h3><p>"+arrProducts[i].description+"</p></div><div class='funciones'><span onclick='edit("+i+")'>Editar</span><span onclick='deleate("+i+")'>Eliminar</span></div></div>"
        }
        container.innerHTML = htmlText;

    }
    else{
        alert("NO HAY PRODUCTOS PARA PRESENTAR")
    }

}

function edit(index){
    let auxText;
    alert("Inicia captura de datos de actualización. Enter-Siguiente, ESC-Finalizar.");
    
    console.log("==>EDIT.index = "+index);

    auxText = prompt("Ingrese nuevo nombre:");
    if(auxText!="" && auxText!="ESC" && auxText!="esc")
        arrProducts[index].name = auxText;

    if(auxText!="ESC" && auxText!="esc" ){
        auxText = prompt("Ingrese nueva descripción:");
        if(auxText!="" && auxText!="ESC" && auxText!="esc"){
            arrProducts[index].description = auxText;
        }
    }

    if(auxText!="ESC" && auxText!="esc" ){
        auxText = prompt("Ingrese nuevo nombre de imagen:");
           if(auxText!="" && auxText!="ESC" && auxText!="esc"){
            arrProducts[index].image = auxText;
        }
    }

    console.log("arrProducts["+index+"] =" + arrProducts[index]);


    drawProducts();
};

function deleate(index){

    container.innerHTML = "";

    arrProducts.splice(index,1);
    
    console.table(arrProducts)

    drawProducts();
};
