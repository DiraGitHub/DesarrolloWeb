
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


function addProducts(){
    let product;
    let idProduct;
    let name;
    let description;
    let image;
    let i;
    let listProducts;

    listProducts = localStorage.getItem('listProducts') || "";

    if(listProducts != ""){
        listProducts = JSON.parse(listProducts);
    }
    else{
        listProducts  = Array.from(listProducts);
    }

    i = listProducts.length+1;

    name = document.querySelector('#name').value;
    description = document.querySelector('#description').value;
    image = document.querySelector('#image').files[0].name;
    idProduct = "product" + i;
    
    product  = new productObj(idProduct,name,description,image);
    listProducts.push(product);
    
    localStorage.setItem('listProducts',JSON.stringify(listProducts));

}