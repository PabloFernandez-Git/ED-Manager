const { AGREGAR_TITULAR } = require("./type");
const { AGREGAR_SUPLENTE } = require("./type");
const { QUITAR_TITULAR } = require("./type");
const { QUITAR_SUPLENTE } = require("./type");


export const agregarTitular = (jugador) => {
    return {
        type: AGREGAR_TITULAR,
        jugador
    }
}

export const agregarSuplente = (jugador) => {
    return {
        type: AGREGAR_SUPLENTE,
        jugador
    }
}

export const quitarTitular = (jugador) => {
    return {
        type: QUITAR_TITULAR,
        jugador
    }
}

export const quitarSuplente = (jugador) => {
    return {
        type: QUITAR_SUPLENTE,
        jugador
    }
}
