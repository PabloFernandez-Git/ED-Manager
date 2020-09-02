import React from 'react';
import { connect } from 'react-redux';

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(jugador => (
                    <article className="jugador" key={jugador.id}>
                        <img src={jugador.foto} alt={jugador.nombre} />
                        <h3>{jugador.nombre}</h3>
                        <div>
                            <button onClick={ () => agregarTitular(jugador) }>Titular</button>
                            <button onClick={ () => agregarSuplente(jugador) }>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

// Funcion que mapea el contenido del estado y lo convierte en propiedades
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

// Funcion que mapea las funciones y las convierte en propiedades
// Funciones que se convierten en propiedades
// Este tipo de funciones son las encargadas de llevar las acciones que van a ser leidas por el reducer para poder cambiar el estado
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);