import { PlayerAndScore } from "../components/PlayerAndScore"
import { useGeneratePLayers } from "../hooks/useGeneratePlayers"

export const TournamentPage = () => {

    const { array } = useGeneratePLayers()
    
    return (
        <>
            <ul>
                {
                    array.map(obj => (
                        <PlayerAndScore />
                    ))
                }
            </ul>
        </>
    )
}