import { TournamentLayout } from './layout/TournamentLayout'
import { TournamentGroupAPage } from './pages/TournamentGroupAPage'
import { TournamentRouter } from './router/TournamentRouter'
import { AppTheme } from './theme'

export const TournamentApp = () => {

    //* Manejo de rutas 

    return (
        <>
            <AppTheme>
                <TournamentLayout>
                    <TournamentRouter />
                </TournamentLayout>
            </AppTheme>
        </>
    )
}