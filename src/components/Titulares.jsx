import React from 'react';
import { connect } from 'react-redux';
import cancha from '../cancha.svg';
import { quitarTitular as quitarTitularAction } from '../redux/action';


const Titulares = ({ titulares, quitarTitular }) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(jugador => (
                    <article className="titular" key={jugador.id}>
                        <div>
                            <img src={jugador.foto} alt={jugador.nombre} />
                            <button onClick={ () => quitarTitular(jugador) }>X</button>
                        </div>
                        <p>{jugador.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({

    quitarTitular(jugador) {
        dispatch(quitarTitularAction(jugador))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)