//'use strict';

//const { info } = require('console');

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

/**********************/

const drawPage = (pageName,sessionStatus,userType,userID)=>{

    console.log("==>BUILDPAGE::DrawPage");

    /*sessionStatus = "1";
    userType = "admin";
    userID = "1";*/

    if(sessionStatus == "1"){
        
        document.querySelector('#navLogout').style.display = "inline";
    
        if(userType == "client"){

            document.querySelector('#navLogin').style.display = "none";
            document.querySelector('#navPerfil').style.display = "inline";

            document.getElementById("fastSignUp").addEventListener("click",function(event){
                event.preventDefault();
            });

            switch(pageName){
                case "index.html":
                    drawIndex();
                    break;
                case "productos.html":
                    drawProducts(1);
                    break;
                case "registro.html":
                    document.getElementById("login").addEventListener("click",function(event){
                        event.preventDefault();
                    });
        
                    document.getElementById("signUp").addEventListener("click",function(event){
                        event.preventDefault();
                    });
                    break;
                default:
                    break;
            }
        }
        else{   //un admin siempre inicia en main
            switch(pageName){
                case "carousel.html":
                    drawCarrusel(2);
                    break;
                case "packs.html":
                    drawPacks(2);
                    break;
                case "catalog.html":
                    drawProducts(2);
                    break;
                case "main.html":
                    drawMain(userID);
                    break;
                case "addCar.html":
                case "addPack.html":
                case "addProd.html":
                    drawAddPage(pageName);
                    break;
                case "editCar.html":
                case "editPack.html":
                case "editProd.html":
                    drawEditPage(pageName);
                    break;
                default:                    
                    break;
            }
            
            
        }
    }
    else{
        
        document.getElementById("fastSignUp").addEventListener("click",function(event){
            event.preventDefault();
        });
        switch(pageName){
            case "index.html":
                drawIndex();
                break;
            case "productos.html":
                drawProducts(1);
                break;
            case "registro.html":
                document.getElementById("logInButt").addEventListener("click",function(event){
                    event.preventDefault();
                });
    
                document.getElementById("signUpButt").addEventListener("click",function(event){
                    event.preventDefault();
                });
                break;
            default:
                break;
        }
    }

};

/**********************/
/**********************/
/**********************/
const drawIndex = ()=>{
    drawCarrusel(1);
    drawPacks(1);
};

/**********************/
/**********************/
/**********************/

const drawMain = (userID)=>{
    console.log("==>BUILDPAGE::drawMain");

    fetch('../data/users.json')
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            showUserData(data,userID);
        })
        .catch ( () => {
            showMsg("error", "No se encontraron usuarios.")
        });

};

const showUserData = (data,userID) =>{
    let userName = "";
    let userMail = "";
    let userPhone = "";
    let userJob = "";
    let userType = "";

    console.log("==>BUILDPAGE::showUserData");

    data.forEach(element => {
        if( userID == element.idUsr){
            userName = element.nombre;
            userMail = element.email;
            userPhone = element.telefono;
            userJob = element.ocupacion;
            userType = element.tipo;
        }
    });

    let title = document.querySelector('#title');
    title.textContent = "BIENVENIDO " + userName;

    let container = document.querySelector('#mainContainer');

    let divGeneral = document.createElement('div');

    let titleGeneral = document.createElement('h3');
    titleGeneral.textContent  = "Datos Generales";

    let mailGeneral = document.createElement('p');
    mailGeneral.textContent  = "Email: " + userMail;

    let telGeneral = document.createElement('p');
    telGeneral.textContent  = "Telefono: " + userPhone;

    let jobGeneral = document.createElement('p');
    jobGeneral.textContent  = "Profesión: " + userJob;

    
    divGeneral.appendChild(titleGeneral);
    divGeneral.appendChild(mailGeneral);
    divGeneral.appendChild(telGeneral);
    divGeneral.appendChild(jobGeneral);

    container.appendChild(divGeneral);

    /*************/
    let divSeguridad = document.createElement('div');

    let titleSeguridad = document.createElement('h3');
    titleSeguridad.textContent  = "Seguridad";

    let typeSeguridad = document.createElement('p');
    typeSeguridad.textContent  = "Tipo usuario: " + userType;

    let pwSeguridad = document.createElement('p');
    let linkChangePW = document.createElement('a');
    linkChangePW.textContent  = "Cambio de contraseña";
    linkChangePW.href = "changePW.html";
    linkChangePW.style.textDecoration = "none";

    pwSeguridad.appendChild(linkChangePW);

    divSeguridad.appendChild(titleSeguridad);
    divSeguridad.appendChild(typeSeguridad);
    divSeguridad.appendChild(pwSeguridad);


    container.appendChild(divSeguridad);

};

