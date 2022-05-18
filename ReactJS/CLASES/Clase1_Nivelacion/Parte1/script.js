const root = document.getElementById('root');
console.log(root);

//root.innerHTML = '<h1>HOLA</h1>';

const avatar = ({id,name}) =>
{
    return `
    <picture>
        <img src="https://randomeuser.me/api/portraits/lego/${id}.jpg" alt=${name}/>
    </picture>`;
};


root.innerHTML = avatar("1","Dira");