//import * as Draw from 'buildPage.js';

/****************************************/

class userObj {
    idUsr;
    tipo;
    nombre;
    edad;
    telefono;
    email;
    ocupacion;
    direccion;
    clave;
    constructor(idUsr,tipo, nombre, edad, telefono,email,ocupacion,direccion,clave){
        this.idUsr = idUsr;
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
        this.ocupacion = ocupacion;
        this.direccion = direccion;
        this.clave = clave;
    };
}


/****************************************/



/****************************************/

//function main(){

    document.addEventListener("DOMContentLoaded",()=>{

        console.log("==>LOGIN::DOMContentLoaded");

        let userType  = sessionStorage.getItem("userType") ;
        let sessionStatus  = sessionStorage.getItem("sessionStatus");
        let userID  = sessionStorage.getItem("userID");

        console.log("userType = ", userType);
        console.log("sessionStatus = ", sessionStatus);
        console.log("userID = ", userID);

        let urlName = window.location.href.split("/");
        let urlLen =  urlName.length-1;
        let pageName = urlName[urlLen];
        pageName = pageName.split("?")[0];
        
        console.log("pageName = ", pageName);
    
        drawPage(pageName,sessionStatus,userType,userID);
    
    });

//}


/****************************************/

function login(){

    fetch('./data/users.json')
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            validUser(data);
        })
        .catch ( () => {
            showMsg("error", "No se encontraron usuarios.")
        });
}


function validUser(data){

    let userMail = document.querySelector('#loginMail').value;
    let userPwd = document.querySelector('#loginPwd').value;
    let userType = "";
    let userID = "";
    let sessionStatus = 0;

    console.log("userMail",userMail);
    console.log("userPwd",userPwd);

    data.forEach(element => {
        console.log(element);
        if( userMail == element.email && userPwd == element.clave){
            userType = element.tipo;
            userID = element.idUsr;
            sessionStatus = 1;
        }
    });

    sessionStorage.setItem("userType" , userType);
    sessionStorage.setItem("userID" , userID);
    sessionStorage.setItem("sessionStatus" , sessionStatus);

    if(sessionStatus == "1"){

        let urlName = window.location.href.split("/");
        let urlLen =  urlName.length-1;
        let pageName = urlName[urlLen];
        
        console.log("pageName = ", pageName);

        if(userType == "admin"){
            document.location.href = "./admin/main.html";
        }
        else{
            if(pageName=="registro.html"){
                document.location.href = "index.html";
            }
            else{
                document.location.reload();
            }
        }
    }
    else{
        showMsg("error","Usuario/Contraseña invalidos. Intente nuevamente.");
    }

}


function logOut(){

    console.log("==>logOut")

    let auxType = sessionStorage.getItem("userType");

    sessionStorage.setItem("userType" , "");
    sessionStorage.setItem("sessionStatus" , 0);
    sessionStorage.setItem("userID" , 0);

    console.log("auxType",auxType)

    if(auxType=="admin"){
        document.location.href = "../index.html";
    }
    else{
        document.location.reload();
    }
    
}

/************************************* */

function checkUsers(){
    fetch('./data/users.json')
        .then( (res) => {
            return res.json();
        })
        .then((data)=>{
            return data.length;
        })
        .catch ( () => {
            return 0;
        });
}

function signUp(type){
    const fs = require ("fs");
    let name = "";
    let edad = "";
    let tel = "";
    let job  = "";
    let mail = "";
    let dir = "";
    let clave= ""; 

    let userID = checkUsers()+1;
    let userType = "client";

    if(type == 1){
        name = document.querySelector('#usrName');
        edad = document.querySelector('#edad');
        tel =  document.querySelector('#tel');
        job  = document.querySelector('#job');
        mail = document.querySelector('#email');
        dir =  document.querySelector('#dir');
        clave= document.querySelector('#clave');
    }
    else if(type == 2){
        name = document.querySelector('#user');
        mail = document.querySelector('#mail');
        clave = document.querySelector('#clave');
    }

    let newUser = userObj(userID,userType,name,edad,tel,job,mail,dir,clave);

    fs.writeFile("users.json",JSON.stringify(newUser),function(err, res){
        if(err) 
            showMsg("error","Error en registro. Intente nuevamente.");
        else{
            showMsg("success","Registro exitoso. Inicie sesión.");
            document.location
        }
    });

}


function showMsg(icono,mensaje){
    Swal.fire({
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
}
