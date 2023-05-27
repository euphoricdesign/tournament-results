import { Navigate, Route, Routes } from 'react-router-dom'
import { TournamentGroupAPage } from '../pages/TournamentGroupAPage'
import { TournamentGroupBPage } from '../pages/TournamentGroupBPage'
import { TournamentGroupFinal } from '../pages/TournamentGroupFinal'

export const TournamentRouter = () => {
    return (
        <Routes>
            <Route path="/group-a" element={<TournamentGroupAPage />} />
            <Route path="/group-b" element={<TournamentGroupBPage />} />
            <Route path="/group-finalistas" element={<TournamentGroupFinal />} />

            <Route path="/*" element={<Navigate to='/group-a' />} />
        </Routes>
    )
}