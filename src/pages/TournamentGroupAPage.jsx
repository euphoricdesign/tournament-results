import { useEffect } from 'react'
import { PlayerAndScore } from '../components/PlayerAndScore'
import { useState } from 'react'

import { FULL_URL_A } from '../config'

import './TournamentPage.css'

export const TournamentGroupAPage = () => {
    const [ showContent, setShowContent ] = useState(false)
    const [ data, setData ] = useState(null)

    useEffect(() => {
        fetch(FULL_URL_A)
        .then(res => res.text())
        .then(resp => {
            let data = JSON.parse(resp.substring(47).slice(0, -2))
            setData(data)
        })
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true); 
        }, 300);
      
        return () => {
            clearTimeout(timer);
        };
    })
    
    return (
        <div className="contenedor-total">
            <h1 className='GroupA'>Grupo A</h1>
            {
                data !== null && showContent
                ? (
                    <div className="scroll-container">
                        <ul className="list-container">
                            {
                                data.table.rows.map(obj => {
                                    let position = obj.c[0].v
                                    let name = obj.c[1]?.v
                                    let score = obj.c[2]?.v


                                    return (<PlayerAndScore key={position} position={position} name={name} score={score} />)
                                })
                            }
                        </ul>
                    </div>
                )
                : (<></>)
            }
        </div>
    )
}