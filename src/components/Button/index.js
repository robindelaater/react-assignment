import React from 'react'
import './Button.css'

function Button({
	isMachineInProgress,
	drink,
	stock,
	handleClick,
	...props
}) {
	let isDisabled = false

	// Check for drinks that affect chocolate stock
	switch (drink) {
		case 'Chocolade':
			isDisabled = stock.chocolate === 0
			break;
		case 'Wiener Melange':
			isDisabled = stock.chocolate === 0
			break;
		case 'Cappuccino':
			isDisabled = stock.milk === 0
			break;
		default:
			break;
	}

	return (
		<button
			onClick={() => handleClick(drink)}
			disabled={isMachineInProgress || isDisabled}
		>{drink}</button>
	)
}

export default Button