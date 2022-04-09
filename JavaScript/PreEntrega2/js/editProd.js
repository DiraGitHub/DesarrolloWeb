
let listProducts = localStorage.getItem('listProducts') ;
listProducts = JSON.parse(listProducts);

let index = window.location.href.split("=")[1];

let inputName = document.querySelector('#name');
let inputDesc = document.querySelector('#description');
let inputImage = document.querySelector('#image');


/************************** */

document.addEventListener("DOMContentLoaded",()=>{
    
    inputName.value = listProducts[index].name;
    inputDesc.value = listProducts[index].description;
    
});


function edit(){    
   
    let name;
    let description;
    let image;

    name = inputName.value;
    description = inputDesc.value;
    image = inputImage.files[0].name;
    
    listProducts[index].name = name;
    listProducts[index].description = description;
    listProducts[index].image = image;

    localStorage.setItem('listProducts',JSON.stringify(listProducts));

};
