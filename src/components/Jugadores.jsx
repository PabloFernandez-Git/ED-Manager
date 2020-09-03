import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { agregarTitular as agregarTitularAction } from '../redux/action';
import { agregarSuplente as agregarSuplenteAction } from '../redux/action';


const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {
  
    const gridJugadores = createRef()

    useEffect(() => {
      setScrollContainer()
      document.addEventListener('click', setScrollContainer)
    }, []) 
    
    // Función que fija el tamaño del grid de los jugadores
    const setScrollContainer = (desktop = true) => {
      let container = gridJugadores.current
      if (container) {
        const generatedGrid = () => {
          let items = container.getElementsByClassName('jugador')
          let itemsLength = items.length
          let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1
  
          const getWidth = () => {
            let n = bp + (itemsLength > bp ? 0.3 : 0)
            return (itemsLength / n) * 100
          }
          return `
                  display: grid;
                  grid-template-columns: repeat(${itemsLength}, 225px);
                  grid-gap: 1rem;
                  width : ${getWidth()}%;
                `
        }
        let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
        container.setAttribute('style', styles)
      }
    }

    return (
        <section>
            <h2>Jugadores</h2>
            <div className="contenedor-jugadores">
                <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
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
            </div>
        </section>
    )
}

// Funcion que mapea el contenido del estado y lo convierte en propiedades
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

// Funcion que mapea las funciones y las convierte en propiedades
// Funciones que se convierten en propiedades
// Este tipo de funciones son las encargadas de llevar las acciones que van a ser leidas por el reducer para poder cambiar el estado
const mapDispatchToProps = dispatch => ({

    agregarTitular(jugador){
        dispatch(agregarTitularAction(jugador))
    },
    agregarSuplente(jugador) {
        dispatch(agregarSuplenteAction(jugador))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);