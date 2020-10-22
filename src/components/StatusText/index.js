import React from 'react'

const StatusText = ({isMachineInProgress, currentDrink}, ...props) => {
    return (
        <p className={isMachineInProgress ? 'status in-progress' : 'status'}>{
            currentDrink === ''
                ? 'Klaar voor keuze!'
                : `Machine maakt ${currentDrink}...`
        }</p>
    )
}

export default StatusText