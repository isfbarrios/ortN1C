let reservasList = [];
let reservasEstados = ['Pendiente', 'Rechazada', 'Finalizada', 'Cerrada'];

class Reserva {

    constructor(nombreLocal, usuario, estado, puntuacion, fecha) {
        this.id = this.autoIncrementId();
        this.nombreLocal = nombreLocal;
        this.usuario = usuario;
        this.estado = estado;
        this.puntuacion = puntuacion;
        this.fecha = fecha;
    }

    getId() { return this.id; }
    getNombreLocal() { return this.nombreLocal; }
    getUsuario() { return this.usuario; }
    getEstado() { return this.estado; }
    getPuntuacion() { return this.puntuacion; }
    getFecha() { return this.fecha; }

    autoIncrementId() {
        return reservasList.length;
    }
}

function findReservaById(id) {
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].id === id) return true;
        }
    }
    return false;
}
    
function getReservasByUser(usuario) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].usuario === usuario) retReservas.push(reservasList[i]);
        }
    }
    return false;
}

function getReservasByLocal(nombreLocal) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].nombreLocal === nombreLocal) retReservas.push(reservasList[i]);
        }
    }
    return false;
}

function getReservasByEstadoAll() {
    let retReservas = [];
    if (reservasList.length > 0) {
        reservasEstados.forEach((estado) => {
        retReservas.push(getReservasByEstado(estado));
        });
    }
    return retReservas;
}
function getReservasByEstado(estado) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].estado === estado) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}
function getReservasByPuntuacion(puntuacion) {
    let retReservas = [];
    if (reservasList.length > 0) {
        for (let i = 0; i < reservasList.length; i++) {
            if (reservasList[i].puntuacion === puntuacion) retReservas.push(reservasList[i]);
        }
    }
    return retReservas;
}