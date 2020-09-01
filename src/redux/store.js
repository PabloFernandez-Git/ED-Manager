import { createStore } from 'redux'

const initialState = {
    jugadores: [
    {
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    },
    {
        id: 2,
        nombre: "Beto Quiroga",
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 3,
        nombre: "Alejo Garcia",
        foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    return state
}

export default createStore(reducerEntrenador);