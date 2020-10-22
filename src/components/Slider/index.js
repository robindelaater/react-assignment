import React from 'react'

const Slider = ({type, stock, noStock, value, isMachineInProgress, setValue}, ...props) => {
    return (
        <div className="slider">
            {stock === 0
                ? <h2>{noStock}</h2>
                : <h2>{type}: {value <= 1 ? 'geen' : `${value} klontjes`}</h2>
            }
            <input
                type="range"
                min="0"
                max="10"
                defaultValue={value}
                disabled={isMachineInProgress || stock === 0}
                onChange={(event) => setValue(event.target.value)}
                id="sugar"
            />
        </div>
    )
}

export default Slider