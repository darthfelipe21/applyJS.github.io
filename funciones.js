const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()

let shoppingCart = {};

document.addEventListener('DOMContentLoaded', () =>{
    fetchData()
    if(localStorage.getItem('cart')){
        shoppingCart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
});

cards.addEventListener('click', e =>{
    addCarrito(e);
});

items.addEventListener('click', e =>{
    btnAumentarDisminuir(e)
});

const fetchData = async()=>{
    try{
        const res = await fetch('api.json');
        const data = await res.json();
        showCard(data);
    }catch (error) {
        console.log(error);
    }
}

const showCard = data =>{
    data.forEach(products => {
        // console.log(products);
        templateCard.querySelector('h5').textContent = products.name;
        templateCard.querySelector('p').textContent = products.price;
        templateCard.querySelector('img').setAttribute('src',products.image);
        templateCard.querySelector('.btn-dark').dataset.id = products.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const addCarrito = e =>{
    if(e.target.classList.contains('btn-dark')){
        setCart(e.target.parentElement)
    }
    e.stopPropagation();
}

const setCart = objetcs =>{
    const product={
        id:objetcs.querySelector('.btn-dark').dataset.id,
        name:objetcs.querySelector('h5').textContent,
        price:objetcs.querySelector('p').textContent,
        cantidad:1
    }
    if(shoppingCart.hasOwnProperty(product.id)){
        product.cantidad=shoppingCart[product.id].cantidad+ 1    
    }
    console.log(product)
    shoppingCart[product.id]={...product}
    showCart();

    localStorage.setItem('cart', JSON.stringify(shoppingCart))
}

const showCart = () =>{
    items.innerHTML =''
    Object.values(shoppingCart).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.name;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id; 
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.price;
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);

    showFooter();
}

const showFooter = () => {
    footer.innerHTML=''
    if(Object.keys(shoppingCart).length === 0){
        footer.innerHTML =`
        <th scope="row" colspan="5">No hay nada en el carrito</th>
        `
        return
    }
    const numberCantidad = Object.values(shoppingCart).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const numberPrice = Object.values(shoppingCart).reduce((acc, {cantidad, price})=> acc + cantidad*price, 0)

    templateFooter.querySelectorAll('td')[0].textContent= numberCantidad
    templateFooter.querySelector('span').textContent = numberPrice

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const empty = document.getElementById('empty-cart');
    empty.addEventListener('click', () =>{
        shoppingCart = {};
        showCart();
    })
    empty.addEventListener("click", () =>{
        Swal.fire({
            icon: 'success',
            title: 'Carrito Vaciado',
        })
    })
}

const btnAumentarDisminuir = e =>{
    if(e.target.classList.contains('btn-info')){
        const producto = shoppingCart[e.target.dataset.id]
        producto.cantidad = shoppingCart[e.target.dataset.id].cantidad + 1
        shoppingCart[e.target.dataset.id] = {...producto}
        showCart();
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = shoppingCart[e.target.dataset.id]
        producto.cantidad --
        if (producto.cantidad === 0) {
            delete shoppingCart[e.target.dataset.id]
        } else {
            shoppingCart[e.target.dataset.id] = {...producto}
        }
        showCart()
}
e.stopPropagation();
}






