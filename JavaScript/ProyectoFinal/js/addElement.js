
class carouselObj{
    idCar;
    title;
    text;
    image;
    constructor(idCar, title, text, image){
        this.idCar = idCar;
        this.title = title;
        this.text = text;
        this.image = image;
    };

}

class packObj{
    idPack;
    title;
    shortName;
    text;
    products=[];
    price;
    image;
    constructor(idPack, title,shortName, text,products,price,image){
        this.idPack = idPack;
        this.title = title;
        this.shortName = shortName;
        this.text = text;
        this.products = products;
        this.price = price;
        this.image = image;
    };

}

class productObj{
    idProduct;
    name;
    description;
    price;
    image;
    constructor(idProduct, name, description,price, image){
        this.idProduct = idProduct;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    };

}

/************************** */

let packProdList = [];
let auxProdList = [];

document.getElementById("savePrd").addEventListener("click",function(event){
    event.preventDefault();
});

/************************** */

const drawAddPage = (pageName)=>{

    console.log("==>ADDELEMENT::drawAddPage");
    console.log("* ADDELEMENT::drawAddPage.pageName=",pageName);

    switch(pageName){
        //case "addCar.html":
        //    break;
        case "addPack.html":
            getAddListProducts();
            //readAddPacks("../data/packs.json");
            break;
        //case "addPrd.html":
            //readAddProd("../data/catalog.json");
         //   break;
    }

}

/************************** */
const readAddCar = (filePath)=>{
        
    return new Promise( (resolve,reject) => {
        
        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            addCarousel(data.length,filePath);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Sin elementos de carousel.","Intente nuevamente.","warning");
        });        
    } );
        
}

function addCarousel(lenData,filePath){
    let carousel;
    let idCar;
    let title;
    let text;
    let image;
    let i;
    let listCarousel;

    i = lenData + 1;

    title = document.querySelector('#title').value;
    text = document.querySelector('#description').value;
    image = document.querySelector('#image').files[0];
    idCar = "carousel" + i;
    
    carousel  = new carouselObj(idCar,title,text,image);
    listCarousel = [...listCarousel,carousel];
    
    saveAddData(JSON.stringify(listCarousel),filePath);

    setTimeout(()=>{
        document.getElementById("addForm").reset();
    },1500);

}

/************************** */

const readAddPacks = (filePath)=>{
        
    return new Promise( (resolve,reject) => {
        
        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            addPacks(data,filePath);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Sin paquetes.","Intente nuevamente.","warning");
        });        
    } );
        
}

function addPacks(data,filePath){
    let pack;
    let idPack;
    let title;
    let shortName;
    let text;
    let products = [];
    let price;
    let image;
    let i;
    let listPacks;

    i = data.length + 1;

    console.log("=>ADDELEMENT::addPacks");
    
    title = document.querySelector('#title').value;
    shortName = document.querySelector('#shortName').value;
    text = document.querySelector('#description').value;
    products = setAddProductsList();
    price = document.querySelector('#price').value;
    image = document.querySelector('#image').files[0].name;
    idPack = "pack" + i;
    
    pack  = new packObj(idPack,title,shortName,text,products,price,image);
    listPacks = [...data,pack];

    console.log("=>ADDELEMENT::listPacks",listPacks);
    
    saveAddData(JSON.stringify(listPacks),filePath);

    setTimeout(()=>{
        document.getElementById("addForm").reset();
    },1500);

}

//obtiene lista de productos para generar checkbox de paquetes
const getAddListProducts = ()=>{
    console.log("=>ADDELEMENT::getAddListProducts");
    new Promise( (resolve,reject) => {
    fetch("../data/catalog.json")
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            drawAddProductsList(data);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Sin elementos de carousel.","Intente nuevamente.","warning");
        }); 
    });       
} ;

const drawAddProductsList = (data)=>{

    console.log("=>ADDELEMENT::drawAddProductsList");
    let i = 1;
    let container = document.querySelector('#checkBoxContainer');

    data.forEach((item)=>{
        let inputCheck = document.createElement('input');
        let labelCheck = document.createElement('label');
        let pCheck = document.createElement('label');

        inputCheck.type="checkbox";
        inputCheck.id = "checkProd" + i;
        inputCheck.name = "checkProd" + i;
        inputCheck.value = item.name;;
        
        labelCheck.setAttribute("for","checkProd" + i)
        labelCheck.textContent = item.name;

        pCheck.appendChild(inputCheck);
        pCheck.appendChild(labelCheck);
        pCheck.className = "columnCheck";

        container.appendChild(pCheck);

        auxProdList.push(inputCheck.id);

        i++;
    });
};
/////////////////////////

const setAddProductsList = ()=>{
    console.log("auxProdList",auxProdList);
    auxProdList.forEach((element)=>{
        
        let auxCheck = document.getElementById(element);
        if(auxCheck.checked){
            packProdList.push(auxCheck.value);
        }
    });
    console.log("packProdList = ",packProdList);

    return packProdList;
}


/************************** */

const readAddProd = (filePath)=>{
        
    return new Promise( (resolve,reject) => {
        
        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            addProducts(data.length,filePath);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Sin elementos de carousel.","Intente nuevamente.","warning");
        });        
    } );
        
}

function addProducts(lenData,filePath){
    let product;
    let idProduct;
    let name;
    let description;
    let price;
    let image;
    let i;
    let listProducts;

    i = lenData + 1;

    name = document.querySelector('#name').value;
    description = document.querySelector('#description').value;
    price = document.querySelector('#price').value;
    image = document.querySelector('#image').files[0].name;
    idProduct = "product" + i;
    
    product  = new productObj(idProduct,name,description,price,image);
    listProducts = [...listProducts,product];
    
    saveAddData(JSON.stringify(listProducts),filePath);

    setTimeout(()=>{
        document.getElementById("addForm").reset();
    },1500);

}

/************************** */

function saveAddData(data,filePath){
    let fs = require('fs');

    fs.writeFiel(filePath,data,function(err,result){
        if(err){
            Swal.fire({
                icon: 'error',
                title: 'No se pudo agregar el producto',
                showConfirmButton: true,
                timer: 1500
              });
        }
        else{
            showAddMsg("success","Producto agregado correctamente");
        }

    });
}

/************************** */

function showAddMsg(icono,mensaje){
    Swal.fire({
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
}

