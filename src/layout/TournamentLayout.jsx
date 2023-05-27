import { PlayerAndScore } from '../components/PlayerAndScore'
import { useGeneratePLayers } from '../hooks/useGeneratePlayers'
import './TournamentLayout.css'


export const TournamentLayout = ({ children }) => {

    const { array }= useGeneratePLayers()

    return (
       <div className='layout'>
            {/* <div className='img-container'>
                <img src={ image } alt="" />
            </div> */}


            { children }
            <div className='text-container'>
                <p className='small-text'>Este torneo no esta afiliado ni patrocinado por electronic arts ni sus licenciantes. Ver reglamento en kolbi.cr</p>
            </div>
       </div>
    )
}