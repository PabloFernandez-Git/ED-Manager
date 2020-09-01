import React from 'react';
import { connect } from 'react-redux';

const Jugadores = ({jugadores}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(jugador => (
                    <article className="jugador">
                        <img src={jugador.foto} alt={jugador.nombre} />
                        <h3>{jugador.nombre}</h3>
                        <div>
                            <button>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);