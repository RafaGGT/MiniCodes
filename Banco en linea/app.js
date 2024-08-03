//funciones
function validar() {
    if (id == clientes[0][1] && clave == clientes[0][2]) {
        alert("Bienvenido " + clientes[0][1])
        return saldoActual = clientes[0][3]
    } else if (id == clientes[1][1] && clave == clientes[1][2]) {
        alert("Bienvenido " + clientes[1][1])
        return saldoActual = clientes[1][3]
    } else if (id == clientes[2][1] && clave == clientes[2][2]) {
        alert("Bienvenido " + clientes[2][1])
        return saldoActual = clientes[2][3]
    } else {
        alert("Las credenciales no corresponden a ningun usuario")
    }
}

function saldo() {
    alert("Tu saldo actual es de: " + saldoActual)
}

function giro() {
    let retiro = parseInt(prompt("tu saldo actual es de: " + saldoActual + "\nIngresa el monto que deseas girar"))
    if (saldoActual >= retiro) {
        saldoActual -= retiro
        alert("Giro realizado su nuevo saldo es de " + saldoActual)
        return saldoActual
    } else if (saldoActual <= retiro) {
        alert("Saldo insuficiente")
    } else {
        alert("Giro canceldo")
    }
}
function deposito() {
    let giro = parseInt(prompt("Tu saldo actual es de: " + saldoActual + "\nIngresa el monto que deseas depositar"))
    if (giro >= 1) {
        saldoActual += giro
        alert("Deposito realizado su nuevo saldo ahora es de " + saldoActual)
        return saldoActual
    } else {
        alert("Deposito cancelado")
    }
}

function salir() {
    alert("Muchas gracias por preferirnos")
}

// zona de variables
alert("Bienvenido/a a Banca en línea")
let clientes = [["Cliente 1", "001", 123, 50000], ["Cliente 2", "002", 123, 250000], ["Cliente 3", "003", 123, 250000]];
let id = prompt("Digite el ID porfavor")
let clave = parseInt(prompt("Digite su clave porfavor:  "))
let saldoActual; //variable que permite los cambios permanentes
let menu; //variable que me permite definir menu sin problemas

validar()

do {
    menu = prompt(
        "Bienvenido a banca en linea \n1)Ver saldo \n2)Realizar giro \n3)Realizar depósito \n4)Salir")
    switch (menu) {
        case "1":
            saldo()
            break
        case "2":
            giro()
            break
        case "3":
            deposito()
            break
        case "4":
            salir()
            break
        default:
            break;
    }
}
while (menu != 4) {
}



