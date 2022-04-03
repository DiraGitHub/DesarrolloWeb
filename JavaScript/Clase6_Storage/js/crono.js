document.addEventListener('DOMContentLoaded',() => {

    localStorage.c = localStorage.c || 0;
    let t;
    let cl = document.querySelector("#crono");
    cl.innerHTML = localStorage.c;

    document.querySelector("#cambiar").addEventListener('click',cambiar);
    document.querySelector("#inicializar").addEventListener('click',()=>{localStorage.c = 0;});
});

let incrementar = () =>{
    localStorage.c = +localStorage.c + 0.1;
};

let arrancar = () =>{
    t  = setInterval(()=>{
        incrementar();
    },100);
};

let parar  = () =>{
    
};

let cambiar = () => {
    if(!t){
        arrancar();
        mostrar();
    }
    else{
        parar();
    }
};

let  mostrar = () => cl.innerHTML = (+localStorage.c).toFixed(1);
