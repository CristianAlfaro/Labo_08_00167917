
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
var eliminado = document.getElementById("eliminar");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});


const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
        //tr.setAttribute('class','click');
    });
    tbody.appendChild(tr);
    console.log(tbody);

}

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    console.log(tbody);
}

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    if(document.querySelector("#fecha").value == "" && document.querySelector("#descp").value== "" && document.querySelector("#cant").value== ""){

    
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[0].textContent;
            document.querySelector("#descp").value = item.childNodes[1].textContent;
            document.querySelector("#cant").value = item.childNodes[2].textContent;
        });
    })
    } 
}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

eliminado.addEventListener('click',eliminar(document.querySelector(".tabla-btc tbody")));


var firstfield = document.getElementById("fecha");
var secondfield = document.getElementById("descp");
var thridfield = document.getElementById("cant");

firstfield.oninput = () => {
    var valor = firstfield.value;
    if (valor == "" || valor == null) {
        firstfield.style.backgroundColor = "white";
    } else {
        firstfield.style.backgroundColor = "#e2e2e2";
    }
}

secondfield.oninput = () => {
    var valor = secondfield.value;
    if (valor == "" || valor == null) {
        secondfield.style.backgroundColor = "white";
    } else {
        secondfield.style.backgroundColor = "#e2e2e2";
    }
}

thridfield.oninput = () => {
    var valor = thridfield.value;
    if (valor == "" || valor == null) {
        thridfield.style.backgroundColor = "white";
    } else {
        thridfield.style.backgroundColor = "#e2e2e2";
    }
}

