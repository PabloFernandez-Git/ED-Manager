import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                suplentes.map(jugador => (
                    <article className="suplente">
                        <div>
                            <img src={jugador.goto} alt={jugador.nombre} />
                            <button>X</button>
                        </div>
                        <p>{jugador.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)