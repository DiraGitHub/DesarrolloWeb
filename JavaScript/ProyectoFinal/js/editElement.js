let indexEdit;
let dataEdit;

/************************** */

document.getElementById("savePrd").addEventListener("click",function(event){
    event.preventDefault();
});

/************************** */

const drawEditPage = ()=>{

    console.log("==> EDITELEMENT::drawEditPage");

    let paramsEdit = window.location.href.split("?")[1];
    let typeEdit = paramsEdit.split("&")[0];
    typeEdit = typeEdit.split("=")[1];
    indexEdit = paramsEdit.split("&")[1];
    indexEdit = indexEdit.split("=")[1];

    console.log("paramsEdit =",paramsEdit);
    console.log("typeEdit =",typeEdit);
    console.log("indexEdit =",indexEdit);

    switch(typeEdit){
        case "carousel":
            readEditCar("../data/carousel.json",indexEdit);
            break;
        case "pack":
            getEditListProducts();
            readEditPack("../data/packs.json",indexEdit);
            break;
        case "product":
            readEditProd("../data/catalog.json",indexEdit);
            break;
    }

}

/******************************/
/******************************/
/******************************/

const readEditCar = (filePath,indexEdit)=>{
    console.log("==> EDITELEMENT::readEditCar");
    return new Promise( (resolve,reject) => {
        
    fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            displayCarInfo(data,indexEdit);
        })
        .catch ( (err) => {
            if(err){
                console.log("mostrando error", err);
            }
            alertMsg("Error en lectura de registro.","Intente nuevamente.","warning");
        });        
    } );
        
}

const displayCarInfo = (data,indexEdit) =>{

    console.log("==> EDITELEMENT::displayCarInfo");

    let itemCar = data[indexEdit];
    dataEdit = data;

    console.log(itemCar);

    let inputTitle = document.querySelector('#title');
    let inputDesc = document.querySelector('#description');
    //let inputImg = document.querySelector('#image');

    inputTitle.value = itemCar.title;
    inputDesc.value = itemCar.text;
    //inputImg.files[0].name = itemCar.image;
};

/******************************/

const readEditPack = (filePath,indexEdit)=>{
    console.log("==> EDITELEMENT::readEditPack");
    return new Promise( (resolve,reject) => {
        
        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            displayPackInfo(data,indexEdit);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Error en lectura de registro.","Intente nuevamente.","warning");
        });        
    } );
        
}

const displayPackInfo = (data,indexEdit) =>{
    let pack = data[indexEdit];

    dataEdit = data;

    console.log("==> EDITELEMENT::displayPackInfo");

    //console.log(pack);

    let inputTitle = document.querySelector('#title');
    let shortName = document.querySelector('#shortName');
    let inputPrice = document.querySelector('#price');
    let inputDesc = document.querySelector('#description');
    //let inputImg = document.querySelector('#image');
    drawCheckedBox(pack.products);

    inputTitle.value = pack.title;
    shortName.value = pack.shortName
    inputPrice.value = pack.price;
    inputDesc.value = pack.text;
    //inputImg.files[0].name = itemCar.image;

};

//obtiene lista de productos para generar checkbox de paquetes
const getEditListProducts = ()=>{
    console.log("=>ADDELEMENT::getEditListProducts");
    new Promise( (resolve,reject) => {
    fetch("../data/catalog.json")
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            drawEditProductsList(data);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Sin elementos de carousel.","Intente nuevamente.","warning");
        }); 
    });       
} ;

