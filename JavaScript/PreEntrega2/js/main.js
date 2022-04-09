
let container = document.querySelector("#cardsContainer");
let listProducts = localStorage.getItem('listProducts') || "";

if(listProducts != ""){
    listProducts = JSON.parse(listProducts);
}
else{
    listProducts  = Array.from(listProducts);
}

let lenListProd = listProducts.length;

/**********************/


document.addEventListener("DOMContentLoaded",()=>{
    drawProducts();
});

function drawProducts(){
    let htmlText = "";
    let i=0;

    if(lenListProd > 0){
        listProducts.forEach(element => {
            htmlText = htmlText + "<div class='myCard' id='"+element.idProduct+"'><img src='./imgs/"+element.image+"' alt='"+element.name+"'><hr><div class='cardText'><h3>"+element.name+"</h3><p>"+element.description+"</p></div><div class='funciones'><a href='editProd.html?index="+i+"'><span>Editar</span><a><span onclick='deleate("+i+")'>Eliminar</span></div></div>"

            i++;
        });

        container.innerHTML = htmlText;

    }    

}

function deleate(index){

    container.innerHTML = "";

    listProducts.splice(index,1);
    localStorage.setItem('listProducts',JSON.stringify(listProducts));

    drawProducts();
};
