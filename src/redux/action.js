const { AGREGAR_TITULAR } = require("./type");
const { AGREGAR_SUPLENTE } = require("./type");


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


