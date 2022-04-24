const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });


let container = document.querySelector("#cardsContainer");
let listProducts
let lenListProd;

/**********************/

document.addEventListener("DOMContentLoaded",()=>{
   
    fetch('./data/productos.json')
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            drawProducts(data);
        })
        .catch ( () => {
            alertMsg("No hay productos definidos.","¿Desea agregar productos?","warning");
        });

});


/**********************/

function drawProducts(data){
    let i=0;

    data.forEach(element => {

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

        divCardText.appendChild(titleCard);
        divCardText.appendChild(descCard);

        divCard.appendChild(imgCard);
        divCard.appendChild(hrCard);
        divCard.appendChild(divCardText);

        container.appendChild(divCard);

        i++;
        
    });
}


function alertMsg(titulo,texto,icono){
    swalWithBootstrapButtons.fire({
        title : titulo,
        text : texto,
        icon : icono,
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
