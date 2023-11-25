const section = document.getElementById("info");
const aside = document.querySelector(".aside");
const btnCuenta = document.getElementById("btnCuenta");
const btnSeguridad = document.getElementById("btnSeguridad");
const btnMetodo = document.getElementById("btnMetodo");
let btnActualizar = undefined;
let imagenActive = null;
let imagenes = undefined;
let opcionesPago = undefined;

btnCuenta.addEventListener("click", (e) => {
  section.innerHTML = "";
  mostrarCuenta();
});
btnSeguridad.addEventListener("click", (e) => {
  section.innerHTML = "";
  mostrarSeguridad();
});

function handleOpcionesPago(e) {
  if (e.target.classList.contains("opciones")) return;

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.remove("active");
  }

  e.target.classList.add("active");
  imagenActive = e.target;
}

function handleBtnActualizar() {
  actualizarMetodo(imagenActive.getAttribute("src"), imagenActive.dataset.name);
  console.log("click");
}

btnMetodo.addEventListener("click", (e) => {
  section.innerHTML = "";
  mostrarMetodo();
});

function mostrarCuenta() {
  section.innerHTML = ` 
<article class="item" style="height: 511px;">
    <p class="tittle">CUENTA</p>
        <div id="name">
            <p>Nombre</p>
            <input type="text" value="Fabian">
        </div> 
        <div id="last-name">
            <p>Apellido</p>
            <input type="text" value="Barzola">
        </div>
        <div id="mail">
            <p>Email</p>
            <input type="email" value="fabianbarzola2003@gmail.com">
        </div>
        <div id="phone">
            <p>Telefono</p>
        <input type="text" value="2657 2110 04">
        </div>
    <button type="button" id="btn">Actualizar</button>
</article>
`;
}
function mostrarSeguridad() {
  section.innerHTML = ` 
    <article class="item" style="height: 511px;">
            <p class="tittle">SEGURIDAD</p>
            <div id="passActual">
                <p>Contrasena actual</p>
                <input type="text" value="">
            </div> 
            <div id="newPass">
                <p>Nueva contrasena</p>
                <input type="text" value="">
            </div>
            <div id="rePass">
                <p>Repetir contrasena</p>
                <input type="email" value="">
            </div>
            <button type="button" id="btn">Actualizar</button>
    </article>
    `;
}
function mostrarMetodo() {
  section.innerHTML = `
    <article class="item" style="height: 511px;">
            <p class="tittle">METODO DE PAGO</p>
            <div id="method">
                <p id="metodo">Metodo de pago actual</p>
                    <div id="txtandimg">
                        <span id="pagoActual">Mercado pago</span>
                        <img id="imgpago" src="../images/mp.png">
                    </div>
            </div>
            <div id="opcionespago" class="opciones">
                <p id="pagotxt">Opciones de pago</p>
                <div class="opciones-img">
                    <img data-name="Master Card" class="optionsImg" src="../images/Mastercard_2019_logo.svg.png">
                    <img data-name="Visa" class="optionsImg" src="../images/visa.png">
                    <img data-name="Mercado Pago" class="optionsImg" src="../images/mp.png">
                </div>
            </div>
            <button type="button" id="btn">Actualizar</button>
    </article>
    `;

  opcionesPago = document.getElementById("opcionespago");
  imagenes = opcionesPago.getElementsByTagName("img");
  opcionesPago.removeEventListener("click", handleOpcionesPago);
  opcionesPago.addEventListener("click", handleOpcionesPago);

  btnActualizar = document.getElementById("btn");
  btnActualizar.removeEventListener("click", handleBtnActualizar);
  btnActualizar.addEventListener("click", handleBtnActualizar);
}

function actualizarMetodo(elemento, name) {
  section.innerHTML = `
    <article class="item" style="height: 511px;">
            <p class="tittle">METODO DE PAGO</p>
            <div id="method">
                <p id="metodo">Metodo de pago actual</p>
                    <div id="txtandimg">
                        <span id="pagoActual">${name}</span>
                        <img id="imgpago" src="${elemento}">
                    </div>
            </div>
            <div id="opcionespago" class="opciones">
                <p id="pagotxt">Opciones de pago</p>
                <div class="opciones-img">
                    <img data-name="Master Card" class="optionsImg" src="../images/Mastercard_2019_logo.svg.png">
                    <img data-name="Visa" class="optionsImg" src="../images/visa.png">
                    <img data-name="Mercado Pago" class="optionsImg" src="../images/mp.png">
                </div>
            </div>
            <button type="button" id="btn">Actualizar</button>
    </article>
    `;

  opcionesPago = document.getElementById("opcionespago");
  imagenes = opcionesPago.getElementsByTagName("img");
  opcionesPago.removeEventListener("click", handleOpcionesPago);
  opcionesPago.addEventListener("click", handleOpcionesPago);

  btnActualizar = document.getElementById("btn");
  btnActualizar.removeEventListener("click", handleBtnActualizar);
  btnActualizar.addEventListener("click", handleBtnActualizar);
}
