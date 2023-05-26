import positionContainer from '../assets/images/Position.png'
import './PlayerAndScore.css'

export const PlayerAndScore = ({ position, name, score }) => {


    return (
        <>
            <li className='container-image-text'>
                <div className='wrapper-info-player'>
                    <p>{ position }</p>
                    <p>{ name }</p>
                    <p>{ score }</p>
                </div>

                <img src={ positionContainer } alt="Contenedor del Jugador y su puntuación" />
            </li>
        </>
    )
}