/**********************/
/**********************/
/**********************/

const drawCarrusel = (type)=>{

    console.log("==>BUILDPAGE::drawCarrusel");
    console.log("*BUILDPAGE::drawCarrusel.type [",type,"]");

    return new Promise( (resolve,reject) => {
        let filePath = "./data/carousel.json";

        if(type == 2){
            filePath = "../data/carousel.json";
        }

        fetch(filePath)
        .then( (res) => {
            console.log("then 1");
            return res.json();
        })
        .then((data)=>{
            console.log("then 2");
            showCarrusel(data,type);
        })
        .catch ( (err) => {
            console.log("catch");
            console.log(err);
            if(type == 1){
                alertMsg("Segimos trabajando en mejorar","Lamentamos las molestias","warning");
            }
            else{
                alertMsg("No hay elementos definidos.","¿Desea agregar elementos?","warning");
            }
        });
    } );
};


function showCarrusel(data,type){

    let i = 0;
    let container;

    console.log("==>BUILDPAGE::showCarrusel");
    console.log("* BUILDPAGE::showCarrusel.type [",type,"]");
    console.log("* BUILDPAGE::showCarrusel.data [",data,"]");

    data.forEach(element => {

        if(type == 1){
            container = document.querySelector("#carouselContainer");
            
            let itemCar = document.createElement('div');
            itemCar.className = "carousel-item";
            if(element.idCar == "carousel1"){
                itemCar.classList.add("active");
            }
            itemCar.setAttribute("data-bs-interval","10000");

            let imgCar = document.createElement('img');
            imgCar.src = "./imgs/"+element.image;
            imgCar.alt = element.title;
            imgCar.classList.add("d-block");
            imgCar.classList.add("w-100");

            let captionCar = document.createElement('div');
            captionCar.classList.add("carousel-caption");
            captionCar.classList.add("d-none");
            captionCar.classList.add("d-md-block");

            let titleCar = document.createElement('h5');
            titleCar.textContent = element.title;

            let textCar = document.createElement('p');
            textCar.textContent = element.text;

            captionCar.appendChild(titleCar);
            captionCar.appendChild(textCar);

            itemCar.appendChild(imgCar);
            itemCar.appendChild(captionCar);

            container.appendChild(itemCar);
        }
        else{

            container = document.querySelector("#elementsContainer");

            let divCard = document.createElement('div');
            divCard.className = "myCard";
            divCard.id = element.idCar;
            divCard.classList.add("adminView");

            let imgCard = document.createElement('img');
            imgCard.src = "../imgs/"+element.image;
            imgCard.alt = element.name;
            imgCard.className = "imgCard";

            let divCardText = document.createElement('div');
            divCardText.className = "textCard";
            
            let divCardInfo = document.createElement('div');
            divCardText.className = "infoCard";

            let titleCard  = document.createElement('h3');
            titleCard.textContent = element.title;

            let descCard  = document.createElement('p');
            descCard.textContent = element.text;

            let divFunctions = document.createElement('div');
            divFunctions.className = "funciones";
            
            let editLink = document.createElement('a');
            editLink.href = "editCar.html?type=carousel&index=" + i;
            
            let editSpan = document.createElement('span');
            editSpan.textContent = "Editar";
            editSpan.id = "editar";
            
            let delLink = document.createElement('a');
            let delSpan = document.createElement('span');
            delSpan.textContent = "Eliminar";
            const index = i;
            delSpan.addEventListener("click",function (){
                console.log("en listener");
                console.log("index=",index);
                delCarrusel(index);
            },false);
            editLink.appendChild(editSpan);
            delLink.appendChild(delSpan);
            divFunctions.appendChild(editLink);
            divFunctions.appendChild(delLink);
        
            divFunctions.classList.add("buttonCard");

            divCardInfo.appendChild(titleCard);
            divCardInfo.appendChild(descCard);

            divCardText.appendChild(divCardInfo);
            divCardText.appendChild(divFunctions); 

            divCard.appendChild(imgCard);
            divCard.appendChild(divCardText);

            container.appendChild(divCard);

            i++;
        
        }
    });
}


