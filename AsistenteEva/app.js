//funciones del menu de eva
function boletas() {
    let opinion = prompt("Seleccione una opción\n1.-Ver Boleta \n2.-Pagar Cuenta");
    if (opinion == 1) {
        alert("Haga clic aquí para descargar su boleta.")
    } else if (opinion == 2) {
        alert("Usted está siendo transferido, porfavor espere...")
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function llamada() {
    let opinion = prompt("Seleccione una opción\n1.-Problemas con la señal \n2.-Problemas con las llamadas");
    if (opinion == 1 || opinion == 2) {
        alert("estimado usuario su solicitud " + opinion + " Ha sido ingresa con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function oferta() {
    let opinion = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! escribe SI para contactarte con con ejecutivo, de lo contrario NO.");
    if (opinion == "SI") {
        alert("Un ejecutivo contactara contigo...")
    }
    else if (opinion == "NO") {
        alert("Gracias por preferir nuestros servicios");
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function otros() {
    let opinion = prompt("A continuacion escriba su consulta");
    if (opinion !== "")
        alert("estimado usuario su solicitus " + opinion + " Ha sido ingresa con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
    else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function error() {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
}

//variable eva (la que iniciara todo)
let eva = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas");

switch (eva) {
    case "1": boletas();
        break;
    case "2": llamada();
        break;
    case "3": oferta();
        break;
    case "4": otros();
        break;
    case "5": error()
        break;
}