console.log(document.getElementById("tienda1"))
const tienda1 = document.getElementById("tienda1")

let nombreUser = prompt("Ingrese su nombre")
let apellidoUser = prompt("Ingrese su apellido")
let pregunta, saludos

do{
    horario = parseInt(prompt("Ingrese la hora en la que se encuentra"))
    if(horario <= 12 ){
        saludos = "buenos dias"
    }else if(horario <= 20 ){
        saludos = "buenas tardes"
    }else if(horario <= 24 ){
        saludos = "buenas noches"
    }else if (horario >= 25){
        alert("Ese horario no existe")
    }else if(isNaN (horario)){
        alert("Ese horario no existe")
    }
}while(isNaN(horario) || horario >= 25) 

const user = {username: nombreUser, lastname: apellidoUser, time: horario}
tienda1.innerText = `Hola ${user.username} ${user.lastname}, ${saludos}`

class Producto {
    constructor (id, nombre, marca, precio, stock){
    this.id = id
    this.nombre = nombre
    this.marca = marca
    this.precio = precio
    this.stock = stock
    }
    mostrarMensaje(){
        alert(`El producto seleccionada es ${productoABuscar} y sus caracteristicas son las siguientes: La marca es ${this.marca}, el precio es de ${this.precio} y nuestro stock actual es de ${this.stock}`)
    }
}

const producto1 = new Producto (1, "HELADERA", "LG", 200000, 50)
const producto2 = new Producto (2, "LAVARROPAS", "Samsung", 120000, 70)
const producto3 = new Producto (3, "HORNO", "Atma", 60000, 60)
const producto4 = new Producto (4, "AIRE", "Tcl", 120000, 40)
const producto5 = new Producto (5, "MICROONDAS", "Bgh", 40000, 80)

const productos = [producto1, producto2, producto3, producto4, producto5]

function buscarProducto(productos) {
    let nombreProducto = prompt("Ingrese un nombre de producto").toUpperCase()
    console.log(productos.find(productos => productos.nombre == nombreProducto))
    if(nombreProducto !== "HELADERA" && nombreProducto !== "LAVARROPAS" && nombreProducto !== "HORNO" && nombreProducto !== "AIRE" && nombreProducto !== "MICROONDAS"){
        console.log("Producto no encontrado")
    }
}

function buscarProductos(productos) {
    let precio = parseFloat(prompt("Ingrese un precio"))
    let buscarProducto = productos.filter(producto => producto.precio >= precio)
    if (buscarProducto.length == 0) {
        console.log("No hay productos con dichas caracteristicas")
    } else {
        console.log(buscarProducto)
    }
}

function agregarProductos(productos){
    let agregarProducto = prompt("Agregue un producto para que sepamos que es lo que busca").toUpperCase()
    if (agregarProducto !== "HELADERA" && agregarProducto !== "LAVARROPAS" && agregarProducto !== "HORNO" && agregarProducto !== "AIRE" && agregarProducto !== "MICROONDAS"){
        console.log(`Se agrego correctamente ${agregarProducto}`)
        alert(`Se agrego correctamente el siguiente producto: ${agregarProducto}`)
        console.log(productos.push(agregarProducto))
        console.log(productos)
        console.log(new Producto (6, `${agregarProducto}`, "Predetermiado", "-", "0", "-"))
    }else{
        alert("Este producto ya existe")
    }
}


const divProductos = document.getElementById("productos")

for(let producto of productos){
    divProductos.innerHTML += `
    <div class="card productos" id="producto${producto.id}" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
        </div>
    </div>
    </div>
    `
}

let productoABuscar = prompt("Ingrese un producto de nuestro stock, tal cual este escrito, para consultar por su marca, precio y stock: Heladera, Lavarropas, Horno, Aire y/o Microondas").toUpperCase()
let respuesta, continuar

while(productoABuscar !== "HELADERA" && productoABuscar !== "LAVARROPAS" && productoABuscar !== "HORNO" && productoABuscar !== "AIRE" && productoABuscar !== "MICROONDAS"){
    productoABuscar = prompt("Ingrese un producto de nuestro stock, tal cual este escrito, para consultar por su marca, precio y stock: Heladera, Lavarropas, Horno, Aire y/o Microondas").toUpperCase()
}

if(productoABuscar == "HELADERA"){
    (producto1.mostrarMensaje())
}else if(productoABuscar == "LAVARROPAS"){
    (producto2.mostrarMensaje())
}else if(productoABuscar == "HORNO"){
    (producto3.mostrarMensaje())
}else if(productoABuscar == "AIRE"){
    (producto4.mostrarMensaje())
}else if(productoABuscar == "MICROONDAS"){
    (producto5.mostrarMensaje())
}

do {
    do{
        continua = prompt("¿Desea realizar otra función?").toUpperCase()
        if (continua == "SI"){
            do{
                respuesta = parseInt(prompt(`Ingrese un número para: 
                1- Buscar un producto
                2- Buscar productos por precio
                3- Agregar producto
                `))} while (respuesta < 1 || respuesta > 3)
        }
        else if(continua != "SI"){
            alert("Hasta pronto. Si cambio de opinion presione Enter o Aceptar para volver hacia atras")
        }
    } while(continua != "SI")
} while((continua != "SI") && (respuesta < 1 || respuesta > 3))

switch(respuesta){
    case 1:
        buscarProducto(productos)
        break
    case 2:
        buscarProductos(productos)
        break
    case 3:
        agregarProductos(productos)
        break
    default:
        alert("Opción no válida")
        break
}

class Usuario {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
}

const usuarios = []

const form = document.getElementById("idForm")
const divUsers = document.getElementById("divUsers")
const botonUsers = document.getElementById("botonUsers")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let username = document.getElementById("idUser").value
    let email = document.getElementById("idEmail").value
    let password = document.getElementById("idPassword").value

    const usuario = new Usuario (username, email, password)
    usuarios.push(usuario)
    console.log(usuarios)

    form.reset() 
})

botonUsers.addEventListener("click", () => {
    usuarios.forEach(usuario => {
        divUsers.innerHTML += `
        <div class = "card" style = "width: 18rem; margin:3px;">
            <div class = "card-body>
                <h5 class = "card-title">${usuario.username}</h5>
                <p class = "card-text">${usuario.email}</p>
            </div>
        </div>`
    })
})