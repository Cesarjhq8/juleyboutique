/* =====================================================
   CONFIGURACIÓN
===================================================== */
const numeroWhatsApp = "50237282660";
const PORCENTAJE_ANTICIPO = 0.5;
const PORCENTAJE_DESCUENTO = 0.10;

/* CORREOS DE CLIENTES CONOCIDOS (10% de descuento)
   Agrega aquí cada correo, en minúsculas, entre comillas y separado por comas. */
const CLIENTES_CONOCIDOS = [
    "chernandezq5@miumg.edu.gt",
    "cliente2@gmail.com",
    "cliente3@hotmail.com"
];

/* =====================================================
   PRODUCTOS (edita nombre, precio e imagen)
===================================================== */
const PRODUCTOS = [
    /* ===== ROPA DEPORTIVA MUJER (carpeta img m) =====
       Cambia nombre, descripción y precio de cada una. Mientras el precio sea 0
       se muestra "Precio por definir" y no se puede agregar al carrito. */
    { id: 10, nombre: "Short vino", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0044.jpg", desc: "Escribe aquí la descripción." },
    { id: 11, nombre: "Legging turquesa", precio: 0, cat: "mujer", sub: "leggings", img: "img m/IMG-20261022-WA0045.jpg", desc: "Escribe aquí la descripción." },
    { id: 12, nombre: "Conjunto azul", precio: 0, cat: "mujer", sub: "conjuntos", img: "img m/IMG-20261022-WA0046.jpg", desc: "Escribe aquí la descripción." },
    { id: 13, nombre: "Short morado oscuro", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0047.jpg", desc: "Escribe aquí la descripción." },
    { id: 14, nombre: "Short celeste", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0051.jpg", desc: "Escribe aquí la descripción." },
    { id: 15, nombre: "Short azul", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0055.jpg", desc: "Escribe aquí la descripción." },
    { id: 16, nombre: "Short gris", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0059.jpg", desc: "Escribe aquí la descripción." },
    { id: 17, nombre: "Legging verde", precio: 0, cat: "mujer", sub: "leggings", img: "img m/IMG-20261022-WA0060.jpg", desc: "Escribe aquí la descripción." },
    { id: 18, nombre: "Conjunto morado", precio: 0, cat: "mujer", sub: "conjuntos", img: "img m/IMG-20261022-WA0061.jpg", desc: "Escribe aquí la descripción." },
    { id: 19, nombre: "Legging verde azulado", precio: 0, cat: "mujer", sub: "leggings", img: "img m/IMG-20261022-WA0062.jpg", desc: "Escribe aquí la descripción." },
    { id: 20, nombre: "Short azul rey", precio: 0, cat: "mujer", sub: "shorts", img: "img m/IMG-20261022-WA0063.jpg", desc: "Escribe aquí la descripción." },
    { id: 21, nombre: "Legging vino oscuro", precio: 0, cat: "mujer", sub: "leggings", img: "img m/IMG-20261022-WA0064.jpg", desc: "Escribe aquí la descripción." },

    /* ===== ZONA HOMBRE (carpeta img hy) =====
       Un producto por cada foto de la carpeta "img hy", en el mismo orden.
       1) Cambia ARCHIVO-1.jpg por el nombre real de la foto.
       2) Escribe el nombre y el precio. Con precio 0 se muestra "Precio por definir".
       Para agregar más, copia una línea y cambia el id (31, 32, 33...). */
    { id: 30, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-1.jpg", desc: "Escribe aquí la descripción." },
    { id: 31, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-2.jpg", desc: "Escribe aquí la descripción." },
    { id: 32, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-3.jpg", desc: "Escribe aquí la descripción." },
    { id: 33, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-4.jpg", desc: "Escribe aquí la descripción." },
    { id: 34, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-5.jpg", desc: "Escribe aquí la descripción." },
    { id: 35, nombre: "Nombre del producto", precio: 0, cat: "hombre", img: "img hy/ARCHIVO-6.jpg", desc: "Escribe aquí la descripción." },

    { id: 1, nombre: "Collar Elegante",    precio: 85,  cat: "mujer",  img: "", desc: "Collar moderno para cualquier ocasión." },
    { id: 2, nombre: "Pulsera Dorada",     precio: 60,  cat: "mujer",  img: "", desc: "Pulsera delicada con acabado dorado." },
    { id: 3, nombre: "Aretes de Perla",    precio: 45,  cat: "mujer",  img: "", desc: "Aretes clásicos y livianos." },
    { id: 4, nombre: "Set de Maquillaje",  precio: 120, cat: "mujer",  img: "img acces mujer/1000032282.jpg", desc: "Paleta, brochas y más." },
    { id: 5, nombre: "Bolso de Mano",      precio: 180, cat: "mujer",  img: "", desc: "Bolso práctico para el día a día." },
    { id: 6, nombre: "Hoodie Urbano",      precio: 220, cat: "hombre", img: "img acces hombre/1000032373.jpg", desc: "Hoodie oversize efecto lavado." },
    { id: 7, nombre: "Lentes de Sol",      precio: 150, cat: "hombre", img: "", desc: "Lentes modernos para tu look." },
    { id: 8, nombre: "Cartera Clásica",    precio: 175, cat: "hombre", img: "", desc: "Cartera práctica y elegante." },
    { id: 9, nombre: "Cadena para Hombre", precio: 120, cat: "hombre", img: "", desc: "Cadena para complementar tu estilo." }
];

let carrito = [];
let correoCliente = null;
try { correoCliente = localStorage.getItem("juleyCorreo"); } catch (e) {}

const $ = (id) => document.getElementById(id);
const quetzales = (n) => "Q" + n.toFixed(2);
const esConocido = (c) => CLIENTES_CONOCIDOS.includes((c || "").toLowerCase().trim());
const descuentoActivo = () => esConocido(correoCliente);

/* =====================================================
   PRODUCTOS: mostrar, filtrar y buscar
===================================================== */
function renderProductos(lista, destino = "gridProductos") {
    $(destino).innerHTML = lista.length === 0
        ? '<p class="vacio">No encontramos productos con esa búsqueda.</p>'
        : lista.map((p) => `
        <article class="producto">
            <div class="producto-imagen">${p.img ? `<img src="${p.img}" alt="${p.nombre}">` : "Coloca aquí la imagen"}</div>
            <div class="producto-info">
                <small>${p.cat === "mujer" ? "MUJER" : "HOMBRE"}</small>
                <h3>${p.nombre}</h3>
                <p>${p.desc}</p>
                <div class="producto-abajo">
                    ${p.precio > 0
                        ? `<strong>${quetzales(p.precio)}</strong><button onclick="agregarProducto(${p.id})">Agregar</button>`
                        : `<strong class="sin-precio">Precio por definir</strong><button disabled>Agregar</button>`}
                </div>
            </div>
        </article>`).join("");
}

function renderHombre() {
    renderProductos(PRODUCTOS.filter((p) => p.cat === "hombre"), "gridHombre");
}

function renderMujer() {
    /* Solo accesorios: los productos de mujer que no son ropa deportiva (sin "sub") */
    renderProductos(PRODUCTOS.filter((p) => p.cat === "mujer" && !p.sub), "gridMujer");
}

function irZona(id) {
    $(id).scrollIntoView({ behavior: "smooth" });
}

function renderDestacados() {
    $("destacados").innerHTML = PRODUCTOS.filter((p) => p.precio > 0).slice(0, 3).map((p) => `
        <button class="destacado" onclick="agregarProducto(${p.id})" aria-label="Agregar ${p.nombre}">
            <div class="mini">${p.img ? `<img src="${p.img}" alt="">` : "🛍️"}</div>
            <div><strong>${quetzales(p.precio)}</strong><span>${p.nombre}</span></div>
        </button>`).join("");
}

function filtrar(cat) {
    $("buscar").value = "";
    if (cat === "hombre") { $("hombre").scrollIntoView({ behavior: "smooth" }); return; }
    const titulos = { todos: "Todos los productos", mujer: "Accesorios para mujer", hombre: "Accesorios para hombre" };
    $("tituloProductos").textContent = titulos[cat];
    renderProductos(cat === "todos" ? PRODUCTOS : PRODUCTOS.filter((p) => p.cat === cat));
    irProductos();
}

function filtrarSub(sub) {
    $("buscar").value = "";
    const nombres = { shorts: "Shorts", leggings: "Leggings", conjuntos: "Conjuntos" };
    $("tituloProductos").textContent = "Mujer · " + nombres[sub];
    renderProductos(PRODUCTOS.filter((p) => p.cat === "mujer" && p.sub === sub));
    irProductos();
}

function buscarProductos() {
    const texto = $("buscar").value.toLowerCase().trim();
    if (!texto) { filtrar("todos"); return; }

    const resultados = PRODUCTOS.filter((p) =>
        (p.nombre + " " + p.desc + " " + p.cat + " " + (p.sub || "")).toLowerCase().includes(texto));

    $("tituloProductos").textContent = "Resultados para “" + $("buscar").value.trim() + "”";
    renderProductos(resultados);
    irProductos();
}

function irProductos() {
    $("productos").scrollIntoView({ behavior: "smooth" });
}

/* =====================================================
   DESCUENTO PARA CLIENTES CONOCIDOS
===================================================== */
function abrirDescuento() {
    $("correoDescuento").value = descuentoActivo() ? correoCliente : "";
    $("mensajeDescuento").textContent = descuentoActivo() ? "Tu descuento del 10% ya está activo." : "";
    $("descuentoFondo").classList.add("activo");
    $("correoDescuento").focus();
}

function cerrarDescuento(evento) {
    if (!evento || evento.target.id === "descuentoFondo") $("descuentoFondo").classList.remove("activo");
}

function validarCorreo() {
    const correo = $("correoDescuento").value.toLowerCase().trim();
    const mensaje = $("mensajeDescuento");

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
        mensaje.textContent = "Escribe un correo válido, por ejemplo nombre@correo.com.";
        return;
    }
    if (!esConocido(correo)) {
        mensaje.textContent = "Ese correo no está en nuestra lista de clientes. Escríbenos por WhatsApp para registrarte.";
        return;
    }

    correoCliente = correo;
    try { localStorage.setItem("juleyCorreo", correo); } catch (e) {}
    mensaje.textContent = "¡Listo! Tu descuento del 10% está activo.";
    actualizarBotonDescuento();
    actualizarCarrito();
}

function actualizarBotonDescuento() {
    const boton = $("btnDescuento");
    boton.textContent = descuentoActivo() ? "10% activo ✓" : "Descuento 10%";
    boton.classList.toggle("activo", descuentoActivo());
}

/* =====================================================
   CARRITO
===================================================== */
function agregarProducto(id) {
    const existente = carrito.find((i) => i.id === id);
    if (existente) existente.cantidad++;
    else carrito.push({ ...PRODUCTOS.find((p) => p.id === id), cantidad: 1 });
    abrirCarrito();
}

function cambiarCantidad(indice, cambio) {
    carrito[indice].cantidad += cambio;
    if (carrito[indice].cantidad <= 0) carrito.splice(indice, 1);
    actualizarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    if (carrito.length && confirm("¿Quieres vaciar todo el carrito?")) {
        carrito = [];
        actualizarCarrito();
    }
}

function calcularTotales() {
    const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
    const descuento = descuentoActivo() ? subtotal * PORCENTAJE_DESCUENTO : 0;
    const total = subtotal - descuento;
    const anticipo = total * PORCENTAJE_ANTICIPO;
    return { subtotal, descuento, total, anticipo, saldo: total - anticipo };
}

function actualizarCarrito() {
    const vacio = carrito.length === 0;
    $("carritoVacio").style.display = vacio ? "block" : "none";
    $("resumen").style.display = vacio ? "none" : "block";

    $("listaCarrito").innerHTML = carrito.map((item, i) => `
        <div class="item-carrito">
            <div class="item-imagen">${item.img ? `<img src="${item.img}" alt="">` : "🛍️"}</div>
            <div class="item-datos">
                <h4>${item.nombre}</h4>
                <span class="precio">${quetzales(item.precio)}</span>
                <div class="controles">
                    <button onclick="cambiarCantidad(${i}, -1)" aria-label="Quitar uno">−</button>
                    <strong>${item.cantidad}</strong>
                    <button onclick="cambiarCantidad(${i}, 1)" aria-label="Agregar uno">+</button>
                    <button onclick="eliminarProducto(${i})" aria-label="Eliminar">🗑️</button>
                    <span class="subtotal-item">${quetzales(item.precio * item.cantidad)}</span>
                </div>
            </div>
        </div>`).join("");

    const t = calcularTotales();
    $("contador").textContent = carrito.reduce((s, i) => s + i.cantidad, 0);
    $("subtotal").textContent = quetzales(t.subtotal);
    $("lineaDescuento").style.display = t.descuento > 0 ? "flex" : "none";
    $("descuento").textContent = "-" + quetzales(t.descuento);
    $("total").textContent = quetzales(t.total);
    $("anticipo").textContent = quetzales(t.anticipo);
    $("saldo").textContent = quetzales(t.saldo);
}

function abrirCarrito() {
    actualizarCarrito();
    $("carritoFondo").classList.add("activo");
}

function cerrarCarrito() {
    $("carritoFondo").classList.remove("activo");
}

function cerrarCarritoFuera(evento) {
    if (evento.target.id === "carritoFondo") cerrarCarrito();
}

/* =====================================================
   FINALIZAR COMPRA (Paso siguiente: formulario de envío)
===================================================== */
function finalizarCompra() {
    if (carrito.length === 0) return;
    const t = calcularTotales();
    const linea = "------------------------------";

    let mensaje = "Estimados Juley Boutique:\n\n";
    mensaje += "Deseo realizar el siguiente pedido.\n\n";
    mensaje += "*DETALLE DEL PEDIDO*\n" + linea + "\n";

    carrito.forEach((item, i) => {
        mensaje += `${i + 1}. ${item.nombre}\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   Precio unitario: ${quetzales(item.precio)}\n`;
        mensaje += `   Subtotal: ${quetzales(item.precio * item.cantidad)}\n\n`;
    });

    mensaje += "*RESUMEN*\n" + linea + "\n";
    mensaje += `Subtotal: ${quetzales(t.subtotal)}\n`;
    if (t.descuento > 0) {
        mensaje += `Descuento 10% (cliente registrado): -${quetzales(t.descuento)}\n`;
        mensaje += `Correo del cliente: ${correoCliente}\n`;
    }
    mensaje += `Total del pedido: ${quetzales(t.total)}\n`;
    mensaje += `Anticipo del 50%: ${quetzales(t.anticipo)}\n`;
    mensaje += `Saldo al recibir: ${quetzales(t.saldo)}\n\n`;
    mensaje += "Quedo atento(a) a los datos para realizar el depósito del anticipo y coordinar la entrega.\n\n";
    mensaje += "Muchas gracias.";

    window.open("https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje), "_blank");
}

/* =====================================================
   CHAT FLOTANTE DE WHATSAPP
===================================================== */
function toggleWhatsApp() {
    $("waChat").classList.toggle("activo");
}

function enviarChat() {
    const texto = $("waMensaje").value.trim() || "Hola, quisiera más información.";
    window.open("https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto), "_blank");
    $("waMensaje").value = "";
}

/* =====================================================
   INICIO
===================================================== */
renderProductos(PRODUCTOS);
renderMujer();
renderHombre();
renderDestacados();
actualizarBotonDescuento();
actualizarCarrito();