const drawEditProductsList = (data)=>{

    console.log("=>ADDELEMENT::drawEditProductsList");
    let i = 1;
    let container = document.querySelector('#checkBoxContainer');

    data.forEach((item)=>{

        //console.log("item=",item);

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

const drawCheckedBox = (productsList)=>{
   // console.table("==>validCheckbox.productsList",productsList);
    //console.table("* validCheckbox.auxProdList",auxProdList);
    let i;
    let j;
    let element;

    for(i=0;i<productsList.length;i++){
        for(j=0;j<auxProdList.length;j++){
            element = document.getElementById(auxProdList[j]);

            if(productsList[i]==element.value){
                element.checked = true;
            }
        }
    }
};

/******************************/

const readEditProd = (filePath,indexEdit)=>{
    console.log("==> EDITELEMENT::readEditProd");
    return new Promise( (resolve,reject) => {
        
        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            displayProductInfo(data,indexEdit);
        })
        .catch ( (err) => {
            if(err){
                console.log(err);
            }
            alertMsg("Error en lectura de registro.","Intente nuevamente.","warning");
        });        
    } );
        
}

const displayProductInfo = (data,indexEdit) =>{
    let product = data[indexEdit];

    dataEdit = data;

    console.log("==> EDITELEMENT::displayProductInfo");
    console.log(product);

    let inputName = document.querySelector('#name');
    let inputPrice = document.querySelector('#price');
    let inputCategory = document.querySelector('#category');
    let inputDesc = document.querySelector('#description');
    //let inputImg = document.querySelector('#image');

    inputName.value = product.name;
    inputPrice.value = product.precio;
    inputCategory.value = product.categoria;
    inputDesc.value = product.description;
    //inputImg.files[0].name = itemCar.image;
};

/******************************/

function editCar(){    
    let inputTitle = document.querySelector('#title').value;
    let inputDesc = document.querySelector('#description').value;
    let inputImg = document.querySelector('#image').files[0].name;
      
    dataEdit[indexEdit].title = inputTitle;
    dataEdit[indexEdit].text = inputDesc;
    dataEdit[indexEdit].image = inputImg;

    saveData(JSON.stringify(dataEdit),"../data/carousel.json");

    setTimeout(()=>{document.location = "carousel.html";},1500);
       
}

function editPack(){    
    console.log("==>editPack");

    let shortName = document.querySelector('#shortName').value;
    let inputTitle = document.querySelector('#title').value;
    let inputImage = document.querySelector('#image').files[0].name;
    let inputDesc = document.querySelector('#description').value;
    let inputProducts = setEditProductsList();
    let inputPrice = document.querySelector('#price').value;
    

    dataEdit[indexEdit].shortName = shortName;
    dataEdit[indexEdit].title = inputTitle;
    dataEdit[indexEdit].image = inputImage;
    dataEdit[indexEdit].text = inputDesc;
    dataEdit[indexEdit].products = inputProducts;
    dataEdit[indexEdit].price = inputPrice;

    saveEditData(JSON.stringify(dataEdit),"../data/packs.json");

    setTimeout(()=>{document.location = "packs.html";},1500);
}

const setEditProductsList = ()=>{
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


function editProd(){    

    let name;
    let description;
    let image;
    let price;
    let category;
    

    let inputName = document.querySelector('#name');
    let inputDesc = document.querySelector('#description');
    let inputImage = document.querySelector('#image').files[0].name;
    let inputPrice = document.querySelector('#price');
    let inputCategory = document.querySelector('#category');
    
    dataEdit[indexEdit].name = inputName;
    dataEdit[indexEdit].description = inputDesc;
    dataEdit[indexEdit].image = inputImage;
    dataEdit[indexEdit].precio = inputPrice;
    dataEdit[indexEdit].categoria = inputCategory;

    saveEditData(JSON.stringify(dataEdit),"../data/catalog.json");

    setTimeout(()=>{document.location = "packs.html";},1500);
    
}

/************************** */

function saveEditData(data,filePath){
    let fs = require('fs');

    fs.writeFiel(filePath,data,function(err,result){
        if(err){
            Swal.fire({
                icon: 'error',
                title: 'No se pudo guardar el producto',
                showConfirmButton: true,
                timer: 1500
              });
        }
        else{
            showEditMsg("success","Elemento actualizado correctamente");
        }

    });
}


function showEditMsg(icono,mensaje){
    Swal.fire({
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
}
