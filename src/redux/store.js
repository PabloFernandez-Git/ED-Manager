import { createStore } from 'redux'

const initialState = {
    jugadores: [],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    return state
}

export default createStore(reducerEntrenador);