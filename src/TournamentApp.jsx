import { TournamentLayout } from './layout/TournamentLayout'
import { TournamentPage } from './pages/TournamentPage'
import { AppTheme } from './theme'

export const TournamentApp = () => {
    return (
        <>
            <AppTheme>
                <TournamentLayout>
                    <TournamentPage />
                </TournamentLayout>
            </AppTheme>
        </>
    )
}