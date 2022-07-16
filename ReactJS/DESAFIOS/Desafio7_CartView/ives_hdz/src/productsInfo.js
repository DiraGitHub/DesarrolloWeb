const products = [
    {
        idProduct: "product1",
        name: "At-Ox",
        description: "Poderoso antioxidante gracias a sus componentes protege a las celulas fortalece tejidos, vasos sanguíneos, protege pulmones.",
        image: "atOx.jpg",
        precio: "350.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product2",
        name: "Calcio Coral",
        description: "Equilibra el PH, favorece la conexion entre neuronas por lo que ayuda a combatir problemas como migrañas Alzheimer. Problemas de osteoporosis, artritis, calambres, diabetes, colesterol.",
        image: "calcioCoral.jpg",
        precio: "450.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product3",
        name: "Carticat",
        description: "Coadyuvante en el tratamiento de artritis, ulceras y cancer.",
        image: "cartiCat.jpg",
        precio: "480.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product4",
        name: "Real XB Capsulas/Tabletas",
        description: "Ayuda a controlar el estrés, la depresión, irritabilidad, insomnio, colitis.",
        image: "realXB.jpg",
        precio: "380.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product5",
        name: "Xtra Vita",
        description: "Ayuda en tratamiento de  Diabetes fortalece el sistema inmune y sistema nervioso. previene procesos tumorales.",
        image: "xtraVita.jpg",
        precio: "390.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product6",
        name: "Engy",
        description: "Favorece la produccion de colágeno, refuerza el sistema inmune, regula el sistema digestivo y coadyuva funcines renal, disfuncion eréctil.",
        image: "engy.jpg",
        precio: "680.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product7",
        name: "Eslany",
        description: "Gracia a sus componentes ayuda a dismunuir el apetito, eliminar líquidos y toxinas, metabolizar grasas.",
        image: "eslaNy.jpg",
        precio: "390.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product8",
        name: "Inforz",
        description: "Sus componentes refuerzan el sistema inmune y nervioso, mejorando la memoria. ayudando en casos de insomnio,depresión e irritavilidad.",
        image: "inForz.jpg",
        precio: "250.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product9",
        name: "MG12",
        description: "El Magnesio activa vitaminas y enzimas, ayuda a mejorar el sistema neuromuscular, además de un importante papel en el metabolismo de grasas  y proteínas",
        image: "mg12Casei.jpg",
        precio: "475.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product10",
        name: "RH100",
        description: "Ayuda a la desintoxicación,  mantenimiento y regeneracion hepática. Favorece la accion depurativa de la vesícula biliar y vías urinarias.",
        image: "rh-100.jpg",
        precio: "320.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product11",
        name: "Family Vitamin Liquido/Tabletas",
        description: "Proporciona Vitaminas necesarias para el equilibrio y renovacion celular que ayuda a mantener la salud fisica y mental.",
        image: "familyVit.jpg",
        precio: "340.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product12",
        name: "Herbal Miel",
        description: "Auxiliar en el tratamiento de problemas respiratorios como faringitis, bronquitis,asma etc",
        image: "herbalMiel.jpg",
        precio: "670.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product13",
        name: "Life Mix Chocolate Plus",
        description: "Ayuda a fortalecer el sistema inmune, prevenir el cáncer y la osteoporosis ademas de favorecertratamientos de control de peso.",
        image: "lifeMixPlus.jpg",
        precio: "420.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product14",
        name: "Life Mix Family Chocolate",
        description: "Sabor Chocolate: Fortalece la flora intestinal, previene anemias,ayuda a reforzar el sistema respiratorio y nervioso.",
        image: "lifeMixChoco.jpg",
        precio: "420.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product15",
        name: "Life Mix Family Fresa",
        description: "Sabor Fresa: fortalece la flora intestinal, previene anemias,ayuda a reforzar el sistema respiratorio y nervioso.",
        image: "lifeMixFresa.jpg",
        precio: "420.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product16",
        name: "Aloe Vera",
        description: "Auxiliar en el tratamiento de: alergias, regeneracion de tejidos en el caso de lesiones de piel, problemas de digestion, en tratamiento ulceras colitis, gastrtis, desintoxicante, fortalece el sistema inmune, baja los niveles de azúcar metaboliza grasas.",
        image: "aloeVera.jpg",
        precio: "380.00",
        categoria: "intestino"
    },
    {
        idProduct: "product17",
        name: "Canadian Paso 2",
        description: "Coadyuvante en el tratamiento de Estreñimiento, gastritis, obesidad, Diabetes, antiinflamatorio, prevención de cáncer.",
        image: "linazaEntera.jpg",
        precio: "250.00",
        categoria: "intestino"
    },
    {
        idProduct: "product18",
        name: "Canadian",
        description: "Coadyuvante en el tratamiento: Estreñimiento, Diabetes Inflamacion.",
        image: "linazaMolida.jpg",
        precio: "230.00",
        categoria: "intestino"
    },
    {
        idProduct: "product19",
        name: "Clorofila",
        description: "Ayuda a Eliminar toxinas, mejora la digestion, equilibra Ph, previene anemia ",
        image: "cloroFila.jpg",
        precio: "230.00",
        categoria: "intestino"
    },
    {
        idProduct: "product20",
        name: "Tulum",
        description: "Sus fibras ayudan en el tratamiento de la colitis, gastritis,estreñimiento regulando la funcion digestiva, ayuda a prevenir el cáncer de colon.",
        image: "tulumSili.jpg",
        precio: "450.00",
        categoria: "intestino"
    },
    {
        idProduct: "product21",
        name: "Shampoo Bergamota",
        description: "Estimula el crecimiento del cabello dandole brillo, fortaleza y sedosidad.",
        image: "shampoo.jpg",
        precio: "100.00",
        categoria: "cabello"
    },
    {
        idProduct: "product22",
        name: "Acondicionador Bergamota",
        description: "Suaviza, elimina la estática da brillo y sedosidad.",
        image: "acondicionador.jpg",
        precio: "150.00",
        categoria: "cabello"
    },
    {
        idProduct: "product23",
        name: "Porcelain Crema",
        description: "Retarda el porceso de envejecimiento. Corrige pequeñas imperfecciones mejorando la apariencia y juventud de la piel. Humectante natural.",
        image: "porcelainCrema.jpg",
        precio: "390.00",
        categoria: "piel"
    },
    {
        idProduct: "product24",
        name: "Porcelain Gel",
        description: "Estimula la formacion de colágeno y elastina, protege de la acción oxidante de los radicales libres devolviendo la elasticidad de la piel y retardando el proceso de envejecimiento. Humectante natural.",
        image: "porcelainGel.jpg",
        precio: "420.00",
        categoria: "piel"
    },
    {
        idProduct: "product25",
        name: "Kirstal Rock",
        description: "Eficaz desorante natural que permite la transpiracion, evita la infeccion por cortes en la piel gracias a que evita la proliferación de bacterias.",
        image: "kristalRock.jpg",
        precio: "180.00",
        categoria: "piel"
    },
    {
        idProduct: "product26",
        name: "Ice02 Gel",
        description: "Facilita la eliminación de grasas por vías urinarias. Reactiva la ciculación, tonifica, nutre y fortalece la piel, ayudando en la eliminación de cicatrices o marcas en la piel como estrías, celulitis y piel de naranja.",
        image: "iceO2.jpg",
        precio: "400.00",
        categoria: "piel"
    },
    {
        idProduct: "product27",
        name: "Healthy Skin",
        description: "Jabon de tocador para piel grasa  y mixta. Por su accion antiséptica,antibiotica y fungicida es ideal como Auxiliar en el tratamiento del acné,caspa y pie de atleta. cicatrizante.",
        image: "healthySkin.jpg",
        precio: "110.00",
        categoria: "piel"
    },
    {
        idProduct: "product28",
        name: "Tone Skin",
        description: "Tónico corpotal. Atenua estrías, incrementa la elasticidad, antiinflamatorio natural",
        image: "toneSkin.jpg",
        precio: "190.00",
        categoria: "piel"
    },
    {
        idProduct: "product29",
        name: "Wild Yam",
        description: "Regula el sistema hormonal del que dependen: La metabolizacion de grasas, Alteracion del sueño, menopausia,andropausia, circulación osteoporosis y articulaciones.",
        image: "wildYam.jpg",
        precio: "385.00",
        categoria: "piel"
    },
    {
        idProduct: "product30",
        name: "Honey Ski",
        description: "Jabon de tocador para todo tipo de piel. Emoliente humectante y antioxidante. Previene el envejecimiento de la piel.",
        image: "honeySkin.jpg",
        precio: "100.00",
        categoria: "piel"
    },
    {
        idProduct: "product31",
        name: "Soft Skin",
        description: "Jabon corporal. Ayuda a remover el tejido adiposo, sus nutrientes dan suavidad.",
        image: "softSkin.jpg",
        precio: "100.00",
        categoria: "piel"
    },
    
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}


export const getProductById = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.idProduct === id));
        },500);
    });

};

export const getProductsCategory = (category) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.categoria === category));
        },500);
    });
};