function delCarrusel(index){

    console.log("==> BUILDPAGE::delCarrusel");

    const fs = require('fs');
    let filePath = "../data/carousel.json";
    let listProducts;

    
    console.log("* BUILDPAGE::delCarrusel. index=",index);

    container.innerHTML = "";

    fs.readFile(filePath,(err,data)=>{
        if(err){
            alertMsg("Falla en lectura de datos.","Intente nuevamente.","warning");
            return console.error(err);
        }
        
        listProducts = data.toSting();
        listProducts = JSON.parse(listProducts);
        listProducts.splice(index,1);
        fs.writeFile(filePath,JSON.stringify(listProducts),(err)=>{
            if(err){
                alertMsg("Falla al eliminar el registro.","Intente nuevamente.","warning");
            }
        });

        drawCarrusel(2);
    });

};


/**********************/
/**********************/
/**********************/


const drawPacks = (type)=>{

    console.log("==>BUILDPAGE::drawPacks");
    console.log("*BUILDPAGE::drawPacks.type [",type,"]");

    return new Promise( (resolve,reject) => {
        let filePath = "./data/packs.json";

        if(type == 2){
            filePath = "../data/packs.json";
        }

        fetch(filePath)
        .then( (res) => {
            console.log("then 1");
            return res.json();
        })
        .then((data)=>{
            console.log("then 2");
            showPacks(data,type);
        })
        .catch ( (err) => {
            console.log("catch");
            console.log(err);
            if(type == 1){
                alertMsg("Segimos trabajando en mejorar","Lamentamos las molestias","warning");
            }
            else{
                alertMsg("No hay elementos definidos.","¿Desea agregar elementos?","warning");
            }
        });
    } );
};


