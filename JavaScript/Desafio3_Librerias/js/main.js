const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })


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
    let i=0;

    if(lenListProd > 0){
        listProducts.forEach(element => {
            //htmlText = htmlText + "<div class='myCard' id='"+element.idProduct+"'><img src='./imgs/"+element.image+"' alt='"+element.name+"'><hr><div class='cardText'><h3>"+element.name+"</h3><p>"+element.description+"</p></div><div class='funciones'><a href='editProd.html?index="+i+"'><span>Editar</span><a><span onclick='deleate("+i+")'>Eliminar</span></div></div>"

            let divCard = document.createElement('div');
            divCard.className = "myCard";
            divCard.id = element.idProduct;

            let imgCard = document.createElement('img');
            imgCard.src = "./imgs/"+element.image;
            imgCard.alt = element.name;

            let hrCard  = document.createElement('hr');
            
            let divCardText = document.createElement('div');
            divCardText.className = "cardText";
            
            let titleCard  = document.createElement('h3');
            titleCard.textContent = element.name;

            let descCard  = document.createElement('p');
            descCard.textContent = element.description;

            let divFunctions = document.createElement('div');
            divFunctions.className = "funciones";

            let editLink = document.createElement('a');
            editLink.href = "editProd.html?index=" + i;
            
            let editSpan = document.createElement('span');
            editSpan.textContent = "Editar";
            editSpan.id = "editar";
            
            let delLink = document.createElement('a');

            let delSpan = document.createElement('span');
            delSpan.textContent = "Eliminar";
            delSpan.addEventListener("click",function (){
                console.log("en listener");
                console.log("i=",i);
                deleate(i);

            },false);

            divCardText.appendChild(titleCard);
            divCardText.appendChild(descCard);
        

            editLink.appendChild(editSpan);
            delLink.appendChild(delSpan);

            divFunctions.appendChild(editLink);
            divFunctions.appendChild(delLink);


            divCard.appendChild(imgCard);
            divCard.appendChild(hrCard);
            divCard.appendChild(divCardText);
            divCard.appendChild(divFunctions);

            container.appendChild(divCard);

            i++;
        });

        
    } 
    else{
        
          swalWithBootstrapButtons.fire({
            title: 'No hay productos definidos.',
            text: "¿Desea agregar productos?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                document.location.href = "addProd.html";
            } 
          });
    }

}

function deleate(index){

    console.log("en deleate");
    console.log("index=",index);

    container.innerHTML = "";

    listProducts.splice(index,1);
    localStorage.setItem('listProducts',JSON.stringify(listProducts));

    drawProducts();
};
