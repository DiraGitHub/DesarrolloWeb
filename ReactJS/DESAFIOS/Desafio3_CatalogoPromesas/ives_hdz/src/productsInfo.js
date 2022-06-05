const products = [
    {
        idProduct: "product1",
        name: "Tulum",
        description: "Poderoso antioxidante gracias a sus componentes protege a las celulas fortalece tejidos,  vasos sanguíneos, protege pulmones.",
        image: "./imgs/Tulumsili.jpg",
        precio: "$425.00",
        categoria: "intestino"
    },
    {
        idProduct: "product2",
        name: "Life Mix Plus",
        description: "Proporciona Vitaminas necesarias para el equilibrio y renovacion celular que ayuda a mantener la salud fisica y mental.",
        image: "./imgs/LifeMixPlus.jpg",
        precio: "$355.00",
        categoria: "vitaminas"
    },
    {
        idProduct: "product3",
        name: "Esla - Ny",
        description: "Auxiliar en el tratamiento de: alergias, regeneracion de tejidos en el caso de lesiones de piel, problemas de digestion, en tratamiento ulceras colitis, gastrtis, desintoxicante, fortalece el sistema inmune, baja los niveles de azúcar metaboliza grasas.",
        image: "./imgs/EslaNy.jpg",
        precio: "$455.00",
        categoria: "intestino"
    },
    {
        idProduct: "product4",
        name: "Soft Skin",
        description: "Estimula el crecimiento del cabello dandole brillo, fortaleza y sedosidad.",
        image: "./imgs/SoftSkin.jpg",
        precio: "$140.00",
        categoria: "cabello"
    },
    {
        idProduct: "product5",
        name: "Tone Skin",
        description: "Retarda el porceso de envejecimiento.Corrige pequeñas imperfecciones mejorando la apariencia y juventud de la piel.Humectante natural.",
        image: "./imgs/ToneSkin.jpg",
        precio: "$535.00",
        categoria: "piel"
    },
    {
        idProduct: "product6",
        name: "RH - 100",
        description: "Poderoso antioxidante gracias a sus componentes protege a las celulas fortalece tejidos, vasos sanguíneos, protege pulmones.",
        image: "./imgs/RH-100.jpg",
        precio: "$425.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product7",
        name: "Wild Yam",
        description : "Proporciona Vitaminas necesarias para el equilibrio y renovacion celular que ayuda a mantener la salud fisica y mental.",
        image : "./imgs/WildYam.jpg",
        precio: "$355.00",
        categoria: "piel"
    },
    {
        idProduct: "product8",
        name: "Calcio Coral",
        description: "Auxiliar en el tratamiento de: alergias, regeneracion de tejidos en el caso de lesiones de piel, problemas de digestion, en tratamiento ulceras colitis, gastrtis, desintoxicante, fortalece el sistema inmune, baja los niveles de azúcar metaboliza grasas.",
        image: "./imgs/CalcioCoral.jpg",
        precio: "$455.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product9",
        name: "Canadian Linaza",
        description: "Estimula el crecimiento del cabello dandole brillo, fortaleza y sedosidad.",
        image: "./imgs/Linazamolida.jpg",
        precio: "$140.00",
        categoria: "intestino"
    },
    {
        idProduct: "product10",
        name: "Real X- B Capsulas",
        description: "Retarda el porceso de envejecimiento.Corrige pequeñas imperfecciones mejorando la apariencia y juventud de la piel.Humectante natural.",
        image: "./imgs/realxb.jpg",
        precio: "$535.00",
        categoria: "suplementos"
    },
    {
        idProduct: "product11",
        name: "Ice O2",
        description: "Retarda el porceso de envejecimiento.Corrige pequeñas imperfecciones mejorando la apariencia y juventud de la piel.Humectante natural.",
        image: "./imgs/IceO2.jpg",
        precio: "$535.00",
        categoria: "piel"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}