function showPacks(data,type){

    let i = 0;

    console.log("==>BUILDPAGE::showPacks");
    console.log("* BUILDPAGE::showPacks.type [",type,"]");
    console.log("* BUILDPAGE::showPacks.data [",data,"]");

    data.forEach(element => {

        if(type == 1){
            let containerMenu = document.querySelector("#nav-tab");
            let containerInfo = document.querySelector("#containerInfo");
            
            let buttonTab = document.createElement('button');
            buttonTab.classList.add("nav-link");
            if(element.idPack == "pack1"){
                buttonTab.classList.add("active");
                buttonTab.setAttribute("aria-selected","true");
            }
            else{
                buttonTab.setAttribute("aria-selected","false");
            }
            buttonTab.id = element.idPack + "-tab";
            buttonTab.setAttribute("data-bs-toggle","tab");
            buttonTab.setAttribute("data-bs-target","#"+element.idPack);
            buttonTab.type = "button";
            buttonTab.setAttribute("role","tab");
            buttonTab.setAttribute("aria-controls",element.idPack);
            buttonTab.textContent = element.shortName;

            containerMenu.appendChild(buttonTab);

            let myCard = document.createElement('div');
            myCard.classList.add("myCard");
            myCard.classList.add("tab-pane");
            if(element.idPack == "pack1"){
                myCard.classList.add("show");
                myCard.classList.add("active");
            }
            myCard.id = element.idPack;
            
            let imgCard = document.createElement('img');
            imgCard.src = "./imgs/"+element.image;
            imgCard.alt = element.title;
            imgCard.classList.add("imgCard");
            
            let textCard = document.createElement('div');
            textCard.classList.add("textCard");

            let infoCard = document.createElement('div');
            infoCard.classList.add("infoCard");

            let titleCard = document.createElement('h3');
            titleCard.textContent = element.title;

            let descCard = document.createElement('p');
            descCard.textContent = element.text;

            let ulCard = document.createElement('ul');
            let listCard = element.products;
            listCard.forEach((value)=>{
                let liCard = document.createElement('li');
                liCard.textContent = value;
                ulCard.appendChild(liCard);
            });

            let buttonCardDiv = document.createElement('div');
            buttonCardDiv.className = "buttonCard";

            let buttonCard = document.createElement('button');
            buttonCard.className = "button";
            buttonCard.textContent = "COMPRAR   " + element.price;

            buttonCardDiv.appendChild(buttonCard);

            infoCard.appendChild(titleCard);
            infoCard.appendChild(descCard);
            infoCard.appendChild(ulCard);

            textCard.appendChild(infoCard);
            textCard.appendChild(buttonCardDiv);

            myCard.appendChild(imgCard);
            myCard.appendChild(textCard);

            containerInfo.appendChild(myCard);
            
        }
        else{

            let container = document.querySelector("#packsContainer");

            let divCard = document.createElement('div');
            divCard.className = "myCard";
            divCard.id = element.idCarr;
            divCard.classList.add("adminView");

            let imgCard = document.createElement('img');
            imgCard.src = "../imgs/"+element.image;
            imgCard.alt = element.name;
            imgCard.className = "imgCard";

            let divCardText = document.createElement('div');
            divCardText.className = "textCard";
            
            let divCardInfo = document.createElement('div');
            divCardText.className = "infoCard";

            let titleCard  = document.createElement('h3');
            titleCard.textContent = element.title;

            let descCard  = document.createElement('p');
            descCard.textContent = element.text;

            let ulCard = document.createElement('ul');
            let listCard = element.products;
            listCard.forEach((value)=>{
                let liCard = document.createElement('li');
                liCard.textContent = value;
                ulCard.appendChild(liCard);
            });
            ulCard.className = "adminUL";

            let divPrice = document.createElement('div');
            divPrice.textContent = element.price;

            let divFunctions = document.createElement('div');
            divFunctions.className = "funciones";
            
            let editLink = document.createElement('a');
            editLink.href = "editPack.html?type=pack&index=" + i;
            
            let editSpan = document.createElement('span');
            editSpan.textContent = "Editar";
            editSpan.id = "editar";
            
            let delLink = document.createElement('a');
            let delSpan = document.createElement('span');
            delSpan.textContent = "Eliminar";
            const index = i;
            delSpan.addEventListener("click",function (){
                console.log("en listener");
                console.log("index=",index);
                delPacks(index);
            },false);
            editLink.appendChild(editSpan);
            delLink.appendChild(delSpan);
            divFunctions.appendChild(editLink);
            divFunctions.appendChild(delLink);
        
            divFunctions.classList.add("buttonCard");

            divCardInfo.appendChild(titleCard);
            divCardInfo.appendChild(descCard);
            divCardInfo.appendChild(ulCard);
            divCardInfo.appendChild(divPrice);

            divCardText.appendChild(divCardInfo);
            divCardText.appendChild(divFunctions); 

            divCard.appendChild(imgCard);
            divCard.appendChild(divCardText);

            container.appendChild(divCard);

            i++;
        
        }
    });
}


function delPacks(index){

    console.log("==> BUILDPAGE::delPacks");

    const fs = require('fs');
    let filePath = "../data/packs.json";
    let listProducts;

    
    console.log("* BUILDPAGE::delPacks. index=",index);

    container.innerHTML = "";

    fs.readFile(filePath,(err,data)=>{
        if(err){
            alertMsg("Falla en lectura de datos.","Intente nuevamente.","warning");
            return console.error(err);
        }
        
        listProducts = data.toSting();
        listProducts = JSON.parse(listProducts);
        listProducts.splice(index,1);
        fs.writeFile(filePath,JSON.stringify(listProducts),(err)=>{
            if(err){
                alertMsg("Falla al eliminar el registro.","Intente nuevamente.","warning");
            }
        });

        drawPacks(2);
    });
};



/**********************/
/**********************/
/**********************/


