import { TournamentLayout } from './layout/TournamentLayout'
import { TournamentGroupAPage } from './pages/TournamentGroupAPage'
import { AppTheme } from './theme'

export const TournamentApp = () => {

    //* Manejo de rutas 

    return (
        <>
            <AppTheme>
                <TournamentLayout>
                    <TournamentGroupAPage />
                </TournamentLayout>
            </AppTheme>
        </>
    )
}