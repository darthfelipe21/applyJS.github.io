class Products {
    constructor(id, name, category, brand, color, stock, price, image) {
            this.id = id;
            this.name = name;
            this.category = category;
            this.brand = brand;
            this.color = color;
            this.stock = stock;
            this.price = price;
            this.image = image;
    }
}
let products = []; 

products.push (new Products(
    products.length + 1,
    "guante de baseball",
    "Baseball",
    "Rawling",
    "Negro",
    3,
    100,
    "/multimedia/guante-baseball.jpg",
));
products.push (new Products(
    products.length + 1,
    "balon de nfl",
    "Futbol Americano",
    "Wilson",
    "Marron",
    5,
    60,
    "/multimedia/balon-nfl.jpg",
));
products.push (new Products(
    products.length + 1,
    "raqueta de tenis",
    "Tenis",
    "Wilson",
    "Azul/Naranja",
    7,
    120,
    "/multimedia/raqueta-tenis.jpg",
));
products.push (new Products(
    products.length + 1,
    "gorra f1",
    "Formula 1",
    "Mclaren",
    "Naranja",
    4,
    30,
    "/multimedia/gorra-f1.jpg",
));
products.push (new Products(
    products.length + 1,
    "balon de futbol",
    "Champions League",
    "ADIDAS",
    "Edición Champions League",
    2,
    90,
    "/multimedia/balon-futbol.jpg",
));
products.push (new Products(
    products.length + 1,
    "Jersey NBA",
    "Basketball",
    "Nike",
    "Chicago Bulls",
    6,
    50,
    "/multimedia/jersey-nba.jpg",
));

let repeat = confirm (`¿Desea comprar alguno de los siguientes productos?
1= Guante de Baseball
2= Balon de NFL
3= Raqueta de Tenis
4= Gorra F1
5= Balon de Futbol
6= Jersey NBA`);
let counter = 0; 
let total = 0;

function cart (){
    while (repeat){
            let productName = Number(prompt("Ingrese el numero del producto que esta buscando"));
            if (productName >=1 &&  productName <=6){
            let findProduct = products.filter (search => search.id === productName);
            findProduct.forEach ((search)=>{
            alert (`El producto ${search.name}
            tiene un valor de: $${search.price}`);
            counter ++;
            total = plus (search.price, total);       
            repeat = confirm (`¿Quiere seguir comprando?
1= Guante de Baseball
2= Balon de NFL
3= Raqueta de Tenis
4= Gorra F1
5= Balon de Futbol
6= Jersey NBA`);
            });
    }else {
            alert("No ingreso un producto valido")
    }
}
    message();
}

const plus = (a,b) =>{return a+b};

const message = () =>{
    alert (`El total a cancelar: $${total} por la cantidad de ${counter} productos`);
}

cart();



let identifier = document.getElementById("identifier");
let person = prompt("Bienvenido a CNF, ingrese su nombre");

if (person === null){
    identifier.innerHTML = `Bienvenido`;
}else if (person != ""){
    identifier.innerHTML = `Bienvenido ${person}`;
}else{
    identifier.innerHTML = `Bienvenido`;
}

products.forEach(everyProduct =>{
    let container = document.getElementById("container");
    let productInsert = document.createElement("div");
    productInsert.innerHTML =`
    <img src ="${everyProduct.image}>
    <h2>${everyProduct.name}</h2>
    <span>Precio: ${everyProduct.price}</span>
    `
    container.append(productInsert)
})