const drawProducts = (type)=>{

    console.log("==>BUILDPAGE::drawProducts");
    console.log("*BUILDPAGE::drawProducts.type [",type,"]");

    return new Promise( (resolve,reject) => {
        let filePath = "./data/catalog.json";

        if(type==2){
            filePath = "../data/catalog.json";
        }

        fetch(filePath)
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            showProducts(data,type);
        })
        .catch ( () => {
            if(type==1){
                alertMsg("Segimos trabajando en mejorar","Lamentamos las molestias","warning");
            }
            else{
                alertMsg("No hay productos definidos.","¿Desea agregar productos?","warning");
            }
        });        
    } );
};


function showProducts(data,type){
    let i=0;
    let container;

    console.log("==>BUILDPAGE::showProducts");

    data.forEach(element => {

        switch(element.categoria){
            case "vitaminas":
                container = document.querySelector("#vitaminas");
                break;
            case "intestino":
                container = document.querySelector("#intestino");
                break;
            case "cabello":
                container = document.querySelector("#cabello");
                break;
            case "piel":
                container = document.querySelector("#piel");
                break;
            default:
                container = document.querySelector("#suplementos");
                break;
        };

        let divCard = document.createElement('div');
        divCard.className = "myCard";
        divCard.id = element.idProduct;
        divCard.classList.add("adminView");

        let imgCard = document.createElement('img');
        if(type == 1){
            imgCard.src = "./imgs/"+element.image;
        }
        else{
            imgCard.src = "../imgs/"+element.image;
        }
        
        imgCard.alt = element.name;
        imgCard.className = "imgCard";

        let divCardText = document.createElement('div');
        divCardText.className = "textCard";
        
        let divCardInfo = document.createElement('div');
        divCardText.className = "infoCard";

        let titleCard  = document.createElement('h3');
        titleCard.textContent = element.name;

        let descCard  = document.createElement('p');
        descCard.textContent = element.description;

        let divFunctions = document.createElement('div');

        if(type==1){
            let buttonCard = document.createElement('button');
            buttonCard.className = "button";
            buttonCard.textContent = "COMPRAR" + element.precio

            divFunctions.appendChild(buttonCard);

            divFunctions.className = "buttonCard";
            
        }
        else{
            let editLink = document.createElement('a');
            editLink.href = "editProd.html?type=product&index=" + i;
            editLink.className = "adminLink"
            
            let editSpan = document.createElement('span');
            editSpan.textContent = "Editar";
            editSpan.id = "editar";
            
            let delLink = document.createElement('a');
            delLink.className = "adminLink"

            let delSpan = document.createElement('span');
            delSpan.textContent = "Eliminar";
            const index = i;
            delSpan.addEventListener("click",function (){
                console.log("en listener");
                console.log("index=",index);
                delProduct(index);

            },false);

            editLink.appendChild(editSpan);
            delLink.appendChild(delSpan);

            divFunctions.appendChild(editLink);
            divFunctions.appendChild(delLink);

            divFunctions.className = "funciones";
        }

        divCardInfo.appendChild(titleCard);
        divCardInfo.appendChild(descCard);

        divCardText.appendChild(divCardInfo);
        divCardText.appendChild(divFunctions); 

        divCard.appendChild(imgCard);
        divCard.appendChild(divCardText);

        container.appendChild(divCard);

        i++;
        
    });
}

function delProduct(index){

    console.log("==> BUILDPAGE::delProduct");

    const fs = require('fs');
    let filePath = "../data/catalog.json";
    let listProducts;

    
    console.log("* BUILDPAGE::delProduct. index=",index);

    container.innerHTML = "";

    fs.readFile(filePath,(err,data)=>{
        if(err){
            alertMsg("Falla en lectura de datos.","Intente nuevamnente.","warning");
            return console.error(err);
        }
        
        listProducts = data.toSting();
        listProducts = JSON.parse(listProducts);
        listProducts.splice(index,1);
        fs.writeFile(filePath,JSON.stringify(listProducts),(err)=>{
            if(err){
                alertMsg("Falla al eliminar el registro.","Intente nuevamente.","warning");
            }
        });

        drawProducts(2);
    });

}


/**********************/
/**********************/
/**********************/


function alertMsg(titulo,texto,icono){

    Swal.fire({
        icon: icono,
        title: titulo,
        text : texto,
        showConfirmButton: false,
        timer: 2000
      });

    
}

