import positionContainer from '../assets/images/Position.png'
import './PlayerAndScore.css'

export const PlayerAndScore = ( props ) => {


    return (
        <>
            <li>
                <img src={ positionContainer } alt="Contenedor del Jugador y su puntuación" />
            </li>
        </>
    )
}
